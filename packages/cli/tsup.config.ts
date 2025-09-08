import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  format: ["cjs", "esm"],
  target: "es2020",
  sourcemap: true,
  clean: true,
  dts: false,
  tsconfig: "tsconfig.json",
  external: [
    "execa",
    "commander",
    "axios",
    "fs",
    "path",
    "os",
    "child_process",
  ],
  banner: {
    js: "#!/usr/bin/env node",
  },
});
