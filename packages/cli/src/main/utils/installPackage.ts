import { execa } from 'execa';

export async function installPackage(
  pkgManager: "npm" | "yarn" | "pnpm" | "bun",
  pkg: string,
  dev: boolean = false
) {
  let args: string[] = [];

  switch (pkgManager) {
    case "npm":
      args = ["install", pkg, dev ? "--save-dev" : "--save"];
      break;
    case "yarn":
      args = ["add", pkg];
      if (dev) args.push("-D");
      break;
    case "pnpm":
      args = ["add", pkg];
      if (dev) args.push("-D");
      break;
    case "bun":
      args = ["add", pkg];
      if (dev) args.push("-d");
      break;
    default:
      throw new Error(`Unsupported package manager: ${pkgManager}`);
  }

  await execa(pkgManager, args, { stdio: "inherit" });
}
