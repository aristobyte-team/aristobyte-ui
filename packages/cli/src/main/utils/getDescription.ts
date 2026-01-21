export function getDescription(id: string) {
  switch (id) {
    case "init":
      return "Initialize a new AristoByteUI project from pre-configured templates.\n  Supports automatic project setup, template selection, and package manager configuration.";
    case "add":
      return "Add new UI components to your existing AristoByteUI project.\n  Handles component installation, configuration, and dependency management.";
    case "remove":
      return "Remove installed AristoByteUI components cleanly from your project.\n  Ensures proper cleanup of related files and dependencies.";
    case "upgrade":
      return "Upgrade AristoByteUI components or core packages to their latest versions.\n  Supports selective or full project upgrades.";
    case "list":
      return "List all installed AristoByteUI components in your project.\n  Displays version, status, and available updates for each component.";
    case "doctor":
      return "Run a system and project health check.\n  Detects configuration issues, missing dependencies, and environment mismatches.";
    case "env":
      return "Display detailed environment information.\n  Includes Node.js version, package manager details, and AristoByteUI configuration paths.";
    case "aristobyte-ui":
    default:
      return "Create new AristoByteUI projects or manage existing projects with full control\n  over components, dependencies, and UI stack configuration. Supports initialization,\n  addition, removal, upgrading of components, and project diagnostics.";
  }
}
