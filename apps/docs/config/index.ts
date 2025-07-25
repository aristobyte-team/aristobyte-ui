import { Icons, CodeBlocks, PreviewBlocks } from "@/utils";

export const Config = {
  introLinks: [
    {
      id: "storybook",
      href: "TODO",
      target: "_blank",
      icon: Icons.Storybook,
    },
    {
      id: "npm",
      href: "TODO",
      target: "_blank",
      icon: Icons.Npm,
    },
    {
      id: "source",
      href: "TODO",
      target: "_blank",
      icon: Icons.Github,
    },
    {
      id: "style-source",
      href: "TODO",
      target: "_blank",
      icon: Icons.Github,
    },
  ],
  sidebar: {
    sections: [
      {
        id: "get-started",
        links: [
          {
            id: "introduction",
            href: "/get-started/introduction",
            target: "_self",
          },
          {
            id: "installation",
            href: "/get-started/installation",
            target: "_self",
          },
        ],
      },
      {
        id: "components",
        links: [
          {
            id: "button",
            href: "/components/button",
            target: "_self",
          },
          {
            id: "card",
            href: "/components/card",
            target: "_self",
          },
          {
            id: "message-box",
            href: "/components/message-box",
            target: "_self",
          },
          {
            id: "radio",
            href: "/components/radio",
            target: "_self",
          },
          {
            id: "spinner",
            href: "/components/spinner",
            target: "_self",
          },
          {
            id: "switch",
            href: "/components/switch",
            target: "_self",
          },
        ],
      },
    ],
  },
  tabs: {
    installation: [
      {
        id: "npm",
        label: "npm",
        script: "npm install",
        icon: Icons.Npm,
      },
      {
        id: "yarn",
        label: "yarn",
        script: "yarn add",
        icon: Icons.Yarn,
      },
      {
        id: "pnpm",
        label: "pnpm",
        script: "pnpm add",
        icon: Icons.Pnpm,
      },
      {
        id: "bun",
        label: "bun",
        script: "bun add",
        icon: Icons.Bun,
      },
    ],
    import: [
      {
        id: "individual",
        content: {
          button: CodeBlocks.Import(["Button"], "/button"),
          card: CodeBlocks.Import(["Card"], "/card"),
          home: CodeBlocks.Import(["ComponentName"], "/componentName"),
          "message-box": CodeBlocks.Import(["MessageBox"], "/message-box"),
          spinner: CodeBlocks.Import(["Spinner"], "/spinner"),
          switch: CodeBlocks.Import(["Switch"], "/switch"),
          radio: CodeBlocks.Import(["Radio", "RadioGroup"], "/radio"),
        } as { [unit: string]: string },
      },
      {
        id: "global",
        content: {
          button: CodeBlocks.Import(["Button"]),
          card: CodeBlocks.Import(["Card"]),
          home: CodeBlocks.Import(["ComponentName"]),
          "message-box": CodeBlocks.Import(["MessageBox"]),
          spinner: CodeBlocks.Import(["Spinner"]),
          switch: CodeBlocks.Import(["Switch"]),
          radio: CodeBlocks.Import(["Radio"]),
        } as { [unit: string]: string },
      },
    ],
    codePreview: [
      {
        id: "code",
        content: {
          button: {
            //@TODO: instead of using CodeBlocks.Button.Usage adjust the codeBlocks.ts and use { content: { button: CodeBlocks.Button } }
            usage: CodeBlocks.Button.Usage,
            loading: CodeBlocks.Button.Loading,
            disabled: CodeBlocks.Button.Disabled,
            sizes: CodeBlocks.Button.Sizes,
            radius: CodeBlocks.Button.Radius,
            variants: CodeBlocks.Button.Variants,
            appearance: CodeBlocks.Button.Appearance,
            "with-icon": CodeBlocks.Button.WithIcon,
            "button-group": CodeBlocks.Button.ButtonGroup,
            "button-group-disabled": CodeBlocks.Button.ButtonGroupDisabled,
            "button-group-alignment": CodeBlocks.Button.ButtonGroupAlignment,
            "button-group-radius": CodeBlocks.Button.ButtonGroupRadius,
            "button-group-size": CodeBlocks.Button.ButtonGroupSize,
            "button-group-variant": CodeBlocks.Button.ButtonGroupVariant,
          },
          spinner: {
            usage: CodeBlocks.Spinner.Usage,
            sizes: CodeBlocks.Spinner.Sizes,
            types: CodeBlocks.Spinner.Types,
            variants: CodeBlocks.Spinner.Variants,
          },
          "message-box": {
            usage: CodeBlocks.MessageBox.Usage,
            types: CodeBlocks.MessageBox.Types,
            variants: CodeBlocks.MessageBox.Variants,
            radius: CodeBlocks.MessageBox.Radius,
            "without-icon": CodeBlocks.MessageBox.WithoutIcon,
          },
          switch: {
            usage: CodeBlocks.Switch.Usage,
            checked: CodeBlocks.Switch.Checked,
            variants: CodeBlocks.Switch.Variants,
            sizes: CodeBlocks.Switch.Sizes,
            labeled: CodeBlocks.Switch.Labeled,
            disabled: CodeBlocks.Switch.Disabled,
            controlled: CodeBlocks.Switch.Controlled,
            "align-label": CodeBlocks.Switch.AlignLabel,
            "track-icon": CodeBlocks.Switch.TrackIcon,
            "thumb-icon": CodeBlocks.Switch.ThumbIcon,
          },
          radio: {
            usage: CodeBlocks.Radio.Usage,
          },
        } as { [unit: string]: { [unitSection: string]: string } },
      },
      {
        id: "preview",
        content: {
          //@TODO: instead of using PreviewBlocks.Button.Usage adjust the previewBlocks.ts and use { content: { button: PreviewBlocks.Button } }
          button: {
            usage: PreviewBlocks.Button.Usage,
            disabled: PreviewBlocks.Button.Disabled,
            loading: PreviewBlocks.Button.Loading,
            sizes: PreviewBlocks.Button.Sizes,
            radius: PreviewBlocks.Button.Radius,
            variants: PreviewBlocks.Button.Variants,
            appearance: PreviewBlocks.Button.Appearance,
            "with-icon": PreviewBlocks.Button.WithIcon,
            "button-group": PreviewBlocks.Button.ButtonGroup,
            "button-group-disabled": PreviewBlocks.Button.ButtonGroupDisabled,
            "button-group-alignment": PreviewBlocks.Button.ButtonGroupAlignment,
            "button-group-radius": PreviewBlocks.Button.ButtonGroupRadius,
            "button-group-size": PreviewBlocks.Button.ButtonGroupSize,
            "button-group-variant": PreviewBlocks.Button.ButtonGroupVariant,
          },
          spinner: {
            usage: PreviewBlocks.Spinner.Usage,
            sizes: PreviewBlocks.Spinner.Sizes,
            types: PreviewBlocks.Spinner.Types,
            variants: PreviewBlocks.Spinner.Variants,
          },
          "message-box": {
            usage: PreviewBlocks.MessageBox.Usage,
            types: PreviewBlocks.MessageBox.Types,
            variants: PreviewBlocks.MessageBox.Variants,
            radius: PreviewBlocks.MessageBox.Radius,
            "without-icon": PreviewBlocks.MessageBox.WithoutIcon,
          },
          switch: {
            usage: PreviewBlocks.Switch.Usage,
            checked: PreviewBlocks.Switch.Checked,
            variants: PreviewBlocks.Switch.Variants,
            sizes: PreviewBlocks.Switch.Sizes,
            labeled: PreviewBlocks.Switch.Labeled,
            disabled: PreviewBlocks.Switch.Disabled,
            controlled: PreviewBlocks.Switch.Controlled,
            "align-label": PreviewBlocks.Switch.AlignLabel,
            "track-icon": PreviewBlocks.Switch.TrackIcon,
            "thumb-icon": PreviewBlocks.Switch.ThumbIcon,
          },
          radio: {
            usage: PreviewBlocks.Radio.Usage,
          },
        } as {
          [unit: string]: {
            [unitSection: string]: {
              category: string;
              unit: string;
              section: string;
            };
          };
        },
      },
    ],
  },
};

export type ConfigType = typeof Config;
