export const Code = {
  Import: (componentsToImport: string[], path: string = "") =>
    `import { ${componentsToImport.join(", ")} } from "@aristobyte-ui${path}";`,
};
