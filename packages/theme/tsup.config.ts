import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  target: "es2019",
  sourcemap: true,
  clean: true,
  dts: true,
  tsconfig: "tsconfig.json",
  external: ["react", "react-dom", "tailwindcss"],
  banner: { js: '"use client";' },
});
