#!/usr/bin/env node
import { Command } from "commander";
import { add } from "./commands/add";
import { init } from "./commands/init";
import { remove } from "./commands/remove";
import { upgrade } from "./commands/upgrade";
import { list } from "./commands/list";
import { doctor } from "./commands/doctor";
import { env } from "./commands/env";
import color from "picocolors";
import pkg from "./package.json"; // <-- import package.json

const program = new Command();

program
  .name("aristobyte-ui")
  .description(color.bgMagenta(color.black(" 🚀 Welcome to AristoByteUI CLI ")))
  .version(pkg.version, "-V, --version", color.green("Output the CLI version"));

program.configureHelp({
  formatHelp: (cmd, helper) => {
    const usage = helper.commandUsage(cmd);
    const description = cmd.description();

    const commandList = helper
      .visibleCommands(cmd)
      .map((c) => {
        const name = color.cyan(c.name() + (c.alias() ? `, ${c.alias()}` : ""));
        const desc = c.description();
        return `  ${name.padEnd(25)} ${desc}`;
      })
      .join("\n");

    const optionsList = helper
      .visibleOptions(cmd)
      .map((o) => {
        const flags = color.yellow(o.flags);
        const desc = o.description;
        return `  ${flags.padEnd(25)} ${desc}`;
      })
      .join("\n");

    return `
${color.bgMagenta(color.black(" 🚀 AristoByteUI CLI "))}
${color.bold("Usage:")} ${usage}

${color.bold("Description:")}
  ${description}

${color.bold("Commands:")}
${commandList}

${color.bold("Options:")}
${optionsList}

${color.dim("Tip: Use 'aristobyte-ui <command> --help' for detailed info on a command.")}
`;
  },
});

program
  .command("init")
  .description("Initialize a new AristoByteUI project")
  .action(init);

program
  .command("add <component>")
  .description("Add a UI component")
  .action(add);

program
  .command("remove <component>")
  .description("Remove a UI component")
  .action(remove);

program
  .command("upgrade <component>")
  .description("Upgrade a UI component")
  .action(upgrade);

program.command("list").description("List installed components").action(list);

program
  .command("doctor")
  .description("Check system and project health")
  .action(doctor);

program.command("env").description("Display environment info").action(env);

program.parse(process.argv);
