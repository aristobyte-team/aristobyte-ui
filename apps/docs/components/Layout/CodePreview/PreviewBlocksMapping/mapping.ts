import * as React from "react";

import { ButtonPreviewBlocks } from "./ButtonPreviewBlocks";
import { SpinnerPreviewBlocks } from "./SpinnerPreviewBlocks";

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
    },
  }) as MappingType)![props.category]![props.unit]![props.section]!;
