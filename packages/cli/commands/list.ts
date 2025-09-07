import fs from "fs";
import chalk from "chalk";

export async function list() {
  try {
    const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    const deps = pkgJson.dependencies || {};
    const aristobyteDeps = Object.keys(deps).filter((d) =>
      d.startsWith("@aristobyte-ui/")
    );

    console.log(chalk.blue("Installed AristoByteUI components:"));
    aristobyteDeps.forEach((dep) => console.log(chalk.green(dep)));
  } catch (err) {
    console.error(chalk.red("Failed to list components"), err);
  }
}
