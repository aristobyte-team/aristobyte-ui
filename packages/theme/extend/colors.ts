// =========================================== //
//          AristoByte UI - Color Tokens       //
// =========================================== //

export const colors = {
  // === Logo === //
  logo: {
    1: "#ffee27",
    2: "#fec800",
    3: "#f18e35",
    4: "#e95f32",
    5: "#e2312d",
  },

  // === Base === //
  white: "#ffffff",
  "white-hover": "#dddddd",
  black: "#000000",
  "black-hover": "#222222",
  transparent: "transparent",

  // === Black Transparent Scale === //
  "black-transparent": {
    100: "rgba(0,0,0,0.1)",
    200: "rgba(0,0,0,0.2)",
    300: "rgba(0,0,0,0.3)",
    400: "rgba(0,0,0,0.4)",
    500: "rgba(0,0,0,0.5)",
    600: "rgba(0,0,0,0.6)",
    700: "rgba(0,0,0,0.7)",
    800: "rgba(0,0,0,0.8)",
    900: "rgba(0,0,0,0.9)",
  },

  // === White Transparent Scale === //
  "white-transparent": {
    100: "rgba(255,255,255,0.1)",
    200: "rgba(255,255,255,0.2)",
    300: "rgba(255,255,255,0.3)",
    400: "rgba(255,255,255,0.4)",
    500: "rgba(255,255,255,0.5)",
    600: "rgba(255,255,255,0.6)",
    700: "rgba(255,255,255,0.7)",
    800: "rgba(255,255,255,0.8)",
    900: "rgba(255,255,255,0.9)",
  },

  // === Neutral Scale (Grey) === //
  grey: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // === Primary Scale (Blue) === //
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb", // Main
    700: "#1d4ed8", // Hover
    800: "#1e40af",
    900: "#1e3a8a",
  },

  // === Secondary Scale (Indigo) === //
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5", // Main
    700: "#4338ca", // Hover
  },

  // === Error Scale (Red) === //
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626", // Main
    700: "#b91c1c", // Hover
  },

  // === Success Scale (Green) === //
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a", // Main
    700: "#15803d", // Hover
  },

  // === Warning Scale (Amber) === //
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706", // Main
    700: "#b45309", // Hover
  },

  // === Semantic Tokens === //
  semantic: {
    default: {
      default: "#1f2937", // grey-800
      hover: "#111827", // grey-900
      disabled: "rgba(31,41,55,0.5)", // grey-800 @ 0.5
    },
    primary: {
      default: "#2563eb", // blue-600
      hover: "#1d4ed8", // blue-700
      disabled: "rgba(37,99,235,0.5)",
    },
    secondary: {
      default: "#4f46e5", // indigo-600
      hover: "#4338ca", // indigo-700
      disabled: "rgba(79,70,229,0.5)",
    },
    error: {
      default: "#dc2626", // red-600
      hover: "#b91c1c", // red-700
      disabled: "rgba(220,38,38,0.5)",
    },
    success: {
      default: "#16a34a", // green-600
      hover: "#15803d", // green-700
      disabled: "rgba(22,163,74,0.5)",
    },
    warning: {
      default: "#d97706", // amber-600
      hover: "#b45309", // amber-700
      disabled: "rgba(217,119,6,0.5)",
    },
  },

  text: {
    white: "#ffffff",
    black: "#000000",
    "white-disabled": "rgba(255,255,255,0.5)",
    "black-disabled": "rgba(0,0,0,0.5)",
  },

  dark: {
    title: "#ffffff",
    subtitle: "#99a1af",
    description: "#d1d5dc",
    icon: "#99a1af",
  },
};
