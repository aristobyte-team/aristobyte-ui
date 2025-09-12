import plugin from "tailwindcss/plugin";
import type { ColorsType, VariantsType } from "./types";

export const anchor = plugin(function ({ addComponents, theme }) {
  const colors = theme("colors") as ColorsType;
  const variants = theme("variants") as VariantsType;

  const base = {
    ".anchor": {
      "@apply inline-flex items-center cursor-pointer font-medium text-sm leading-[1.4285714286] transition-all duration-200 ease-in-out px-4 py-2 relative overflow-hidden":
        {},
      "&:hover": {
        textDecoration: "underline",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    },
  };

  const variantMap: Record<string, unknown> = {};

  variants.forEach((v) => {
    const c = colors.semantic[v]?.default ?? "#000000";
    const hover = colors.semantic[v]?.hover ?? c;
    variantMap[`.anchor--${v}`] = {
      color: c,
      "&:hover": {
        color: hover,
      },
    };
  });

  addComponents({
    ...base,
    ...variantMap,
  });
});
