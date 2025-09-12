import { colors as rootColors } from "../utils";

export type CssInJs = {
  [key: string]: string | string[] | CssInJs | CssInJs[];
};
export type AlignmentsType = ["horizontal", "vertical"];
export type SizesType = ["xsm", "sm", "md", "lg", "xlg"];
export type RadiusesType = ["none", "sm", "md", "lg", "full"];
export type VariantsType = [
  "default",
  "primary",
  "secondary",
  "warning",
  "success",
  "error",
];
export type AppearancesType = [
  "solid",
  "outline",
  "outline-dashed",
  "no-outline",
  "glowing",
];

export type ColorsType = typeof rootColors;
