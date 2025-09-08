#!/usr/bin/env node

import color from "picocolors";
import { Command } from "commander";

import { add } from "./commands/add";
import { init } from "./commands/init";
import { remove } from "./commands/remove";
import { upgrade } from "./commands/upgrade";
import { list } from "./commands/list";
import { doctor } from "./commands/doctor";
import { env } from "./commands/env";

import { getBanner } from "./utils/getBanner";
import { command, bracket } from "./utils/typography";
import pkg from "./package.json";

const program = new Command();

program
  .name("aristobyte-ui")
  .description(color.bgMagenta(color.black(" 🚀 Welcome to AristoByteUI CLI ")))
  .version(pkg.version, "-V, --version", color.green("Output the CLI version"));

program.configureHelp({
  formatHelp: (cmd, helper) => `
${getBanner()}
${color.bold("Usage:")} ${helper.commandUsage(cmd)}

${color.bold("Description:")}
  ${cmd.description()}

${color.bold("Commands:")}
${helper
  .visibleCommands(cmd)
  .map(
    (c) =>
      `  ${`${c.name().padEnd(22)} ${c.usage() || "".padEnd(37)}`.padEnd(92)} ${c.description()}`
  )
  .join("\n")}

${color.bold("Options:")}
${helper
  .visibleOptions(cmd)
  .map((o) => `  ${color.yellow(o.flags).padEnd(25)} ${o.description}`)
  .join("\n")}

${color.dim(color.gray("Tip: Use 'aristobyte-ui [ command ] --help' for detailed info on a command."))}
`,
});

program
  .command(command("init") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")} ${bracket("[")} ${color.gray("myProjectName")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("Initialize a new AristoByteUI project")
  .action(init);
program
  .command(command("add") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")} ${bracket("[")} ${color.gray("components...")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("Add a UI component")
  .action(add);
program
  .command(command("remove") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")} ${bracket("[")} ${color.gray("components...")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("Remove a UI component")
  .action(remove);
program
  .command(command("upgrade") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")} ${bracket("[")} ${color.gray("components...")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("Upgrade a UI component")
  .action(upgrade);
program
  .command(command("list") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("List installed components")
  .action(list);
program
  .command(command("doctor") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("Check system and project health")
  .action(doctor);
program
  .command(command("env") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("Display environment info")
  .action(env);
program
  .command(command("help") + color.reset(" "))
  .usage(
    `${bracket("[")} ${color.gray("options")} ${bracket("]")}${color.reset(" ")}`
  )
  .description("Display help for command")
  .action(env);
program.command("help", { hidden: true });
program.parseAsync(process.argv);
