import { execa } from "execa";

export async function installPackage(pkg: string) {
  await execa("yarn", ["add", pkg], { stdio: "inherit" });
}
