import { Command } from "commander";
import { add } from "./commands/add";
import { init } from "./commands/init";
import { remove } from "./commands/remove";
import { upgrade } from "./commands/upgrade";
import { list } from "./commands/list";
import { doctor } from "./commands/doctor";
import { env } from "./commands/env";

const program = new Command();

program.name("aristobyte").description("AristoByteUI CLI").version("1.0.0");

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
