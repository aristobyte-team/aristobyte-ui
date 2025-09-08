import { logo4, darkGrey, lightGrey } from "./colors";

export function usage(params: string[]) {
  return params
    .map((param) => `${logo4("[")} ${lightGrey(param)} ${logo4("]")}`)
    .join(" ");
}

export function description(text: string) {
  return darkGrey(`- ${text}`);
}
