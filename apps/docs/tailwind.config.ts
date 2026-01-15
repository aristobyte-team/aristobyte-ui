import type { Config } from "tailwindcss";
import aristobyteui from "@aristobyte-ui/theme";

const config: Config = {
  content: [
    "./app/**/*",
    "./components/**/*",
    "node_modules/@aristobyte-ui/**/*",
  ],
  theme: { extend: { ...aristobyteui.extend() } },
  plugins: [...aristobyteui.plugins()],
};

export default config;
