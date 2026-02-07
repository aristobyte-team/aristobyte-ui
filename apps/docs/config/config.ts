import { Icons } from '@aristobyte-ui/utils';

export const Config = {
  introLinks: [
    {
      id: 'storybook',
      // @TODO: insert proper href
      href: 'https://storybook/{{package}}',
      target: '_blank',
      icon: Icons.OpenedBook,
    },
    {
      id: 'npm',
      href: 'http://npmjs.com/package/@aristobyte-ui/{{package}}',
      target: '_blank',
      icon: Icons.Package,
    },
    {
      id: 'source',
      href: 'https://github.com/aristobyte-team/aristobyte-ui/tree/master/packages/{{package}}',
      target: '_blank',
      icon: Icons.Github,
    },
  ] as {
    id: string;
    href: string;
    target: '_self' | '_blank' | '_parent' | '_top';
    icon: (typeof Icons)[keyof typeof Icons];
  }[],
  sidebar: {
    sections: [
      {
        id: 'get-started',
        icon: Icons.Play,
        links: [
          {
            id: 'overview',
            href: '/get-started/overview',
            target: '_self',
          },
          {
            id: 'installation',
            href: '/get-started/installation',
            target: '_self',
          },
        ],
      },
      {
        id: 'components',
        icon: Icons.Components,
        links: [
          {
            id: 'anchor',
            href: '/components/anchor',
            target: '_self',
          },
          {
            id: 'button',
            href: '/components/button',
            target: '_self',
          },
          {
            id: 'card',
            href: '/components/card',
            target: '_self',
          },
          {
            id: 'dropdown',
            href: '/components/dropdown',
            target: '_self',
          },
          {
            id: 'label',
            href: '/components/label',
            target: '_self',
          },
          {
            id: 'message-box',
            href: '/components/message-box',
            target: '_self',
          },
          {
            id: 'radio',
            href: '/components/radio',
            target: '_self',
          },
          {
            id: 'spinner',
            href: '/components/spinner',
            target: '_self',
          },
          {
            id: 'switch',
            href: '/components/switch',
            target: '_self',
          },
        ],
      },
      {
        id: 'presets',
        icon: Icons.Palette,
        links: [
          {
            id: 'social-media-card',
            href: '/presets/social-media-card',
            target: '_self',
          },
        ],
      },
    ],
  },
  installation: [
    {
      id: 'npm',
      label: 'npm',
      script: 'npm install @aristobyte-ui/{{package}}',
      icon: Icons.Npm,
    },
    {
      id: 'yarn',
      label: 'yarn',
      script: 'yarn add @aristobyte-ui/{{package}}',
      icon: Icons.Yarn,
    },
    {
      id: 'pnpm',
      label: 'pnpm',
      script: 'pnpm add @aristobyte-ui/{{package}}',
      icon: Icons.Pnpm,
    },
    {
      id: 'bun',
      label: 'bun',
      script: 'bun add @aristobyte-ui/{{package}}',
      icon: Icons.Bun,
    },
    {
      id: 'aristobyte-ui-cli',
      label: 'aristobyte-ui cli',
      script: 'aristobyte-ui add {{package}}',
      icon: Icons.AristoByteUICLI,
    },
  ],
  tabs: {
    codePreview: ['preview', 'code'],
    import: ['individual', 'global'],
  },
};
export type ConfigType = typeof Config;
