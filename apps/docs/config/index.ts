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
            id: "spinner",
            href: "/components/spinner",
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
          spinner: CodeBlocks.Import(["Spinner"], "/spinner"),
        } as { [unit: string]: string },
      },
      {
        id: "global",
        content: {
          button: CodeBlocks.Import(["Button"]),
          card: CodeBlocks.Import(["Card"]),
          home: CodeBlocks.Import(["ComponentName"]),
          spinner: CodeBlocks.Import(["Spinner"]),
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
          },
          spinner: {
            usage: CodeBlocks.Spinner.Usage,
            sizes: CodeBlocks.Spinner.Sizes,
            types: CodeBlocks.Spinner.Types,
            variants: CodeBlocks.Spinner.Variants,
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
          },
          spinner: {
            usage: PreviewBlocks.Spinner.Usage,
            sizes: PreviewBlocks.Spinner.Sizes,
            types: PreviewBlocks.Spinner.Types,
            variants: PreviewBlocks.Spinner.Variants,
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
