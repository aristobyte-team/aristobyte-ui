import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  target: "es2019",
  sourcemap: true,
  clean: true,
  dts: true,
  tsconfig: "tsconfig.json",
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      type: "local-css",
      embedded: true,
      namedExports: true,
    }),
    sassPlugin({ filter: /\.scss$/, type: "css" }),
  ],
  external: ["react", "react-dom"],
  banner: { js: '"use client";\nimport "./index.css";' },
});
