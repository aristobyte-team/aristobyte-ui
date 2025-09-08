import { spinner } from "@clack/prompts";
import { execa } from "execa";
import color from "picocolors";

export async function remove(component: string) {
  const s = spinner();
  try {
    const pkgName =
      component === "all"
        ? "@aristobyte-ui/react"
        : `@aristobyte-ui/${component}`;
    s.start(`Removing ${pkgName}...`);
    await execa("yarn", ["remove", pkgName], { stdio: "inherit" });
    s.stop();
    console.log(color.green(`✅ ${pkgName} removed successfully!`));
  } catch (err) {
    s.stop();
    console.error(color.red(`❌ Failed to remove component ${component}`), err);
  }
}
