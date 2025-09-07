import { compareVersions } from "./compareVersions";
import color from "picocolors";

export function checkVersion(
  name: string,
  version: string,
  minVersion: string
) {
  if (version === "unknown" || compareVersions(version, minVersion) < 0) {
    return color.red(`❌ ${name} >= ${minVersion} required`);
  }
  return color.green(`✅ ${version}`);
}
