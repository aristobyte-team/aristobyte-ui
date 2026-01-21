import fs from "fs";
import path from "path";

export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export function getCurrentPackageManager(
  cwd: string = process.cwd()
): PackageManager {
  const lockFiles: Record<PackageManager, string> = {
    bun: "bun.lockb",
    pnpm: "pnpm-lock.yaml",
    yarn: "yarn.lock",
    npm: "package-lock.json",
  };

  for (const [manager, lockFile] of Object.entries(lockFiles) as [
    PackageManager,
    string,
  ][]) {
    if (fs.existsSync(path.join(cwd, lockFile))) {
      return manager;
    }
  }

  return "npm";
}
