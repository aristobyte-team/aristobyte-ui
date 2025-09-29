import { config } from "@aristobyte-ui/eslint-config/react";

export default [
  ...config,
  {
    name: "custom-overrides",
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
