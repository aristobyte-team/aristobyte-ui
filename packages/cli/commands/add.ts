import { spinner, text } from "@clack/prompts";
import { getCurrentPackageManager } from "../utils/getCurrentPackageManager";
import color from "picocolors";
import type { OptionValues } from "commander";
import { installPackage } from "../utils/installPackage";
import { list } from "./list";

const DEFAULT_PACKAGE = "all";

export async function add(component: string, options: OptionValues) {
  if (options.list) {
    await list({ all: true }, true);
  }

  const pkgManager = getCurrentPackageManager();
  if (options.packageManager) {
    console.log(`${color.cyan("Current package manager:")}
${color.green("◇")} ${pkgManager}`);
    process.exit(0);
  }

  const s = spinner();
  let packageName: string = DEFAULT_PACKAGE;
  if (!component) {
    console.log(
      `${color.green("◇")}  ${color.white("You did not specify, which package should be added")}
${color.gray("|")}   ${color.gray("Please select one of the packages below listed to proceed.")}
${color.gray("|")}`
    );
    await list({ all: true });
    packageName = (await text({
      message: "Component name to add (Enter to install all components)",
      placeholder: DEFAULT_PACKAGE,
      defaultValue: DEFAULT_PACKAGE,
    })) as string;
  } else {
    packageName = component;
  }

  try {
    s.start(`Installing ${packageName}...`);
    const pkgManager = getCurrentPackageManager();

    if (packageName === "all") {
      await installPackage(pkgManager, "@aristobyte-ui/react");
      s.stop();
      console.log(color.green("✔ All components installed!"));
      return;
    }

    const pkgName = `@aristobyte-ui/${packageName}`;
    await installPackage(pkgManager, pkgName);
    s.stop();
    console.log(color.green(`✔ Component ${packageName} installed!`));
  } catch (err) {
    s.stop();
    console.error(color.red(`× Failed to install package ${packageName}`), err);
  }
}
