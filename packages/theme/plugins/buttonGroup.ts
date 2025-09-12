import plugin from "tailwindcss/plugin";
import { themeToMapping } from "../utilities";
import type {
  CssInJs,
  ColorsType,
  ParsedRadiusesType,
  ParsedVariantsType,
  RadiusesType,
  VariantsType,
  PluginType,
} from "./types";

export const buttonGroup: PluginType = plugin(function ({
  addComponents,
  theme,
}) {
  const colors = theme("colors") as ColorsType;
  const variants = themeToMapping<VariantsType, ParsedVariantsType>(
    theme("variants")
  );
  const radiuses = themeToMapping<RadiusesType, ParsedRadiusesType>(
    theme("radiuses")
  );

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
  radiuses.forEach((r) => {
    radiusMap[`.btn-group-radius-${r}`] = { [`@apply rounded-${r}`]: {} };
  });

  const variantMap: Record<string, CssInJs> = {};
  variants.forEach((v) => {
    const c = colors.semantic[v]?.default ?? "#000000";
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
