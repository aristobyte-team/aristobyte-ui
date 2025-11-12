#!/usr/bin/env node

import { Command } from "commander";

import { add } from "./commands/add";
import { init } from "./commands/init";
import { remove } from "./commands/remove";
import { upgrade } from "./commands/upgrade";
import { list } from "./commands/list";
import { doctor } from "./commands/doctor";
import { env } from "./commands/env";

import { getBanner } from "./utils/getBanner";
import {
  logoSmallGradient,
  logo3,
  logo4,
  darkGrey,
  lightGrey,
} from "./utils/colors";
import { usage, description } from "./utils/typography";
import pkg from "./package.json";

const COMMANDS = [
  "init",
  "add",
  "remove",
  "upgrade",
  "list",
  "doctor",
  "env",
  "help",
];

const aristobyteui = new Command();

aristobyteui
  .name("aristobyte-ui")
  .usage(usage(["command", "options"]))
  .description("Initialize a new AristoByteUI project")
  .version(pkg.version, "-V, --version", "Output the CLI version")
  .helpOption("-H, --help", "Show help information");

aristobyteui
  .command("init [myProjectName]")
  .usage(usage(["options", "myProjectName"]))
  .description("Initialize a new AristoByteUI project")
  .action((myProjectName) => init(myProjectName));
aristobyteui
  .command("add")
  .usage(usage(["options", "components..."]))
  .description("Add a UI component")
  .action(add);
aristobyteui
  .command("remove")
  .usage(usage(["options", "components..."]))
  .description("Remove a UI component")
  .action(remove);
aristobyteui
  .command("upgrade")
  .usage(usage(["options", "components..."]))
  .description("Upgrade a UI component")
  .action(upgrade);
aristobyteui
  .command("list")
  .usage(usage(["options"]))
  .description("List installed components")
  .action(list);
aristobyteui
  .command("doctor")
  .usage(usage(["options"]))
  .description("Check system and project health")
  .action(doctor);
aristobyteui
  .command("env")
  .usage(usage(["options"]))
  .description("Display environment info")
  .action(env);
aristobyteui
  .command("help")
  .usage(usage(["options"]))
  .description("Display help for command")
  .action(env);
aristobyteui.command("help", { hidden: true });

aristobyteui.configureHelp({
  formatHelp: (cmd, helper) => `
${getBanner()}
${logoSmallGradient("Usage:")} 
  ${logo3(helper.commandUsage(cmd))}

${logoSmallGradient("Description:")}
  ${darkGrey(
    "Create new AristoByteUI projects or manage existing projects with full control"
  )}
  ${darkGrey("over components, dependencies, and UI stack configuration. Supports initialization,")}
  ${darkGrey(
    "addition, removal, upgrading of components, and project diagnostics."
  )}

${logoSmallGradient("Commands:")}
${helper
  .visibleCommands(cmd)
  .map(
    (c) =>
      `  ${`${logo3(c.name()).padEnd(31)} ${c.usage() || "".padEnd(30)}`.padEnd(129)} ${description(c.description())}`
  )
  .join("\n")}

${logoSmallGradient("Options:")}
${helper
  .visibleOptions(cmd)
  .map((option) => {
    const flagsArray = option.flags.split(/,\s*/);
    const styledFlags = `${logo3(flagsArray[0])}${darkGrey(", ")}${logo4(flagsArray[1])}`;
    return `  ${styledFlags.padEnd(93)} ${description(option.description)}`;
  })
  .join("\n")}

${logoSmallGradient("Tip:")}
  ${lightGrey("Use 'aristobyte-ui [ command ] --help' for detailed info on a command.")}
`,
});

aristobyteui.exitOverride(async (err) => {
  if (err.code === "commander.unknownCommand") {
    console.error(
      logoSmallGradient(" ◆ Possible commands are: \n"),
      ...COMMANDS.map((cmd) =>
        cmd === err.message.split("Did you mean ")[1].split("?")[0]
          ? `${logoSmallGradient("│  ")}${logo4("● aristobyte-ui")} ${logo4(`${cmd}`)}\n`
          : `${logoSmallGradient("│  ○ aristobyte-ui")} ${logo3(`${cmd}`)}\n`
      )
    );
  }

  process.exit(1);
});

(async () => {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    aristobyteui.outputHelp();
    process.exit(0);
  }

  try {
    await aristobyteui.parseAsync(args, { from: "user" });
  } catch (err) {
    console.error(darkGrey("Error:"), lightGrey((err as Error).message));
    process.exit(1);
  }
})();
