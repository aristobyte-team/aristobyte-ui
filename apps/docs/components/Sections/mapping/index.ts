import * as React from 'react';

import * as Components from './Components';
import * as Presets from './Presets';

export type MappingType = {
  [category: string]: {
    [unit: string]: {
      [section: string]: () => React.JSX.Element;
    };
  };
};

export const mapping: MappingType = {
  'get-started': { overview: {} },
  presets: {
    'social-media-card': {
      disabled: Presets.SocialMediaCardPreviewBlocks.Disabled,
    },
  },
  components: {
    anchor: {
      variants: Components.AnchorPreviewBlocks.Variants,
      targets: Components.AnchorPreviewBlocks.Targets,
    },
    card: {
      basic: Components.CardPreviewBlocks.Basic,
      'with-icon': Components.CardPreviewBlocks.WithIcon,
      'with-label': Components.CardPreviewBlocks.WithLabel,
      'with-content': Components.CardPreviewBlocks.WithContent,
      'full-header': Components.CardPreviewBlocks.FullHeader,
      'with-actions': Components.CardPreviewBlocks.WithActions,
      'with-components': Components.CardPreviewBlocks.WithComponents,
    },
    label: {
      variants: Components.LabelPreviewBlocks.Variants,
      appearance: Components.LabelPreviewBlocks.Appearance,
      sizes: Components.LabelPreviewBlocks.Sizes,
      radius: Components.LabelPreviewBlocks.Radius,
      colors: Components.LabelPreviewBlocks.CustomColors,
    },
    button: {
      variants: Components.ButtonPreviewBlocks.Variants,
      appearance: Components.ButtonPreviewBlocks.Appearance,
      sizes: Components.ButtonPreviewBlocks.Sizes,
      disabled: Components.ButtonPreviewBlocks.Disabled,
      radius: Components.ButtonPreviewBlocks.Radius,
      'with-icon': Components.ButtonPreviewBlocks.WithIcon,
      loading: Components.ButtonPreviewBlocks.Loading,
      'button-group': Components.ButtonPreviewBlocks.ButtonGroup,
      'button-group-variant': Components.ButtonPreviewBlocks.ButtonGroupVariant,
      'button-group-size': Components.ButtonPreviewBlocks.ButtonGroupSize,
      'button-group-radius': Components.ButtonPreviewBlocks.ButtonGroupRadius,
      'button-group-alignment': Components.ButtonPreviewBlocks.ButtonGroupAlignment,
      'button-group-disabled': Components.ButtonPreviewBlocks.ButtonGroupDisabled,
    },
    spinner: {
      variants: Components.SpinnerPreviewBlocks.Variants,
      sizes: Components.SpinnerPreviewBlocks.Sizes,
      types: Components.SpinnerPreviewBlocks.Types,
    },
    'message-box': {
      variants: Components.MessageBoxPreviewBlocks.Variants,
      types: Components.MessageBoxPreviewBlocks.Types,
      radius: Components.MessageBoxPreviewBlocks.Radius,
      'without-icon': Components.MessageBoxPreviewBlocks.WithoutIcon,
    },
    switch: {
      variants: Components.SwitchPreviewBlocks.Variants,
      checked: Components.SwitchPreviewBlocks.Checked,
      labeled: Components.SwitchPreviewBlocks.Labeled,
      'align-label': Components.SwitchPreviewBlocks.AlignLabel,
      disabled: Components.SwitchPreviewBlocks.Disabled,
      sizes: Components.SwitchPreviewBlocks.Sizes,
      controlled: Components.SwitchPreviewBlocks.Controlled,
      'track-icon': Components.SwitchPreviewBlocks.TrackIcon,
      'thumb-icon': Components.SwitchPreviewBlocks.ThumbIcon,
    },
    radio: {
      variants: Components.RadioPreviewBlocks.Variants,
      disabled: Components.RadioPreviewBlocks.Disabled,
      sizes: Components.RadioPreviewBlocks.Sizes,
      appearance: Components.RadioPreviewBlocks.Appearance,
      'highlight-label': Components.RadioPreviewBlocks.HighlightLabel,
      'radio-group-align': Components.RadioPreviewBlocks.RadioGroupAlign,
      'align-label': Components.RadioPreviewBlocks.AlignLabel,
      controlled: Components.RadioPreviewBlocks.Controlled,
    },
    dropdown: {
      usage: Components.DropdownPreviewBlocks.Usage,
      disabled: Components.DropdownPreviewBlocks.Disabled,
      appearance: Components.DropdownPreviewBlocks.Appearance,
      multiple: Components.DropdownPreviewBlocks.Multiple,
    },
  },
};
