import { config } from "@aristobyte-ui/eslint-config/react";

export default [
  ...config,
  {
    name: "custom-overrides",
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "eslint@typescript-eslint/no-unused-vars": "off",
    },
  },
];
