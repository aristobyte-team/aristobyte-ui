import plugin from "tailwindcss/plugin";
import type { AppearancesType, ColorsType, VariantsType } from "./types";

export const messageBox = plugin(function ({ addComponents, theme }) {
  const colors = theme("colors") as ColorsType;
  const variants = theme("variants") as VariantsType;
  const types = theme("appearances") as AppearancesType;

  const radiusMap = {
    ".message-box-radius-none": { borderRadius: "0px" },
    ".message-box-radius-sm": { borderRadius: "4px" },
    ".message-box-radius-md": { borderRadius: "8px" },
    ".message-box-radius-lg": { borderRadius: "10px" },
    ".message-box-radius-full": { borderRadius: "24px" },
  };

  const baseMessageBox = {
    ".message-box": {
      display: "flex",
      alignItems: "flex-start",
      padding: "1rem",
      fontFamily: theme("fontFamily.sans").join(", "),
      fontSize: theme("fontSize.sm")[0],
      fontWeight: theme("fontWeight.normal"),
      lineHeight: theme("lineHeight.normal"),
      color: colors.white,
    },
    ".message-box__content": {
      color: colors.white,
      flex: "1",
    },
    ".message-box__icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0.625rem",
      minWidth: "16px",
      minHeight: "16px",
      maxWidth: "16px",
      maxHeight: "16px",
      svg: { width: "100%" },
    },
  };

  const variantComponents: Record<string, unknown> = {};

  variants.forEach((variant) => {
    const c = colors.semantic[variant] ?? colors.grey["500"];

    types.forEach((type) => {
      const selector = `.message-box--${variant}.message-box-type--${type}`;
      const base: Record<string, unknown> = {};

      switch (type) {
        case "solid":
        default:
          base.backgroundColor = c.default;
          break;
        case "outline":
          base.backgroundColor = `${c.default}33`; // 20% opacity
          base.border = `1px solid ${c.default}`;
          break;
        case "outline-dashed":
          base.backgroundColor = `${c.default}33`;
          base.border = `1px dashed ${c.default}`;
          break;
        case "no-outline":
          base.backgroundColor = `${c.default}33`;
          break;
        case "glowing":
          base.backgroundColor = `${c.default}33`;
          base.border = `1px solid ${c.default}`;
          base.boxShadow = `0 0 8px ${c.default}80, 0 0 16px ${c.default}66, 0 0 24px ${c.default}4d`;
          break;
      }

      variantComponents[selector] = base;
      // also handle icon color
      variantComponents[
        `.message-box--${variant}.message-box-type--${type} .message-box__icon`
      ] = {
        color: type === "solid" ? colors.white : c.default,
      };
    });
  });

  addComponents({
    ...baseMessageBox,
    ...radiusMap,
    ...variantComponents,
  });
});
