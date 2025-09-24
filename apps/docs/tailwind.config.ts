import type { Config } from "tailwindcss";
import aristobyteui from "@aristobyte-ui/theme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { ...aristobyteui.extend() } },
  plugins: [...aristobyteui.plugin()],
};

export default config;
