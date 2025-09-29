import { anchor } from "./anchor.mjs";
import { button } from "./button.mjs";
import { buttonGroup } from "./buttonGroup.mjs";
import { card } from "./card.mjs";
import { label } from "./label.mjs";
import { messageBox } from "./messageBox.mjs";
import { radio } from "./radio.mjs";
import { radioGroup } from "./radioGroup.mjs";
import { spinner } from "./spinner.mjs";
import { switchPlugin } from "./switch.mjs";

export * from "./anchor.mjs";
export * from "./button.mjs";
export * from "./buttonGroup.mjs";
export * from "./card.mjs";
export * from "./label.mjs";
export * from "./messageBox.mjs";
export * from "./radio.mjs";
export * from "./radioGroup.mjs";
export * from "./spinner.mjs";
export * from "./switch.mjs";

export default () => [
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
