import { installPackage } from "../utils/installPackage";
import chalk from "chalk";
import fs from "fs";
import path from "path";

export async function init() {
  try {
    const projectName = path.basename(process.cwd());
    console.log(
      chalk.blue(`Initializing AristoByteUI project: ${projectName}`)
    );

    // Create basic project structure if missing
    if (!fs.existsSync("src")) fs.mkdirSync("src");
    if (!fs.existsSync("package.json")) {
      fs.writeFileSync(
        "package.json",
        JSON.stringify({ name: projectName, private: true }, null, 2)
      );
    }

    // Install meta package
    console.log(chalk.blue("Installing all AristoByteUI components..."));
    await installPackage("@aristobyte-ui/react");

    console.log(chalk.green("Project initialized successfully!"));
  } catch (err) {
    console.error(chalk.red("Failed to initialize project"), err);
  }
}
