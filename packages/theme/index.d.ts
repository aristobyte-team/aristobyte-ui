import extend from "./extend/index.mjs";
import plugins from "./plugins/index.mjs";

export * from "./extend/index.mjs";
export * from "./plugins/index.mjs";

export declare const aristobyteui: {
  plugins: typeof plugins;
  extend: typeof extend;
};

export default aristobyteui;
