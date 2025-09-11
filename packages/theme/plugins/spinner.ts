import plugin from "tailwindcss/plugin";

export const spinner = plugin(function ({ addComponents, addBase, theme }) {
  const colors = theme("colors") as Record<string, { default: string }>;

  const variants = [
    "default",
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
  ];
  const sizes = {
    xsm: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "2.5rem",
    xlg: "3rem",
  };

  // 🔹 Base keyframes
  addBase({
    "@keyframes rotation": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    "@keyframes pulse": {
      "0%": { opacity: "1", transform: "scale(0)" },
      "100%": { opacity: "0", transform: "scale(1)" },
    },
    "@keyframes pulse-duo": {
      "0%,100%": { opacity: "1", transform: "translate(-50%, -50%) scale(0)" },
      "50%": { opacity: "0", transform: "translate(-50%, -50%) scale(1)" },
    },
  });

  const sizeMap: Record<string, unknown> = {};
  Object.entries(sizes).forEach(([key, val]) => {
    sizeMap[`.spinner-${key}`] = {
      width: val,
      height: val,
    };
  });

  const typeMap: Record<string, unknown> = {
    ".spinner-default": {
      animation: "rotation 0.8s ease infinite",
      borderRadius: "50%",
    },
    ".spinner-duo": {
      animation: "rotation 0.8s ease infinite",
      border: "3px solid transparent",
      borderRadius: "50%",
    },
    ".spinner-gradient": {
      animation: "rotation 0.8s linear infinite",
      borderRight: "3px solid transparent",
      borderRadius: "50%",
    },
    ".spinner-pulse": {
      animation: "pulse 1s ease-in-out infinite",
      borderRadius: "50%",
      position: "relative",
    },
    ".spinner-pulse-duo": {
      position: "relative",
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        transform: "translate(-50%, -50%) scale(0)",
      },
      "&::before": {
        animation: "pulse-duo 2s ease-in-out infinite",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
      },
    },
  };

  const variantMap: Record<string, unknown> = {};
  variants.forEach((v) => {
    const c = colors[v]?.default ?? "#000";

    // Regular
    variantMap[`.spinner-default.spinner-${v}`] = {
      border: `3px solid ${c}40`, // 25% opacity
      borderTopColor: c,
    };

    // Duo
    variantMap[`.spinner-duo.spinner-${v}`] = {
      borderBottomColor: c,
      borderTopColor: c,
    };

    // Gradient
    variantMap[`.spinner-gradient.spinner-${v}`] = {
      borderTop: `3px solid ${c}`,
    };

    // Pulse
    variantMap[`.spinner-pulse.spinner-${v}`] = {
      backgroundColor: c,
    };

    // Pulse-duo
    variantMap[
      `.spinner-pulse-duo.spinner-${v}::before, .spinner-pulse-duo.spinner-${v}::after`
    ] = {
      backgroundColor: c,
    };
  });

  addComponents({
    ".spinner": {
      display: "inline-block",
    },
    ...sizeMap,
    ...typeMap,
    ...variantMap,
  });
});
