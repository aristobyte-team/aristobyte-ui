export function getTip(id: string) {
  switch (id) {
    case "init":
      return "Run 'aristobyte-ui init' or 'aristobyte-ui init [ myProject ] --template <templateName> --package-manager <packageManagerName>' to bootstrap a new project quickly.\n  Use interactive prompts to customize or provide flags for automation.";
    case "add":
      return "Use 'aristobyte-ui add [ component ]' to install a specific UI component.\n  Combine multiple components for faster setup.";
    case "remove":
      return "Run 'aristobyte-ui remove [ component ]' to cleanly uninstall components.\n  Useful for maintaining a lightweight project.";
    case "upgrade":
      return "Use 'aristobyte-ui upgrade [ component ]' to update components or core packages.\n  Add '--all' to upgrade everything at once.";
    case "list":
      return "Run 'aristobyte-ui list' to view installed components and versions.\n  Add '--outdated' to check for available updates.";
    case "doctor":
      return "Execute 'aristobyte-ui doctor' to analyze your setup.\n  Fixes and recommendations will be displayed for common issues.";
    case "env":
      return "Run 'aristobyte-ui env' to inspect your development environment.\n  Helpful for debugging version or configuration conflicts.";
    case "aristobyte-ui":
    default:
      return "Use 'aristobyte-ui [ command ] --help' for detailed info on a command.";
  }
}
