import { spinner } from "@clack/prompts";
import { execa } from "execa";
import color from "picocolors";

export async function upgrade(component: string) {
  const s = spinner();
  try {
    const pkgName =
      component === "all"
        ? "@aristobyte-ui/react"
        : `@aristobyte-ui/${component}`;
    s.start(`Upgrading ${pkgName}...`);
    await execa("yarn", ["upgrade", pkgName], { stdio: "inherit" });
    s.stop();
    console.log(color.green(`✅ ${pkgName} upgraded successfully!`));
  } catch (err) {
    s.stop();
    console.error(
      color.red(`❌ Failed to upgrade component ${component}`),
      err
    );
  }
}
