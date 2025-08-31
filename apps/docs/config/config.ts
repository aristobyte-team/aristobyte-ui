import { Icons } from "@aristobyte-ui/utils";

export const Config = {
  introLinks: (unit: string) => [
    {
      id: "storybook",
      // @TODO: insert proper href
      href: `https://storybook/${unit}`,
      target: "_blank",
      Icon: Icons.Storybook,
    },
    {
      id: "npm",
      href: `http://npmjs.com/package/@aristobyte-ui/${unit}`,
      target: "_blank",
      Icon: Icons.Npm,
    },
    {
      id: "source",
      href: `https://github.com/aristobyte-team/aristobyte-ui/tree/master/packages/${unit}`,
      target: "_blank",
      Icon: Icons.Github,
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
            id: "dropdown",
            href: "/components/dropdown",
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
  installation: [
    {
      id: "npm",
      label: "npm",
      script: "npm install",
      Icon: Icons.Npm,
    },
    {
      id: "yarn",
      label: "yarn",
      script: "yarn add",
      Icon: Icons.Yarn,
    },
    {
      id: "pnpm",
      label: "pnpm",
      script: "pnpm add",
      Icon: Icons.Pnpm,
    },
    {
      id: "bun",
      label: "bun",
      script: "bun add",
      Icon: Icons.Bun,
    },
  ],
  codePreview: { tabs: ["preview", "code"] },
  import: {
    tabs: ["individual", "global"],
    components: {
      button: ["Button", "ButtonGroup"],
      card: ["Card"],
      dropdown: ["Dropdown", "DropdownOption"],
      home: ["ComponentName"],
      "message-box": ["MessageBox"],
      spinner: ["Spinner"],
      switch: ["Switch"],
      radio: ["Radio", "RadioGroup"],
    } as { [unit: string]: string[] },
  },
};
export type ConfigType = typeof Config;
