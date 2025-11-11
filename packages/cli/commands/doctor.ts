import { execSync } from "child_process";
import { spinner } from "@clack/prompts";
import { compareVersions } from "../utils/compareVersions";
import { getCurrentPackageManager } from "utils/getCurrentPackageManager";
import color from "picocolors";

const MIN_NODE_VERSION = "20.19.0";

export async function doctor() {
  const s = spinner();
  try {
    s.start("Running project health checks...");

    // Node
    let nodeVersion = "unknown";
    try {
      nodeVersion = execSync("node -v").toString().trim();
    } catch (err) {
      console.error(color.red("❌ Failed to detect Node version:"), err);
    }

    let nodeStatus = "✅ OK";
    if (
      nodeVersion !== "unknown" &&
      compareVersions(nodeVersion, MIN_NODE_VERSION) < 0
    ) {
      nodeStatus = color.red(`❌ Node >= ${MIN_NODE_VERSION} required`);
    }

    // Yarn
    let pkgManagerVersion = "unknown";
    const pkgManager = getCurrentPackageManager();
    try {
      pkgManagerVersion = execSync(`${pkgManager} -v`).toString().trim();
    } catch (err) {
      console.error(
        color.red(`❌ Failed to detect ${pkgManager} version:`),
        err
      );
    }

    s.stop();
    console.log(color.green(`Node version: ${nodeVersion} ${nodeStatus}`));
    console.log(color.green(`${pkgManager} version: ${pkgManagerVersion}`));
    console.log(color.green("All basic health checks completed!"));
  } catch (err) {
    s.stop();
    console.error(color.red("❌ Doctor check failed"), err);
  }
}
