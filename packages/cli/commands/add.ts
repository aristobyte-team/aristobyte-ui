import { spinner } from "@clack/prompts";
import { installPackage } from "../utils/installPackage";
import { getCurrentPackageManager } from "../utils/getCurrentPackageManager";
import color from "picocolors";

export async function add(component: string) {
  const s = spinner();
  try {
    s.start(`Installing ${component}...`);
    const pkgManager = getCurrentPackageManager();

    if (component === "all") {
      await installPackage(pkgManager, "@aristobyte-ui/react");
      s.stop();
      console.log(color.green("✅ All components installed!"));
      return;
    }

    const pkgName = `@aristobyte-ui/${component}`;
    await installPackage(pkgManager, pkgName);
    s.stop();
    console.log(color.green(`✅ Component ${component} installed!`));
  } catch (err) {
    s.stop();
    console.error(
      color.red(`❌ Failed to install component ${component}`),
      err
    );
  }
}
