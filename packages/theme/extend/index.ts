import { transitionTimingFunction } from "./animations";
import { colors } from "./colors";
import { fontFamily, fontSize, fontWeight, lineHeight } from "./fonts";
import { boxShadow } from "./shadows";

export * from "./animations";
export * from "./colors";
export * from "./fonts";
export * from "./shadows";
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
