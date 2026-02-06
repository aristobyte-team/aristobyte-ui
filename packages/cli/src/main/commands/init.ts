import { execa } from 'execa';
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
    id: "aristobyte-ui-template-vike",
    name: "Vike",
    desc: "A Vike template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-vike.git",
  },
  {
    id: "aristobyte-ui-template-astro",
    name: "Astro",
    desc: "An Astro template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-astro.git",
  },
  {
    id: "aristobyte-ui-template-rsbuild",
    name: "RS Build",
    desc: "An RS Build template pre-configured with AristoByteUI.",
    repo: "https://github.com/aristobyte-team/aristobyte-ui-template-rsbuild.git",
  },
];
const PACKAGE_MANAGERS = ["npm", "yarn", "pnpm", "bun"];
const DEFAULT_NAME = "aristobyte-ui-app";

export async function init(myProjectName: string, options: Record<string, any>) {
  if (options.listTemplates) {
    console.log(`${color.cyan("Available templates:")}
${TEMPLATES.map(
  (t) =>
    `${color.green("◇")} ${t.id.split("aristobyte-ui-template-")[1]} - ${color.gray(t.desc)}`
).join("\n")}`);
    process.exit(0);
  }

  if (options.listPackageManagers) {
    console.log(
      `${color.cyan("Available package managers:")}
${PACKAGE_MANAGERS.map((pm) => `${color.green("◇")} ${pm}`).join("\n")}`
    );
    process.exit(0);
  }

  console.log(color.cyan("┌  Create a new project"));

  let projectName = myProjectName || DEFAULT_NAME;
  if (!myProjectName) {
    projectName = (await text({
      message: "New project name (Enter to skip with default name)",
      placeholder: DEFAULT_NAME,
      defaultValue: DEFAULT_NAME,
    })) as string;
  } else {
    console.log(
      `${color.gray("│")}
${color.green("◇")}  ${color.white("Your project name is:")}
${color.gray("│")}  ${color.green(projectName)}`
    );
  }

  let template = TEMPLATES.find(
    (t) =>
      t.id ===
      `aristobyte-ui-template-${options?.template?.toLowerCase()?.replaceAll(" ", "")}`
  );

  if (!template) {
    const templateIndex = await select({
      message: "Select a template (Enter to select)",
      options: TEMPLATES.map((t, i) => ({
        value: i.toString(),
        label: `${t.name} (${t.desc})`,
      })),
    });
    template = TEMPLATES[Number(templateIndex)];
  } else {
    console.log(
      `${color.gray("│")}
${color.green("◇")}  ${color.white("Template selected:")}
${color.gray("│")}  ${color.green(template.name)}`
    );
  }

  let packageManager = PACKAGE_MANAGERS.find(
    (pm) => pm.toLowerCase() === options.packageManager?.toLowerCase()
  );

  if (!packageManager) {
    const packageManagerIndex = await select({
      message: "Select a package manager (Enter to select)",
      options: PACKAGE_MANAGERS.map((pm, i) => ({
        value: i.toString(),
        label: pm,
      })),
    });
    packageManager = PACKAGE_MANAGERS[Number(packageManagerIndex)];
  } else {
    console.log(
      `${color.gray("│")}
${color.green("◇")}  ${color.white("Package manager selected:")}
${color.gray("│")}  ${color.green(packageManager)}`
    );
  }

  console.log(
    `${color.gray("│")}
${color.green("◇")}  ${color.cyan("Template created successfully!")}
${color.gray("│")}`
  );

  const s = spinner();
  try {
    s.start(
      `Preparing '${template.name}' with ${packageManager} configuration...`
    );

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
      { stdio: "ignore" }
    );

    await execa("rm", ["-rf", ".git"], { cwd: projectName, stdio: "ignore" });

    s.stop(`${color.green("✔ Project initialized successfully!")}`);

    console.log(
      `
${color.gray("│")}
${color.green("◇")}  ${color.cyan("To get started:")}
${color.gray("│")}
${color.gray("├─")} ${color.white("cd " + projectName)}
${color.gray("├─")} ${color.white(`${packageManager} install`)}
${color.gray("├─")} ${color.white(`${packageManager} run dev`)}`
    );
  } catch (err) {
    s.stop();
    console.error(color.red("× Failed to initialize project"), err);
  }
}
