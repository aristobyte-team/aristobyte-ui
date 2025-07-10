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
        } as { [unit: string]: string },
      },
      {
        id: "global",
        content: {
          button: CodeBlocks.Import(["Button"]),
          card: CodeBlocks.Import(["Card"]),
          home: CodeBlocks.Import(["ComponentName"]),
        } as { [unit: string]: string },
      },
    ],
    codePreview: [
      {
        id: "code",
        content: {
          button: {
            usage: CodeBlocks.Button.Usage,
            disabled: CodeBlocks.Button.Disabled,
            sizes: CodeBlocks.Button.Sizes,
          },
        } as { [unit: string]: { [unitSection: string]: string } },
      },
      {
        id: "preview",
        content: {
          button: {
            usage: PreviewBlocks.Button.Usage,
            disabled: PreviewBlocks.Button.Disabled,
            sizes: PreviewBlocks.Button.Sizes,
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
  layout: {
    components: {
      button: [
        { section: "intro" },
        { section: "installation" },
        { section: "usage" },
        { section: "disabled" },
        { section: "sizes" },
        { section: "radius" },
        { section: "colors" },
        { section: "variants" },
        { section: "loading" },
        { section: "with-icons" },
        { section: "icons-only" },
        { section: "custom-styles" },
      ],
    },
  },
};

export type ConfigType = typeof Config;
