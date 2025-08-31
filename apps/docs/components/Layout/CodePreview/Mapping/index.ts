import * as React from "react";

import { ButtonPreviewBlocks } from "./ButtonPreviewBlocks";
import { SpinnerPreviewBlocks } from "./SpinnerPreviewBlocks";
import { MessageBoxPreviewBlocks } from "./MessageBoxPreviewBlocks";
import { SwitchPreviewBlocks } from "./SwitchPreviewBlocks";
import { RadioPreviewBlocks } from "./RadioPreviewBlocks";
import { DropdownPreviewBlocks } from "./DropdownPreviewBlocks";

export type MappingType = {
  [category: string]: {
    [unit: string]: {
      [section: string]: () => React.JSX.Element;
    };
  };
};

export const mapping: MappingType = {
  components: {
    button: {
      usage: ButtonPreviewBlocks.Usage,
      disabled: ButtonPreviewBlocks.Disabled,
      loading: ButtonPreviewBlocks.Loading,
      sizes: ButtonPreviewBlocks.Sizes,
      radius: ButtonPreviewBlocks.Radius,
      variants: ButtonPreviewBlocks.Variants,
      appearance: ButtonPreviewBlocks.Appearance,
      "with-icon": ButtonPreviewBlocks.WithIcon,
      "button-group": ButtonPreviewBlocks.ButtonGroup,
      "button-group-disabled": ButtonPreviewBlocks.ButtonGroupDisabled,
      "button-group-alignment": ButtonPreviewBlocks.ButtonGroupAlignment,
      "button-group-radius": ButtonPreviewBlocks.ButtonGroupRadius,
      "button-group-size": ButtonPreviewBlocks.ButtonGroupSize,
      "button-group-variant": ButtonPreviewBlocks.ButtonGroupVariant,
    },
    spinner: {
      usage: SpinnerPreviewBlocks.Usage,
      sizes: SpinnerPreviewBlocks.Sizes,
      types: SpinnerPreviewBlocks.Types,
      variants: SpinnerPreviewBlocks.Variants,
    },
    "message-box": {
      usage: MessageBoxPreviewBlocks.Usage,
      types: MessageBoxPreviewBlocks.Types,
      variants: MessageBoxPreviewBlocks.Variants,
      radius: MessageBoxPreviewBlocks.Radius,
      "without-icon": MessageBoxPreviewBlocks.WithoutIcon,
    },
    switch: {
      checked: SwitchPreviewBlocks.Checked,
      usage: SwitchPreviewBlocks.Usage,
      variants: SwitchPreviewBlocks.Variants,
      labeled: SwitchPreviewBlocks.Labeled,
      "align-label": SwitchPreviewBlocks.AlignLabel,
      disabled: SwitchPreviewBlocks.Disabled,
      sizes: SwitchPreviewBlocks.Sizes,
      controlled: SwitchPreviewBlocks.Controlled,
      "track-icon": SwitchPreviewBlocks.TrackIcon,
      "thumb-icon": SwitchPreviewBlocks.ThumbIcon,
    },
    radio: {
      usage: RadioPreviewBlocks.Usage,
      disabled: RadioPreviewBlocks.Disabled,
      sizes: RadioPreviewBlocks.Sizes,
      variants: RadioPreviewBlocks.Variants,
      appearance: RadioPreviewBlocks.Appearance,
      "highlight-label": RadioPreviewBlocks.HighlightLabel,
      "radio-group-align": RadioPreviewBlocks.RadioGroupAlign,
      "align-label": RadioPreviewBlocks.AlignLabel,
      controlled: RadioPreviewBlocks.Controlled,
    },
    dropdown: {
      usage: DropdownPreviewBlocks.Usage,
      disabled: DropdownPreviewBlocks.Disabled,
      appearance: DropdownPreviewBlocks.Appearance,
    },
  },
};
