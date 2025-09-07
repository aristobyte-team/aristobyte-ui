import { select, text, spinner } from "@clack/prompts";
import color from "picocolors";
import fs from "fs";
import path from "path";
import { installPackage } from "../utils/installPackage";

const TEMPLATES = [
  {
    name: "Next App Router",
    desc: "A Next.js 15 with app-router directory template pre-configured with AristoByteUI.",
    repo: "aristobyte-ui/next-app-router-template",
  },
  {
    name: "Next Pages",
    desc: "A Next.js 15 with pages directory template pre-configured with AristoByteUI.",
    repo: "aristobyte-ui/next-pages-template",
  },
  {
    name: "Vite",
    desc: "A Vite template pre-configured with AristoByteUI.",
    repo: "aristobyte-ui/vite-template",
  },
  {
    name: "Astro",
    desc: "An Astro template pre-configured with AristoByteUI.",
    repo: "aristobyte-ui/astro-template",
  },
  {
    name: "CRA",
    desc: "A Create React App template pre-configured with AristoByteUI.",
    repo: "aristobyte-ui/cra-template",
  },
];

const PACKAGE_MANAGERS = ["npm", "yarn", "pnpm", "bun"];

const DEFAULT_NAME = "aristobyte-ui-app";

export async function init() {
  console.log(color.cyan("┌  Create a new project"));

  await select({
    message: "Select a template (Enter to select)",
    options: TEMPLATES.map((t, i) => ({
      value: i + "",
      label: `${t.name} (${t.desc})`,
    })),
  });

  const projectNameResult = await text({
    message: "New project name (Enter to skip with default name)",
    placeholder: DEFAULT_NAME,
  });

  const projectName = (String(projectNameResult) || DEFAULT_NAME).trim();
  const projectPath = path.join(process.cwd(), projectName);

  console.log(color.cyan(`${projectName}\n`));

  await select({
    message: "Select a package manager (Enter to select)",
    options: PACKAGE_MANAGERS.map((pm, i) => ({
      value: i.toString(),
      label: pm,
    })),
  });

  console.log(color.cyan("\nTemplate created successfully!\n"));

  const s = spinner();
  try {
    s.start(`Creating project '${projectName}'...`);

    if (!fs.existsSync(projectPath)) fs.mkdirSync(projectPath);
    const srcPath = path.join(projectPath, "src");
    if (!fs.existsSync(srcPath)) fs.mkdirSync(srcPath);

    // Create package.json if missing
    const pkgPath = path.join(projectPath, "package.json");
    if (!fs.existsSync(pkgPath)) {
      fs.writeFileSync(
        pkgPath,
        JSON.stringify({ name: projectName, private: true }, null, 2)
      );
    }

    // Install AristoByteUI main package
    s.message("Installing AristoByteUI packages...");
    await installPackage("@aristobyte-ui/react");

    s.stop();
    console.log(color.green("✅ Project initialized successfully!"));
  } catch (err) {
    s.stop();
    console.error(color.red("❌ Failed to initialize project"), err);
    return;
  }
}
