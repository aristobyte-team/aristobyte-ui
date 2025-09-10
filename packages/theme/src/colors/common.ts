import { blackTransparent } from "./blackTransparent";
import { whiteTransparent } from "./whiteTransparent";
import { grey } from "./grey";
import { blue } from "./blue";
import { indigo } from "./indigo";
import { red } from "./red";
import { green } from "./green";
import { amber } from "./amber";

export const commonColors = {
  logo: ["#ffee27", "#fec800", "#f18e35", "#e95f32", "#e2312d"],
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
  blackTransparent,
  whiteTransparent,
  grey,
  blue,
  indigo,
  red,
  green,
  amber,
};

export type CommonColors = typeof commonColors;
