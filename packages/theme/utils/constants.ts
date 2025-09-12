import { asThemeMap } from "../utilities";

const alignmentsArr = ["horizontal", "vertical"] as const;
const sizesArr = ["xsm", "sm", "md", "lg", "xlg"] as const;
const radiusesArr = ["none", "sm", "md", "lg", "full"] as const;
const variantsArr = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
] as const;
const appearancesArr = [
  "solid",
  "outline",
  "outline-dashed",
  "no-outline",
  "glowing",
] as const;

export const alignments = asThemeMap(alignmentsArr);
export const sizes = asThemeMap(sizesArr);
export const radiuses = asThemeMap(radiusesArr);
export const variants = asThemeMap(variantsArr);
export const appearances = asThemeMap(appearancesArr);
