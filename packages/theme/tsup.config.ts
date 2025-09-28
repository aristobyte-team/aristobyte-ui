import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts", "plugins/**/*.ts", "extend/**/*.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  bundle: false,
  sourcemap: true,
  target: "es2019",
  clean: true,
  dts: true,
  splitting: false,
  external: ["react", "react-dom", "tailwindcss"],
  tsconfig: "tsconfig.json",
});
