import plugin from "tailwindcss/plugin";
import { CssInJs } from "./types";

export const buttonGroup = plugin(function ({ addComponents, theme }) {
  const colors = theme("colors") as Record<string, { default: string }>;

  const variants = [
    "default",
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
  ];
  const radii = ["none", "sm", "md", "lg", "full"];

  const groupBase = {
    ".btn-group": {
      "@apply flex items-center overflow-hidden max-w-max": {},
    },
    ".btn-group-horizontal": {
      "@apply flex-row": {},
    },
    ".btn-group-vertical": {
      "@apply flex-col": {},
    },
  };

  const radiusMap: Record<string, CssInJs> = {};
  radii.forEach((r) => {
    radiusMap[`.btn-group-radius-${r}`] = { [`@apply rounded-${r}`]: {} };
  });

  const variantMap: Record<string, CssInJs> = {};
  variants.forEach((v) => {
    const c = colors[v]?.default ?? "#000000";
    variantMap[`.btn-group-variant-${v}`] = {
      backgroundColor: c,
    };
  });

  const childRules = {
    ".btn-group .btn": {
      "@apply rounded-none": {},
    },
    ".btn-group-horizontal .btn:first-child": {
      "@apply rounded-l-md": {},
    },
    ".btn-group-horizontal .btn:last-child": {
      "@apply rounded-r-md": {},
    },
    ".btn-group-vertical .btn:first-child": {
      "@apply rounded-t-md": {},
    },
    ".btn-group-vertical .btn:last-child": {
      "@apply rounded-b-md": {},
    },
  };

  addComponents({
    ...groupBase,
    ...radiusMap,
    ...variantMap,
    ...childRules,
  });
});
