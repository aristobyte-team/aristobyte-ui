import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  clean: true,
  dts: true,
  // tsconfig: "tsconfig.json",
  outDir: "dist",
  target: "es2019",
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
});
