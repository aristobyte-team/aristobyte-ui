import { execa } from "execa";
import { select, text, spinner } from "@clack/prompts";
import color from "picocolors";

const TEMPLATES = [
  {
    id: "aristobyte-ui-template-nextjs-15-app-router",
    name: "Next App Router",
    desc: "A Next.js 15 with app-router directory template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-nextjs-15-app-router.git",
  },
  {
    id: "aristobyte-ui-template-nextjs-15-pages",
    name: "Next Pages",
    desc: "A Next.js 15 with pages directory template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-nextjs-15-pages.git",
  },
  {
    id: "aristobyte-ui-template-vite",
    name: "Vite",
    desc: "A Vite template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-vite.git",
  },
  {
    id: "aristobyte-ui-template-astro",
    name: "Astro",
    desc: "An Astro template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-astro.git",
  },
  {
    id: "aristobyte-ui-template-cra",
    name: "CRA",
    desc: "A Create React App template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-cra.git",
  },
];

const PACKAGE_MANAGERS = ["npm", "yarn", "pnpm", "bun"];
const DEFAULT_NAME = "aristobyte-ui-app";

export async function init(myProjectName = DEFAULT_NAME) {
  console.log(color.cyan("┌  Create a new project"));

  const projectNameResult = await text({
    message: "New project name (Enter to skip with default name)",
    placeholder: myProjectName,
  });

  const projectName = (String(projectNameResult) || myProjectName).trim();

  const templateIndex = await select({
    message: "Select a template (Enter to select)",
    options: TEMPLATES.map((t, i) => ({
      value: i + "",
      label: `${t.name} (${t.desc})`,
    })),
  });

  const template = TEMPLATES[Number(templateIndex)];

  const packageManagerIndex = await select({
    message: "Select a package manager (Enter to select)",
    options: PACKAGE_MANAGERS.map((pm, i) => ({
      value: i.toString(),
      label: pm,
    })),
  });

  const packageManager = PACKAGE_MANAGERS[Number(packageManagerIndex)];

  console.log(color.cyan("\nTemplate created successfully!\n"));

  const s = spinner();
  try {
    s.start(
      `Preparing '${template.name}' with ${packageManager} configuration...`
    );

    // Clone directly the branch that matches the package manager
    await execa(
      "git",
      [
        "clone",
        "--branch",
        packageManager,
        "--single-branch",
        template.repo,
        projectName,
      ],
      {
        stdio: "ignore",
      }
    );

    await execa("rm", ["-rf", ".git"], { stdio: "ignore", cwd: projectName });

    s.stop();
    console.log(color.green("✅ Project initialized successfully!\n"));

    // Next steps hint
    console.log(color.cyan("Next steps:"));
    console.log(color.cyan(`  cd ${projectName}`));
    console.log(color.cyan(`  ${packageManager} install`));
    console.log(color.cyan(`  ${packageManager} run dev\n`));
  } catch (err) {
    s.stop();
    console.error(color.red("❌ Failed to initialize project"), err);
  }
}
