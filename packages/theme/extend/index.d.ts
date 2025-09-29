import { transitionTimingFunction } from "./animations.mjs";
import { colors } from "./colors.mjs";
import { fontFamily, fontSize, fontWeight, lineHeight } from "./fonts.mjs";
import { boxShadow } from "./shadows.mjs";

export * from "./animations.mjs";
export * from "./colors.mjs";
export * from "./fonts.mjs";
export * from "./shadows.mjs";

declare const _default: () => {
  colors: typeof colors;
  fontFamily: typeof fontFamily;
  fontWeight: typeof fontWeight;
  lineHeight: typeof lineHeight;
  fontSize: typeof fontSize;
  boxShadow: typeof boxShadow;
  transitionTimingFunction: typeof transitionTimingFunction;
};

export default _default;
