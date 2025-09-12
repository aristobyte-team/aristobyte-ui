import plugin from "tailwindcss/plugin";
import type {
  AlignmentsType,
  ColorsType,
  CssInJs,
  ParsedAlignmentsType,
  ParsedVariantsType,
  PluginType,
  VariantsType,
} from "./types";
import { themeToMapping } from "../utilities";

export const switchPlugin: PluginType = plugin(function ({
  addComponents,
  theme,
}) {
  const colors = theme("colors") as ColorsType;
  const alignments = themeToMapping<AlignmentsType, ParsedAlignmentsType>(
    theme("alignments")
  );
  const variants = themeToMapping<VariantsType, ParsedVariantsType>(
    theme("variants")
  );
  const sizes = {
    xsm: { track: [1, 1.8], thumb: [0.8, 0.16], label: "text-xs" },
    sm: { track: [1.4, 2.6], thumb: [1, 0.2], label: "text-sm" },
    md: { track: [1.6, 3], thumb: [1.2, 0.2], label: "text-base" },
    lg: { track: [1.8, 3.4], thumb: [1.4, 0.3], label: "text-lg" },
    xlg: { track: [2, 3.8], thumb: [1.6, 0.3], label: "text-xl" },
  };

  const baseSwitch = {
    ".switch": {
      "@apply relative inline-flex items-center cursor-pointer select-none": {},
      "& input": {
        "@apply hidden": {},
      },
    },
    ".switch--disabled": { "@apply opacity-50 cursor-not-allowed": {} },
    ".switch__track": {
      "@apply relative rounded-full overflow-hidden transition-colors duration-300 ease-in-out":
        {},
    },
    ".switch__thumb": {
      "@apply absolute top-1/2 left-0 bg-white rounded-full transform -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center z-10":
        {},
    },
    ".switch__label": { "@apply ml-2": {} },
    ".switch__track-icon": {
      "@apply absolute top-1/2 flex items-center justify-center transition-all duration-200 ease-out z-0":
        {},
    },
  };

  const sizeComponents: Record<string, CssInJs> = {};

  Object.entries(sizes).forEach(([key, val]) => {
    sizeComponents[`.switch-size-${key}`] = {
      [`@apply flex ${key === "horizontal" ? "flex-row" : "flex-col"}`]: {},
      ".switch__track": {
        width: `${val.track[1]}rem`,
        height: `${val.track[0]}rem`,
      },
      ".switch__thumb": {
        width: `${val.thumb[0]}rem`,
        height: `${val.thumb[0]}rem`,
        left: `${val.thumb[1]}rem`,
      },
      ".switch__label": { [`@apply ${val.label}`]: {} },
    };
  });

  const variantComponents: Record<string, CssInJs> = {};
  variants.forEach((v) => {
    const color = colors.semantic[v]?.default ?? "#000";
    variantComponents[`.switch-variant-${v} input:checked + .switch__track`] = {
      backgroundColor: color,
    };
  });

  const alignComponents: Record<string, CssInJs> = {};
  alignments.forEach((a) => {
    alignComponents[`.switch-align-label-${a}`] = {
      "@apply flex": {},
      flexDirection: a === "vertical" ? "flex-col" : "flex-row",
    };
  });

  addComponents({
    ...baseSwitch,
    ...sizeComponents,
    ...variantComponents,
    ...alignComponents,
  });
});
