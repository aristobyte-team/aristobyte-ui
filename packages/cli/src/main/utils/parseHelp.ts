// @ts-ignore
import type { Command, Help } from "commander";
import { logoSmallGradient, logo3, logo4, darkGrey, lightGrey } from "./colors";
import { description } from "./typography";
import { getBanner } from "./getBanner";
import { getTip } from "./getTip";
import { getDescription } from "./getDescription";

export function parseHelp(cmd: Command, helper: Help) {
  return `
${getBanner(cmd.name())}

${logoSmallGradient("Usage:")} 
${logo3(helper.commandUsage(cmd))}

${logoSmallGradient("Description:")}
  ${darkGrey(getDescription(cmd.name()))}

${
  helper.visibleCommands(cmd).length > 0
    ? `${logoSmallGradient("Commands:")}
${helper
  .visibleCommands(cmd)
  .map(
    (c) =>
      `  ${`${logo3(c.name()).padEnd(31)} ${c.usage() || "".padEnd(30)}`.padEnd(129)} ${description(c.description())}`
  )
  .join("\n")}\n\n`
    : ""
}${
    helper.visibleOptions(cmd).length > 0
      ? `${logoSmallGradient("Options:")}
${helper
  .visibleOptions(cmd)
  .map(
    (option) =>
      `  ${`${logo3(option.flags.split(/,\s*/)[0])}${darkGrey(", ")}${logo4(option.flags.split(/,\s*/)[1])}`.padEnd(93)} ${description(option.description)}`
  )
  .join("\n")}\n\n`
      : ""
  }${logoSmallGradient("Tip:")}
  ${lightGrey(getTip(cmd.name()))}
`;
}
