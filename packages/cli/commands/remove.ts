import { execa } from "execa";
import chalk from "chalk";

export async function remove(component: string) {
  try {
    const pkgName =
      component === "all"
        ? "@aristobyte-ui/react"
        : `@aristobyte-ui/${component}`;
    console.log(chalk.blue(`Removing ${pkgName}...`));
    await execa("yarn", ["remove", pkgName], { stdio: "inherit" });
    console.log(chalk.green(`${pkgName} removed successfully!`));
  } catch (err) {
    console.error(chalk.red("Failed to remove component"), err);
  }
}
