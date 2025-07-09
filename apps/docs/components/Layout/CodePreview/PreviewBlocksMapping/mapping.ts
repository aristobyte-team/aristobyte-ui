import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";
import { ButtonPreviewBlocks } from "./ButtonPreviewBlocks";

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
      },
    },
  }) as MappingType)![props.category]![props.unit]![props.section]!;
