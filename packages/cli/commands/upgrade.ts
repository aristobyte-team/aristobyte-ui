import { getCurrentPackageManager } from "utils/getCurrentPackageManager";
import { spinner } from "@clack/prompts";
import { execa } from "execa";
import color from "picocolors";
import type { OptionValues } from "commander";

export async function upgrade(component: string, options: OptionValues) {
  if (!component && !options.all) {
    console.error(color.red("× No component specified for upgrade."));
    console.log(
      color.gray(
        "Use: 'aristobyte-ui upgrade <component>' or 'aristobyte-ui upgrade --all'"
      )
    );
    process.exit(0);
  }

  const s = spinner();
  const pkgManager = getCurrentPackageManager();

  try {
    const isAll = options.all || component === "all";

    const targets = isAll
      ? ["@aristobyte-ui/react"]
      : component
        ? [`@aristobyte-ui/${component}`]
        : [];

    if (targets.length === 0) {
      console.error(color.red("× No component specified for upgrade."));
      console.log(
        color.gray("Use: aristobyte-ui upgrade <component> or --all")
      );
      process.exit(1);
    }

    const versionSuffix = options.to ? `@${options.to}` : "";

    const sLabel = isAll
      ? "Upgrading all AristoByteUI components..."
      : `Upgrading ${targets.join(", ")}...`;

    s.start(sLabel);

    for (const pkg of targets) {
      const fullSpecifier = `${pkg}${versionSuffix}`;

      await execa(pkgManager, ["upgrade", fullSpecifier], {
        stdio: "inherit",
      });
    }

    s.stop();

    console.log(
      color.green(
        `✔ Upgrade complete${options.to ? ` → version ${options.to}` : ""}!`
      )
    );
  } catch (err) {
    s.stop();
    console.error(color.red(`× Upgrade failed.`));
    console.error(color.dim(String(err)));
  }
}
