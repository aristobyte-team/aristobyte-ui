import chalk from "chalk";
import { execSync } from "child_process";

export async function doctor() {
  try {
    console.log(chalk.blue("Running project health checks..."));

    // Check Node version
    const nodeVersion = execSync("node -v").toString().trim();
    console.log(chalk.green(`Node version: ${nodeVersion}`));

    // Check npm/yarn
    let yarnVersion = "not installed";
    try {
      yarnVersion = execSync("yarn -v").toString().trim();
    } catch {
      console.log("TODO");
    }
    console.log(chalk.green(`Yarn version: ${yarnVersion}`));

    console.log(chalk.green("All basic health checks passed!"));
  } catch (err) {
    console.error(chalk.red("Doctor check failed"), err);
  }
}
