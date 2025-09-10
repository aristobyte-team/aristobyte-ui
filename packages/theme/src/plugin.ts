import plugin from "tailwindcss/plugin";
import { colors, commonColors, semanticColors } from "./colors";
import { animations, keyframes, cubicBeziers } from "./animations";
import {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  shadows,
} from "./utilities";

const DEFAULT_PREFIX = "aristobyteui";

// Resolve the theme config
const resolveTheme = () => {
  // Flatten colors into CSS variables
  const colorUtilities: Record<string, Record<string, string>> = {};
  Object.entries(colors).forEach(([name, value]) => {
    colorUtilities[`.text-${name}`] = { color: value };
    colorUtilities[`.bg-${name}`] = { backgroundColor: value };
  });

  // Flatten keyframes into @keyframes utilities
  const keyframesUtilities: Record<string, any> = {};
  Object.entries(keyframes).forEach(([name, frames]) => {
    keyframesUtilities[`@keyframes ${name}`] = frames;
  });

  return { colorUtilities, keyframesUtilities };
};

// The core Tailwind plugin
export const aristobyteui = () =>
  plugin(
    ({ addUtilities }) => {
      const { colorUtilities, keyframesUtilities } = resolveTheme();

      addUtilities(keyframesUtilities);
      addUtilities(colorUtilities, { variants: ["hover", "responsive"] });
      addUtilities({
        fontFamilies,
        fontSizes,
        shadows,
      }); // any other helper utils
    },
    { theme: { extend: { ...animations } } }
  );
