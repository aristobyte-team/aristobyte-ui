import * as React from "react";

import { ButtonPreviewBlocks } from "./ButtonPreviewBlocks";
import { SpinnerPreviewBlocks } from "./SpinnerPreviewBlocks";
import { MessageBoxBlocks } from "./MessageBoxBlocks";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type ChildComponentPropsType = {
  config?: ConfigType;
  t?: TranslateFunctionType;
};

export type MappingParamsType = {
  category: string;
  unit: string;
  section: string;
  config: ConfigType;
  t: TranslateFunctionType;
};

export type MappingReturnType = {
  childComponent: React.ComponentType<ChildComponentPropsType>;
  props?: ChildComponentPropsType;
};

export type MappingType = {
  [category: string]: {
    [unit: string]: {
      [section: string]: MappingReturnType;
    };
  };
};

export const Mapping = (props: MappingParamsType): MappingReturnType =>
  (({
    components: {
      button: {
        usage: {
          childComponent: ButtonPreviewBlocks.Usage,
          props,
        },
        disabled: {
          childComponent: ButtonPreviewBlocks.Disabled,
          props,
        },
        loading: {
          childComponent: ButtonPreviewBlocks.Loading,
          props,
        },
        sizes: {
          childComponent: ButtonPreviewBlocks.Sizes,
          props,
        },
        radius: {
          childComponent: ButtonPreviewBlocks.Radius,
          props,
        },
        variants: {
          childComponent: ButtonPreviewBlocks.Variants,
          props,
        },
        appearance: {
          childComponent: ButtonPreviewBlocks.Appearance,
          props,
        },
        "with-icon": {
          childComponent: ButtonPreviewBlocks.WithIcon,
          props,
        },
        "button-group": {
          childComponent: ButtonPreviewBlocks.ButtonGroup,
          props,
        },
        "button-group-disabled": {
          childComponent: ButtonPreviewBlocks.ButtonGroupDisabled,
          props,
        },
        "button-group-alignment": {
          childComponent: ButtonPreviewBlocks.ButtonGroupAlignment,
          props,
        },
        "button-group-radius": {
          childComponent: ButtonPreviewBlocks.ButtonGroupRadius,
          props,
        },
        "button-group-size": {
          childComponent: ButtonPreviewBlocks.ButtonGroupSize,
          props,
        },
        "button-group-variant": {
          childComponent: ButtonPreviewBlocks.ButtonGroupVariant,
          props,
        },
      },
      spinner: {
        usage: {
          childComponent: SpinnerPreviewBlocks.Usage,
          props,
        },
        sizes: {
          childComponent: SpinnerPreviewBlocks.Sizes,
          props,
        },
        types: {
          childComponent: SpinnerPreviewBlocks.Types,
          props,
        },
        variants: {
          childComponent: SpinnerPreviewBlocks.Variants,
          props,
        },
      },
      "message-box": {
        usage: {
          childComponent: MessageBoxBlocks.Usage,
          props,
        },
        types: {
          childComponent: MessageBoxBlocks.Types,
          props,
        },
        variants: {
          childComponent: MessageBoxBlocks.Variants,
          props,
        },
        radius: {
          childComponent: MessageBoxBlocks.Radius,
          props,
        },
        "without-icon": {
          childComponent: MessageBoxBlocks.WithoutIcon,
          props,
        },
      },
    },
  }) as MappingType)![props.category]![props.unit]![props.section]!;
