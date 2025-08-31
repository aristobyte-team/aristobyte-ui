import * as React from "react";

import { Intro, Installation, Import } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";
import { CodePreview } from "../CodePreview";

// @TODO: make 'config' and 't' optional props
export type ChildComponentPropsType = {
  category: string;
  unit: string;
  section: string;
  config: ConfigType;
  t: TranslateFunctionType;
};

export type MappingReturnType = {
  [id: string]: React.ComponentType<ChildComponentPropsType>;
}[];

export type MappingType = {
  [category: string]: {
    [unit: string]: MappingReturnType;
  };
};

export const Mapping = (category: string, unit: string): MappingReturnType =>
  (
    ({
      components: {
        button: [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
          { usage: CodePreview },
          { disabled: CodePreview },
          { sizes: CodePreview },
          { radius: CodePreview },
          { variants: CodePreview },
          { appearance: CodePreview },
          { loading: CodePreview },
          { "with-icon": CodePreview },
          { "button-group": CodePreview },
          { "button-group-disabled": CodePreview },
          { "button-group-alignment": CodePreview },
          { "button-group-size": CodePreview },
          { "button-group-radius": CodePreview },
          { "button-group-variant": CodePreview },
        ],
        card: [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
        ],
        home: [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
        ],
        spinner: [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
          { usage: CodePreview },
          { variants: CodePreview },
          { types: CodePreview },
          { sizes: CodePreview },
        ],
        "message-box": [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
          { usage: CodePreview },
          { variants: CodePreview },
          { types: CodePreview },
          { radius: CodePreview },
          { "without-icon": CodePreview },
        ],
        switch: [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
          { usage: CodePreview },
          { labeled: CodePreview },
          { "align-label": CodePreview },
          { disabled: CodePreview },
          { checked: CodePreview },
          { variants: CodePreview },
          { sizes: CodePreview },
          { controlled: CodePreview },
          { "track-icon": CodePreview },
          { "thumb-icon": CodePreview },
        ],
        radio: [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
          { usage: CodePreview },
          { disabled: CodePreview },
          { sizes: CodePreview },
          { variants: CodePreview },
          { appearance: CodePreview },
          { "highlight-label": CodePreview },
          { "radio-group-align": CodePreview },
          { "align-label": CodePreview },
          { controlled: CodePreview },
        ],
        dropdown: [
          { intro: Intro },
          { installation: Installation },
          { import: Import },
          { usage: CodePreview },
          { disabled: CodePreview },
          { appearance: CodePreview },
        ],
      },
    }) as MappingType
  )[category]![unit]!;
