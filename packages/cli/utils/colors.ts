import chalk from "chalk";
import gradient from "gradient-string";

const LOGO_COLORS = ["#ffee27", "#fec800", "#f18e35", "#e95f32", "#e2312d"];

export function logo1(text: string) {
  return chalk.hex(LOGO_COLORS[0])(text);
}
export function logo2(text: string) {
  return chalk.hex(LOGO_COLORS[1])(text);
}
export function logo3(text: string) {
  return chalk.hex(LOGO_COLORS[2])(text);
}
export function logo4(text: string) {
  return chalk.hex(LOGO_COLORS[3])(text);
}
export function logo5(text: string) {
  return chalk.hex(LOGO_COLORS[4])(text);
}

export function reset(text: string) {
  return chalk.reset(text);
}

export function red(text: string) {
  return chalk.redBright(text);
}

export function lightGrey(text: string) {
  return chalk.hex("#afbfff")(text);
}

export function darkGrey(text: string) {
  return chalk.hex("#7580aa")(text);
}

export function white(text: string) {
  return chalk.hex("#cfd5edff")(text);
}

export function yellow(text: string) {
  return chalk.yellow(text);
}

export function redBright(text: string) {
  return chalk.redBright(text);
}

export function logoGradient(text: string) {
  return gradient([
    ...LOGO_COLORS,
    ...LOGO_COLORS.reverse(),
    ...LOGO_COLORS,
    ...LOGO_COLORS.reverse(),
    ...LOGO_COLORS,
  ]).multiline(text);
}

export function logoSmallGradient(text: string) {
  return gradient([
    LOGO_COLORS[0],
    LOGO_COLORS[1],
    LOGO_COLORS[1],
    LOGO_COLORS[0],
    LOGO_COLORS[0],
    LOGO_COLORS[1],
  ]).multiline(text);
}
