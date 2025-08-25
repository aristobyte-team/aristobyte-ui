import { nextJsConfig } from "@aristobyte-ui/eslint-config/next";

export default [
  ...nextJsConfig,
  {
    name: "custom-overrides",
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
] as typeof nextJsConfig;
