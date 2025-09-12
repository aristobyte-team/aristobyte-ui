import * as Extend from "./extend";
import * as Plugins from "./plugins";

const aristobyteui = { plugin: Plugins.plugin, extend: Extend.extend };

export * from "./extend";
export * from "./plugins";
export { aristobyteui, aristobyteui as default };
