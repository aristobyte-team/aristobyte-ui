import { defineConfig } from "tsup";
import { cpSync } from "fs";
import { resolve } from "path";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  target: "es2019",
  sourcemap: true,
  clean: true,
  dts: true,
  tsconfig: "tsconfig.json",
  esbuildPlugins: [],
  external: ["react", "react-dom"],
  banner: { js: '"use client";' },
  onSuccess: async () =>
    cpSync(
      resolve(__dirname, "styles/_settings.scss"),
      resolve(__dirname, "dist/styles/_settings.scss"),
      {
        recursive: true,
      }
    ),
});
