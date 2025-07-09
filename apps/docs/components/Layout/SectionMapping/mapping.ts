import { ButtonChildren } from "./ButtonChildren";
import { CardChildren } from "./CardChildren";
import { HomeChildren } from "./HomeChildren";

import { type LayoutSectionPropsType } from "../LayoutSection";
import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

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
  [category: string]: {
    [unit: string]: {
      childComponent: React.ComponentType<ChildComponentPropsType>;
      props: LayoutSectionPropsType;
    }[];
  };
};

export const Mapping = (props: MappingParamsType): MappingReturnType => ({
  components: {
    button: [
      {
        childComponent: ButtonChildren.Intro,
        props: {
          ...props,
          id: "intro",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Installation,
        props: {
          ...props,
          id: "installation",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Import,
        props: {
          ...props,
          id: "import",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Usage,
        props: {
          ...props,
          id: "usage",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Disabled,
        props: {
          ...props,
          id: "disabled",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Sizes,
        props: {
          ...props,
          id: "sizes",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Radius,
        props: {
          ...props,
          id: "radius",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Colors,
        props: {
          ...props,
          id: "colors",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Variants,
        props: {
          ...props,
          id: "variants",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Loading,
        props: {
          ...props,
          id: "loading",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.WithIcons,
        props: {
          ...props,
          id: "with-icons",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.IconsOnly,
        props: {
          ...props,
          id: "icons-only",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.CustomStyles,
        props: {
          ...props,
          id: "custom-styles",
          withTitle: true,
          withDescription: true,
        },
      },
    ],
    card: [
      {
        childComponent: CardChildren.Intro,
        props: {
          ...props,
          id: "intro",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Installation,
        props: {
          ...props,
          id: "installation",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Import,
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
        childComponent: HomeChildren.Intro,
        props: {
          ...props,
          id: "intro",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Installation,
        props: {
          ...props,
          id: "installation",
          withTitle: true,
          withDescription: true,
        },
      },
      {
        childComponent: ButtonChildren.Import,
        props: {
          ...props,
          id: "import",
          withTitle: true,
          withDescription: true,
        },
      },
    ],
  },
});
