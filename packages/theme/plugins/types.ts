// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import plugin from "tailwindcss/plugin";
import { colors as rootColors } from "../extend/colors";

export type ColorsType = typeof rootColors;
export type PluginType = ReturnType<typeof plugin>;
