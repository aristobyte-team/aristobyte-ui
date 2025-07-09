export const CodeBlocks = {
  Import: (componentsToImport: string[], path: string = "") =>
    `import { ${componentsToImport.join(", ")} } from "@aristobyte-ui${path}";`,
  Button: {
    Usage: `import { Button } from "@aristobyte-ui";

export default function App() {
  return <Button>Button</Button>;
}`,
  },
};
