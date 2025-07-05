import { Icons } from "@/utils";
import { Code } from "./codeChunks";

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
          button: Code.Import(["Button"], "/button"),
          card: Code.Import(["Card"], "/card"),
          home: Code.Import(["ComponentName"], "/componentName"),
        } as { [key: string]: string },
      },
      {
        id: "global",
        content: {
          button: Code.Import(["Button"]),
          card: Code.Import(["Card"]),
          home: Code.Import(["ComponentName"]),
        } as { [key: string]: string },
      },
    ],
  },
};
