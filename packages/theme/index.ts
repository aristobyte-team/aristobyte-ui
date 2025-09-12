import * as Extend from "./extend";
import * as Plugins from "./plugins";

export const aristobyteui = () => Object.values(Plugins);

export * from "./extend";
export * from "./plugins";
export default { plugin: aristobyteui, extend: Extend.extend };
