import { transitionTimingFunction } from "./animations.mjs";
import { colors } from "./colors.mjs";
import { fontFamily, fontSize, fontWeight, lineHeight } from "./fonts.mjs";
import { boxShadow } from "./shadows.mjs";

export * from "./animations.mjs";
export * from "./colors.mjs";
export * from "./fonts.mjs";
export * from "./shadows.mjs";
export default () => ({
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
});
