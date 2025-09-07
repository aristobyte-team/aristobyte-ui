import chalk from "chalk";
import { installPackage } from "../utils/installPackage";

export async function add(component: string) {
  try {
    console.log(chalk.blue(`Installing ${component}...`));

    if (component === "all") {
      await installPackage("@aristobyte-ui/react");
      console.log(chalk.green("All components installed!"));
      return;
    }

    const pkgName = `@aristobyte-ui/${component}`;
    await installPackage(pkgName);
    console.log(chalk.green(`Component ${component} installed!`));
  } catch (err) {
    console.error(chalk.red("Failed to install component"), err);
  }
}
