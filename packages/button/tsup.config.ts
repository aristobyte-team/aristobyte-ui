import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  tsconfig: "tsconfig.json",
  outDir: "dist",
  sourcemap: true,
  clean: true,
  esbuildPlugins: [sassPlugin()],
});
