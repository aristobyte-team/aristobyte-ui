import * as React from "react";

import { ButtonSections } from "./ButtonSections";
import { CardSections } from "./CardSections";
import { HomeSections } from "./HomeSections";
import { SpinnerSections } from "./SpinnerSections";

import { type LayoutSectionPropsType } from "../LayoutSection";
import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

// @TODO: make 'config' and 't' optional props
export type ChildComponentPropsType = {
  config: ConfigType;
  t: TranslateFunctionType;
};

export type MappingParamsType = {
  category: string;
  unit: string;
  config: ConfigType;
  t: TranslateFunctionType;
};

export type MappingReturnType = {
  childComponent: React.ComponentType<ChildComponentPropsType>;
  props: LayoutSectionPropsType;
}[];

export type MappingType = {
  [category: string]: {
    [unit: string]: MappingReturnType;
  };
};

export const Mapping = (props: MappingParamsType): MappingReturnType =>
  (
    ({
      components: {
        button: [
          {
            childComponent: ButtonSections.Intro,
            props: {
              ...props,
              id: "intro",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Installation,
            props: {
              ...props,
              id: "installation",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Import,
            props: {
              ...props,
              id: "import",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Usage,
            props: {
              ...props,
              id: "usage",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Disabled,
            props: {
              ...props,
              id: "disabled",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Sizes,
            props: {
              ...props,
              id: "sizes",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Radius,
            props: {
              ...props,
              id: "radius",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Variants,
            props: {
              ...props,
              id: "variants",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Loading,
            props: {
              ...props,
              id: "loading",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.WithIcon,
            props: {
              ...props,
              id: "with-icon",
              withTitle: true,
              withDescription: true,
            },
          },
        ],
        card: [
          {
            childComponent: CardSections.Intro,
            props: {
              ...props,
              id: "intro",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Installation,
            props: {
              ...props,
              id: "installation",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Import,
            props: {
              ...props,
              id: "import",
              withTitle: true,
              withDescription: true,
            },
          },
        ],
        home: [
          {
            childComponent: HomeSections.Intro,
            props: {
              ...props,
              id: "intro",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Installation,
            props: {
              ...props,
              id: "installation",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: ButtonSections.Import,
            props: {
              ...props,
              id: "import",
              withTitle: true,
              withDescription: true,
            },
          },
        ],
        spinner: [
          {
            childComponent: SpinnerSections.Intro,
            props: {
              ...props,
              id: "intro",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: SpinnerSections.Installation,
            props: {
              ...props,
              id: "installation",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: SpinnerSections.Import,
            props: {
              ...props,
              id: "import",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: SpinnerSections.Usage,
            props: {
              ...props,
              id: "usage",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: SpinnerSections.Variants,
            props: {
              ...props,
              id: "variants",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: SpinnerSections.Types,
            props: {
              ...props,
              id: "types",
              withTitle: true,
              withDescription: true,
            },
          },
          {
            childComponent: SpinnerSections.Sizes,
            props: {
              ...props,
              id: "sizes",
              withTitle: true,
              withDescription: true,
            },
          },
        ],
      },
    }) as MappingType
  )[props.category]![props.unit]!;
