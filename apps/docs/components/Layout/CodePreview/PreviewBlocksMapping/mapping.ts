import * as React from "react";

import { ButtonPreviewBlocks } from "./ButtonPreviewBlocks";
import { SpinnerPreviewBlocks } from "./SpinnerPreviewBlocks";
import { MessageBoxPreviewBlocks } from "./MessageBoxPreviewBlocks";
import { SwitchPreviewBlocks } from "./SwitchPreviewBlocks";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";
import { RadioPreviewBlocks } from "./RadioPreviewBlocks";

export type ChildComponentPropsType = {
  config?: ConfigType;
  t?: TranslateFunctionType;
};

export type MappingReturnType = React.ComponentType<ChildComponentPropsType>;

export type MappingType = {
  [category: string]: {
    [unit: string]: {
      [section: string]: MappingReturnType;
    };
  };
};

export const Mapping = (
  category: string,
  unit: string,
  section: string
): MappingReturnType =>
  (({
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
      },
    },
  }) as MappingType)![category]![unit]![section]!;
