import plugin from "tailwindcss/plugin";
import type { ColorsType, CssInJs, SizesType, VariantsType } from "./types";

export const label = plugin(function ({ addComponents, theme }) {
  const colors = theme("colors") as ColorsType;
  const variants = theme("variants") as VariantsType;
  const sizes = theme("sizes") as SizesType;

  // Base label styles
  const labelBase = {
    ".label": {
      "@apply inline-flex items-center font-medium select-none": {},
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "0.625rem", // 10px default
      padding: "0.25rem 0.6875rem", // 4px 11px
      fontSize: "0.875rem", // 14px
      lineHeight: "1rem",
    },
  };

  // Sizes
  const sizeMap: Record<string, CssInJs> = {
    ".label-xsm": { "@apply text-xs px-2 py-0.5": {} },
    ".label-sm": { "@apply text-sm px-2.5 py-1": {} },
    ".label-md": { "@apply text-base px-3 py-1.5": {} },
    ".label-lg": { "@apply text-lg px-4 py-2": {} },
    ".label-xlg": { "@apply text-xl px-5 py-2.5": {} },
  };

  // Radius
  const radiusMap: Record<string, CssInJs> = {
    ".label-radius-none": { "@apply rounded-none": {} },
    ".label-radius-sm": { "@apply rounded-sm": {} },
    ".label-radius-md": { "@apply rounded-md": {} },
    ".label-radius-lg": { "@apply rounded-lg": {} },
    ".label-radius-full": { "@apply rounded-full": {} },
  };

  // Variant classes
  const variantMap: Record<string, CssInJs> = {};

  variants.forEach((variant) => {
    const c = colors.semantic[variant] || { default: "#ffffff" };
    sizes.forEach((size) => {
      const selector = `.label-${variant}-${size}`;
      variantMap[selector] = {
        backgroundColor: `${c.default}33`, // 20% opacity
        borderColor: c.default,
        color: c.default,
      };
    });
  });

  addComponents({
    ...labelBase,
    ...sizeMap,
    ...radiusMap,
    ...variantMap,
  });
});
