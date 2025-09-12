import plugin from "tailwindcss/plugin";
import type {
  AlignmentsType,
  AppearancesType,
  CssInJs,
  SizesType,
  VariantsType,
} from "./types";

export const radioGroup = plugin(function ({ addComponents, theme }) {
  const sizes = theme("sizes") as SizesType;
  const variants = theme("variants") as VariantsType;
  const appearances = theme("appearances") as AppearancesType;
  const alignments = theme("alignments") as AlignmentsType;

  // Base RadioGroup wrapper
  const base: Record<string, CssInJs> = {
    ".radio-group": {
      "@apply flex flex-wrap gap-2": {},
    },
  };

  // Align variations
  alignments.forEach((align) => {
    const selector = `.radio-group--${align}`;
    if (align === "horizontal") {
      base[selector] = { "@apply flex-row items-center": {} };
    } else if (align === "vertical") {
      base[selector] = { "@apply flex-col items-start": {} };
    }
  });

  // Size utilities for spacing between radios
  sizes.forEach((size) => {
    const selector = `.radio-group-size--${size}`;
    let gap = "gap-2";
    switch (size) {
      case "xsm":
        gap = "gap-1";
        break;
      case "sm":
        gap = "gap-1.5";
        break;
      case "md":
        gap = "gap-2";
        break;
      case "lg":
        gap = "gap-3";
        break;
      case "xlg":
        gap = "gap-4";
        break;
    }
    base[selector] = { [`@apply ${gap}`]: {} };
  });

  // Variant + Appearance helpers for grouped radios
  variants.forEach((variant) => {
    appearances.forEach((appearance) => {
      const selector = `.radio-group-variant--${variant}.radio-group-appearance--${appearance}`;
      base[selector] = {
        // Example: you can optionally style child radios in the group
        "& .radio": {
          // optionally apply variant-specific group spacing or effects
        },
      };
    });
  });

  addComponents({
    ...base,
  });
});
