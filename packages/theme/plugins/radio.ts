import plugin from "tailwindcss/plugin";
import { themeToMapping } from "../utilities";
import type {
  AppearancesType,
  ColorsType,
  CssInJs,
  ParsedAppearancesType,
  ParsedVariantsType,
  PluginType,
  VariantsType,
} from "./types";

export const radio: PluginType = plugin(function ({ addComponents, theme }) {
  const colors = theme("colors") as ColorsType;
  const variants = themeToMapping<VariantsType, ParsedVariantsType>(
    theme("variants")
  );
  const appearances = themeToMapping<AppearancesType, ParsedAppearancesType>(
    theme("appearances")
  );
  const sizes: Record<
    string,
    { control: number; dot: number; gap: number; label: string }
  > = {
    xsm: { control: 12, dot: 6, gap: 3, label: "text-xs" },
    sm: { control: 16, dot: 8, gap: 4, label: "text-sm" },
    md: { control: 20, dot: 10, gap: 5, label: "text-base" },
    lg: { control: 24, dot: 14, gap: 6, label: "text-lg" },
    xlg: { control: 28, dot: 16, gap: 8, label: "text-xl" },
  };

  const base = {
    ".radio": {
      "@apply relative flex items-center cursor-pointer select-none": {},
    },
    ".radio--disabled": {
      "@apply cursor-not-allowed opacity-50 pointer-events-none": {},
    },
  };

  // Sizes
  const sizeMap: Record<string, CssInJs> = {};
  Object.entries(sizes).forEach(([size, { control, dot, gap, label }]) => {
    sizeMap[`.radio-size--${size}`] = {
      gap: `${gap}px`,
      ".radio__control": {
        width: `${control}px`,
        height: `${control}px`,
        borderRadius: "999px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          display: "flex",
          width: `${dot}px`,
          height: `${dot}px`,
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.2s ease",
        },
      },
      ".radio__label": {
        "@apply": label,
      },
    };
  });

  // Variants + appearances
  const variantMap: Record<string, CssInJs> = {};
  variants.forEach((variant) => {
    const c = colors.semantic[variant] ?? { default: "#000" };
    appearances.forEach((appearance) => {
      const selector = `.radio-variant--${variant}.radio-appearance--${appearance}`;
      const baseStyles: Record<string, CssInJs> = {
        ".radio__control": {
          border: "2px solid",
          borderColor: c.default,
          backgroundColor:
            appearance === "solid" ? c.default : `${c.default}33`,
          "&::after": {
            backgroundColor: appearance === "solid" ? "#fff" : c.default,
          },
        },
        "&:active .radio__control": {
          transform: "scale(0.95)",
        },
      };

      if (appearance === "outline-dashed") {
        baseStyles[".radio__control"]! = { borderStyle: "dashed" };
      }
      if (appearance === "no-outline") {
        baseStyles[".radio__control"]! = { borderStyle: "transparent" };
      }
      if (appearance === "glowing") {
        baseStyles[".radio__control"]! = {
          boxShadow: `0 0 8px ${c.default}80, 0 0 16px ${c.default}66, 0 0 24px ${c.default}4d`,
        };
      }

      variantMap[selector] = baseStyles;
    });
  });

  addComponents({
    ...base,
    ...sizeMap,
    ...variantMap,
  });
});
