export function spinner({ addComponents, addBase }) {
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

  const sizesMap = {
    ".spinner-xsm": { width: "1rem", height: "1rem" },
    ".spinner-sm": { width: "1.5rem", height: "1.5rem" },
    ".spinner-md": { width: "2rem", height: "2rem" },
    ".spinner-lg": { width: "2.5rem", height: "2.5rem" },
    ".spinner-xlg": { width: "3rem", height: "3rem" },
  };

  const typeMap = {
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

  const variantsMap = {
    /* ===== Default Variant ===== */
    ".spinner-default-default": {
      border: "3px solid rgba(31,41,55,0.25)",
      borderTopColor: "#1f2937",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    ".spinner-default-default:hover": {
      border: "3px solid rgba(17,24,39,0.25)",
      borderTopColor: "#111827",
    },
    ".spinner-default-default:disabled": {
      border: "3px solid rgba(31,41,55,0.5)",
      borderTopColor: "rgba(31,41,55,0.5)",
      opacity: "0.5",
      cursor: "not-allowed",
    },

    /* ===== Pulse Duo Variants ===== */
    ".spinner-default-pulse-duo": {
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
        backgroundColor: "#1f2937",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
        backgroundColor: "#1f2937",
      },
    },
    ".spinner-default-pulse-duo:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },

    ".spinner-primary-pulse-duo": {
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
        backgroundColor: "#2563eb",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
        backgroundColor: "#2563eb",
      },
    },
    ".spinner-primary-pulse-duo:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },

    ".spinner-secondary-pulse-duo": {
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
        backgroundColor: "#6b7280",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
        backgroundColor: "#6b7280",
      },
    },
    ".spinner-secondary-pulse-duo:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },

    ".spinner-success-pulse-duo": {
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
        backgroundColor: "#16a34a",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
        backgroundColor: "#16a34a",
      },
    },
    ".spinner-success-pulse-duo:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },

    ".spinner-warning-pulse-duo": {
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
        backgroundColor: "#f59e0b",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
        backgroundColor: "#f59e0b",
      },
    },
    ".spinner-warning-pulse-duo:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },

    ".spinner-error-pulse-duo": {
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
        backgroundColor: "#dc2626",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
        backgroundColor: "#dc2626",
      },
    },
    ".spinner-error-pulse-duo:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },
  };

  addComponents({
    ".spinner": { display: "inline-block" },
    ...sizesMap,
    ...typeMap,
    ...variantsMap,
  });
}
