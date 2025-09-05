export function getPackage(category: string, unit: string): string {
  if (category === "presets") {
    return category;
  }

  return unit;
}

export function insertPackageToText(
  text: string,
  category: string,
  unit: string
): string {
  return text.replace("{{package}}", getPackage(category, unit));
}

export function getPackageImportCode(
  category: string,
  unit: string,
  components: string[],
  isGlobalImport?: boolean
): string {
  return `import { ${components.join(", ")} } from "@aristobyte-ui${isGlobalImport ? "" : `/${getPackage(category, unit)}`}";`;
}
