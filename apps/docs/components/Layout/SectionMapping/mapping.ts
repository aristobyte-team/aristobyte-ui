import * as React from "react";

import { ButtonSections } from "./ButtonSections";
import { CardSections } from "./CardSections";
import { HomeSections } from "./HomeSections";
import { SpinnerSections } from "./SpinnerSections";
import { MessageBoxSections } from "./MessageBoxSections";
import { SwitchSections } from "./SwitchSections";
import { RadioSections } from "./RadioSections";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

// @TODO: make 'config' and 't' optional props
export type ChildComponentPropsType = {
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
          { intro: ButtonSections.Intro },
          { installation: ButtonSections.Installation },
          { import: ButtonSections.Import },
          { usage: ButtonSections.Usage },
          { disabled: ButtonSections.Disabled },
          { sizes: ButtonSections.Sizes },
          { radius: ButtonSections.Radius },
          { variants: ButtonSections.Variants },
          { appearance: ButtonSections.Appearance },
          { loading: ButtonSections.Loading },
          { "with-icon": ButtonSections.WithIcon },
          { "button-group": ButtonSections.ButtonGroup },
          { "button-group-disabled": ButtonSections.ButtonGroupDisabled },
          { "button-group-alignment": ButtonSections.ButtonGroupAlignment },
          { "button-group-size": ButtonSections.ButtonGroupSize },
          { "button-group-radius": ButtonSections.ButtonGroupRadius },
          { "button-group-variant": ButtonSections.ButtonGroupVariant },
        ],
        card: [
          { intro: CardSections.Intro },
          { installation: ButtonSections.Installation },
          { import: ButtonSections.Import },
        ],
        home: [
          { intro: HomeSections.Intro },
          { installation: ButtonSections.Installation },
          { import: ButtonSections.Import },
        ],
        spinner: [
          { intro: SpinnerSections.Intro },
          { installation: SpinnerSections.Installation },
          { import: SpinnerSections.Import },
          { usage: SpinnerSections.Usage },
          { variants: SpinnerSections.Variants },
          { types: SpinnerSections.Types },
          { sizes: SpinnerSections.Sizes },
        ],
        "message-box": [
          { intro: MessageBoxSections.Intro },
          { installation: MessageBoxSections.Installation },
          { import: MessageBoxSections.Import },
          { usage: MessageBoxSections.Usage },
          { variants: MessageBoxSections.Variants },
          { types: MessageBoxSections.Types },
          { radius: MessageBoxSections.Radius },
          { "without-icon": MessageBoxSections.WithoutIcon },
        ],
        switch: [
          { intro: SwitchSections.Intro },
          { installation: SwitchSections.Installation },
          { import: SwitchSections.Import },
          { usage: SwitchSections.Usage },
          { labeled: SwitchSections.Labeled },
          { "align-label": SwitchSections.AlignLabel },
          { disabled: SwitchSections.Disabled },
          { checked: SwitchSections.Checked },
          { variants: SwitchSections.Variants },
          { sizes: SwitchSections.Sizes },
          { controlled: SwitchSections.Controlled },
          { "track-icon": SwitchSections.TrackIcon },
          { "thumb-icon": SwitchSections.ThumbIcon },
        ],
        radio: [
          { intro: RadioSections.Intro },
          { installation: RadioSections.Installation },
          { import: RadioSections.Import },
          { usage: RadioSections.Usage },
          { disabled: RadioSections.Disabled },
          { sizes: RadioSections.Sizes },
          { variants: RadioSections.Variants },
          { "radio-group-variants": RadioSections.RadioGroupVariants },
          { appearance: RadioSections.Appearance },
          { "highlight-label": RadioSections.HighlightLabel },
        ],
      },
    }) as MappingType
  )[category]![unit]!;
