import { colors as rootColors } from "../extend";

export type CssInJs = {
  [key: string]: string | string[] | CssInJs | CssInJs[];
};

export type AlignmentsType = {
  horizontal: string;
  vertical: string;
};
export type SizesType = {
  xsm: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
};
export type RadiusesType = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
};
export type VariantsType = {
  default: string;
  primary: string;
  secondary: string;
  warning: string;
  success: string;
  error: string;
};
export type AppearancesType = {
  solid: string;
  outline: string;
  "outline-dashed": string;
  "no-outline": string;
  glowing: string;
};

export type ParsedAlignmentsType = ["horizontal", "vertical"];
export type ParsedSizesType = ["xsm", "sm", "md", "lg", "xlg"];
export type ParsedRadiusesType = ["none", "sm", "md", "lg", "full"];
export type ParsedVariantsType = [
  "default",
  "primary",
  "secondary",
  "warning",
  "success",
  "error",
];
export type ParsedAppearancesType = [
  "solid",
  "outline",
  "outline-dashed",
  "no-outline",
  "glowing",
];

export type ColorsType = typeof rootColors;
