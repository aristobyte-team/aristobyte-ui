import { spinner } from "@clack/prompts";
import { installPackage } from "../utils/installPackage";
import fs from "fs";
import path from "path";
import color from "picocolors";

export async function init() {
  const s = spinner();
  try {
    const projectName = path.basename(process.cwd());
    console.log(color.blue(`Initializing AristoByteUI project: ${projectName}`));

    if (!fs.existsSync("src")) fs.mkdirSync("src");
    if (!fs.existsSync("package.json")) {
      fs.writeFileSync(
        "package.json",
        JSON.stringify({ name: projectName, private: true }, null, 2)
      );
    }

    s.start("Installing all AristoByteUI components...");
    await installPackage("@aristobyte-ui/react");
    s.stop();

    console.log(color.green("✅ Project initialized successfully!"));
  } catch (err) {
    s.stop();
    console.error(color.red("❌ Failed to initialize project"), err);
  }
}
