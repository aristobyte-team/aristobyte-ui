import { anchor } from "./anchor";
import { button } from "./button";
import { buttonGroup } from "./buttonGroup";
import { card } from "./card";
import { label } from "./label";
import { messageBox } from "./messageBox";
import { radio } from "./radio";
import { radioGroup } from "./radioGroup";
import { spinner } from "./spinner";
import { switchPlugin } from "./switch";
import type { PluginType } from "./types";

export const plugin = (): PluginType[] => [
  anchor,
  button,
  buttonGroup,
  card,
  label,
  messageBox,
  radio,
  radioGroup,
  spinner,
  switchPlugin,
];

export * from "./anchor";
export * from "./button";
export * from "./buttonGroup";
export * from "./card";
export * from "./label";
export * from "./messageBox";
export * from "./radio";
export * from "./radioGroup";
export * from "./spinner";
export * from "./switch";
