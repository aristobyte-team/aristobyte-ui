import { transitionTimingFunction } from "./animations";
import { colors } from "./colors";
import {
  alignments,
  sizes,
  radiuses,
  variants,
  appearances,
} from "./constants";
import { fontFamily, fontSize, fontWeight, lineHeight } from "./fonts";
import { boxShadow } from "./shadows";

export const extend = () => ({
  // === Colors === //
  colors,

  // === Typography === //
  fontFamily,
  fontWeight,
  lineHeight,
  fontSize,

  // === Shadows === //
  boxShadow,

  // === Animations === //
  transitionTimingFunction,

  // === Animations === //
  variants,
  sizes,
  radiuses,
  appearances,
  alignments,
});

export * from "./animations";
export * from "./colors";
export * from "./fonts";
export * from "./shadows";
export * from "./constants";
