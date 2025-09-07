import { execa } from "execa";
import chalk from "chalk";

export async function upgrade(component: string) {
  try {
    const pkgName =
      component === "all"
        ? "@aristobyte-ui/react"
        : `@aristobyte-ui/${component}`;
    console.log(chalk.blue(`Upgrading ${pkgName}...`));
    await execa("yarn", ["upgrade", pkgName], { stdio: "inherit" });
    console.log(chalk.green(`${pkgName} upgraded successfully!`));
  } catch (err) {
    console.error(chalk.red("Failed to upgrade component"), err);
  }
}
