import color from "picocolors";

export function command(text: string) {
  // Approximate gradient by alternating colors
  return color.yellow(text);
}

export function bracket(text: string) {
  return color.redBright(text);
}
