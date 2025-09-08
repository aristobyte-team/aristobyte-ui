import fs from "fs";
import color from "picocolors";

export async function list() {
  try {
    const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    const deps = pkgJson.dependencies || {};
    const aristobyteDeps = Object.keys(deps).filter((d) =>
      d.startsWith("@aristobyte-ui/")
    );

    console.log(color.blue("Installed AristoByteUI components:"));
    aristobyteDeps.forEach((dep) => console.log(color.green(dep)));
  } catch (err) {
    console.error(color.red("❌ Failed to list components"), err);
  }
}
