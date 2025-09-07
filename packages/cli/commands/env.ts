import os from "os";
import { execSync } from "child_process";
import { spinner } from "@clack/prompts";
import { checkVersion } from "../utils/checkVersion";
import color from "picocolors";

const MIN_VERSIONS = {
  node: "20.17.0",
  npm: "10.8.2",
  yarn: "1.22.22",
};

function getVersion(command: string, name: string): string {
  try {
    return execSync(command).toString().trim();
  } catch (err) {
    console.error(color.red(`❌ Failed to detect ${name} version:`), err);
    return "unknown";
  }
}

export async function env() {
  const s = spinner();
  try {
    s.start("Fetching system environment info...");

    const nodeVersion = getVersion("node -v", "Node");
    const npmVersion = getVersion("npm -v", "npm");
    const yarnVersion = getVersion("yarn -v", "Yarn");

    s.stop();

    console.log(color.blue("System Environment Info:"));
    console.log(
      color.green(`OS: ${os.type()} ${os.release()} (${os.platform()})`)
    );
    console.log(color.green(`CPU: ${os.cpus()[0].model}`));
    console.log(
      color.green(`Memory: ${(os.totalmem() / 1024 / 1024).toFixed(0)} MB`)
    );
    console.log(
      `Node: ${checkVersion("Node", nodeVersion, MIN_VERSIONS.node)}`
    );
    console.log(`npm: ${checkVersion("npm", npmVersion, MIN_VERSIONS.npm)}`);
    console.log(
      `Yarn: ${checkVersion("Yarn", yarnVersion, MIN_VERSIONS.yarn)}`
    );
  } catch (err) {
    s.stop();
    console.error(
      color.red("❌ Failed to fetch system environment info:"),
      err
    );
  }
}
