export const keyframes = {
  rotation: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  pulse: {
    "0%": { opacity: 1, transform: "scale(0)" },
    "100%": { opacity: 0, transform: "scale(1)" },
  },
  "pulse-duo": {
    "0%, 100%": { opacity: 1, transform: "translate(-50%, -50%) scale(0)" },
    "50%": { opacity: 0, transform: "translate(-50%, -50%) scale(1)" },
  },
};

export const animations = {
  rotation: "rotation 800ms ease infinite",
  rotationLinear: "rotation 800ms linear infinite",
  pulse: "pulse 1s ease-in-out infinite",
  pulseDuoBefore: "pulseDuo 2s ease-in-out infinite",
  pulseDuoAfter: "pulseDuo 2s 1s ease-in-out infinite",
};

export const cubicBeziers = {
  primary: "cubic-bezier(0.55, -0.19, 0.59, 0.95)",
  secondary: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
};
