export function getPackage(category: string, unit: string): string {
  switch (category) {
    case 'presets':
      return 'presets';
    case 'get-started':
      return '[YOUR_PACKAGE_NAME]';
    default:
      return unit;
  }
}

export function insertPackageToText(text: string, pkg: string): string {
  return text.replace('{{package}}', pkg);
}

export function getPackageImportCode(
  category: string,
  unit: string,
  components: string[],
  isGlobalImport?: boolean
): string {
  return `import { ${components.join(', ')} } from "@aristobyte-ui${isGlobalImport ? '' : `/${getPackage(category, unit)}`}";`;
}

export function parseInstallationScript(script: string, category: string, unit: string) {
  const pkg = getPackage(category, unit);

  if (category === 'get-started') {
    return script.replace('/{{package}}', '');
  }

  return insertPackageToText(script, pkg);
}
