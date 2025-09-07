import { spinner } from "@clack/prompts";
import { installPackage } from "../utils/installPackage";
import color from "picocolors";

export async function add(component: string) {
  const s = spinner();
  try {
    s.start(`Installing ${component}...`);

    if (component === "all") {
      await installPackage("@aristobyte-ui/react");
      s.stop();
      console.log(color.green("✅ All components installed!"));
      return;
    }

    const pkgName = `@aristobyte-ui/${component}`;
    await installPackage(pkgName);
    s.stop();
    console.log(color.green(`✅ Component ${component} installed!`));
  } catch (err) {
    s.stop();
    console.error(color.red(`❌ Failed to install component ${component}`), err);
  }
}
