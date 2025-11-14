import fs from "fs";
import color from "picocolors";
import type { OptionValues } from "commander";
import { getCurrentPackageManager } from "utils/getCurrentPackageManager";

export async function remoteList() {}

export async function list(options: OptionValues, endBlock?: boolean) {
  let handled = false;

  if (options.all) {
    handled = true;
    const url = "https://registry.npmjs.org/-/org/aristobyte-ui/package";

    const omit = ["cli", "react"];

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Registry request failed: ${res.status}`);

      const data = await res.json();
      const packages = Object.keys(data)
        .map((dep) => dep.split("/")[1])
        .filter((dep) => !omit.includes(dep))
        .sort();
      console.log(
        `${color.green("◇")}  ${color.white("Listing AristoByteUI packages:")}
${packages.map((dep) => `${color.gray("|")}   ${color.cyan(dep)}`).join("\n")}`
      );
    } catch (err) {
      console.error(
        color.red("× Failed to fetch package list from npm registry")
      );
      console.error(color.dim(String(err)));
    }
    if (endBlock) console.log(color.green("◇"));
    process.exit(0);
  }

  if (options.installed) {
    handled = true;
    try {
      const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
      const deps = pkgJson.dependencies || {};
      const aristobyteDeps = Object.keys(deps)
        .filter((d) => d.startsWith("@aristobyte-ui/"))
        .map((dep) => (dep.includes("react") ? "all" : dep.split("/")[1]));

      console.log(
        `${color.green("◇")}  ${color.white("Listing installed AristoByteUI packages:")}
${aristobyteDeps.map((dep) => `${color.gray("|")}   ${color.cyan(dep)}`).join("\n")}`
      );
    } catch (err) {
      console.error(color.red("× Failed to list packages"), err);
    }
    if (endBlock) console.log(color.green("◇"));
    process.exit(0);
  }

  if (options.outdated) {
    handled = true;

    const packagesToUpdate = [];

    try {
      const pkgJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
      const deps = pkgJson.dependencies || {};
      const installed = Object.keys(deps).filter((d) =>
        d.startsWith("@aristobyte-ui/")
      );

      if (installed.length === 0) {
        console.log(color.yellow("No AristoByteUI packages installed."));
        process.exit(0);
      }

      console.log(
        `${color.green("◇")}  ${color.white("Checking for outdated AristoByteUI packages...")}`
      );

      for (const pkg of installed) {
        const localVersion = deps[pkg].replace(/^[^\d]*/, "");
        const registryUrl = `https://registry.npmjs.org/${pkg}`;

        try {
          const res = await fetch(registryUrl);
          if (!res.ok)
            throw new Error(`Registry request failed: ${res.status}`);

          const data = await res.json();
          const latest = data["dist-tags"]?.latest;

          if (!latest) continue;

          if (latest !== localVersion) {
            const p = pkg.replace("@aristobyte-ui/", "");
            packagesToUpdate.push([p, latest]);
            console.log(
              `${color.gray("|")}   ${color.cyan(p)} ` +
                `${color.red(localVersion)} → ${color.green(latest)}`
            );
          }
        } catch (err) {
          console.error(
            color.red(`× Failed to check ${pkg} on npm registry`),
            err
          );
        }
      }
    } catch (err) {
      console.error(color.red("× Failed to check outdated packages"), err);
    }

    const pkgManager = getCurrentPackageManager();

    if (endBlock)
      console.log(
        `${color.gray("|")}
${color.green("◇")}  ${packagesToUpdate.length > 0 ? color.gray(`Tip: run '${pkgManager} upgrade ${packagesToUpdate.map((p) => `${p[0]}@${p[1]}`).join(" ")}'`) : color.green("✔ Everything is up to date!")}`
      );
    process.exit(0);
  }

  if (!handled) {
    console.log(
      color.gray(
        "No option provided. Use 'aristobyte-ui list --help' for usage."
      )
    );
  }
}
