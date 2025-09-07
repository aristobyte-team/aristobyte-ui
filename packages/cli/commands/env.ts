import chalk from "chalk";
import os from "os";
import { execSync } from "child_process";

export async function env() {
  try {
    console.log(chalk.blue("System Environment Info:"));

    console.log(
      chalk.green(`OS: ${os.type()} ${os.release()} (${os.platform()})`)
    );
    console.log(chalk.green(`CPU: ${os.cpus()[0].model}`));
    console.log(
      chalk.green(`Memory: ${(os.totalmem() / 1024 / 1024).toFixed(0)} MB`)
    );

    const nodeVersion = execSync("node -v").toString().trim();
    console.log(chalk.green(`Node: ${nodeVersion}`));

    let npmVersion = "not installed";
    try {
      npmVersion = execSync("npm -v").toString().trim();
    } catch {
      console.log("TODO");
    }
    console.log(chalk.green(`npm: ${npmVersion}`));

    let yarnVersion = "not installed";
    try {
      yarnVersion = execSync("yarn -v").toString().trim();
    } catch {
      console.log("TODO");
    }
    console.log(chalk.green(`yarn: ${yarnVersion}`));
  } catch (err) {
    console.error(chalk.red("Failed to fetch environment info"), err);
  }
}
