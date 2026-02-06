export type PropsMappingType = {
  [category: string]: {
    [unit: string]: {
      id: string;
      sections: {
        id: string;
        props: {
          id: string;
          inlineType: string;
          default?: string;
          blockType?: string;
          isRequired?: string;
        }[];
      }[];
    }[];
  };
};

export const propsMapping = {
  components: {
    label: [
      {
        id: 'label',
        sections: [
          {
            id: 'core-props',
            props: [{ id: 'text', inlineType: 'string', isRequired: 'true' }],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
              {
                id: 'appearance',
                inlineType: "'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing'",
                default: "'solid'",
              },
              {
                id: 'size',
                inlineType: "'xsm' | 'sm' | 'md' | 'lg' | 'xlg'",
                default: "'md'",
              },
              {
                id: 'radius',
                inlineType: "'none' | 'sm' | 'md' | 'lg' | 'full'",
                default: "'md'",
              },
              { id: 'color', inlineType: 'string' },
              { id: 'backgroundColor', inlineType: 'string' },
              { id: 'borderColor', inlineType: 'string' },
            ],
          },
          {
            id: 'advanced-props',
            props: [{ id: 'className', inlineType: 'string', default: "''" }],
          },
        ],
      },
    ],
    card: [
      {
        id: 'card',
        sections: [
          {
            id: 'core-props',
            props: [
              { id: 'title', inlineType: 'string', default: "''" },
              { id: 'description', inlineType: 'string', default: "''" },
              {
                id: 'children',
                inlineType: 'React.ReactNode | React.ReactElement | string',
                default: "''",
              },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'label',
                blockType: `{ 
  text: string; 
  backgroundColor?: string;
  borderColor?: string; 
  color?: string
}`,
                default: 'undefined',
              },
              {
                id: 'icon',
                blockType: `{ 
  component: (props: IconPropsType) => React.JSX.Element | React.ReactNode | React.ReactElement; 
  size?: number; 
  color?: string; 
  colors?: string[]
}`,
                default: 'undefined',
              },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
    anchor: [
      {
        id: 'anchor',
        sections: [
          {
            id: 'core-props',
            props: [
              { id: 'href', inlineType: 'string', default: "''" },
              {
                id: 'target',
                inlineType: "'_self' | '_blank' | '_parent' | '_top'",
                default: "'_self'",
              },
              { id: 'text', inlineType: 'string', default: "''" },
              {
                id: 'children',
                inlineType: 'React.ReactElement | React.ReactNode | string',
                default: "''",
              },
              {
                id: 'onClick',
                inlineType: '(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void | Promise<void>',
                default: 'undefined',
              },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'variant',
                inlineType: "'white' | 'black' | 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
    button: [
      {
        id: 'button',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'type',
                inlineType: "'button' | 'link'",
                default: "'button'",
              },
              { id: 'text', inlineType: 'string', default: "''" },
              {
                id: 'children',
                inlineType: 'React.ReactElement | React.JSX.Element | React.ReactNode | string',
                default: "''",
              },
              { id: 'href', inlineType: 'string', default: "''" },
              {
                id: 'target',
                inlineType: "'_self' | '_blank' | '_parent' | '_top'",
                default: "'_self'",
              },
              {
                id: 'onClick',
                inlineType:
                  '(e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void | Promise<void>',
                default: 'undefined',
              },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
              {
                id: 'appearance',
                inlineType: "'solid' | 'outline' | 'outline'-dashed | no-'outline' | 'glowing'",
                default: "'solid'",
              },
              { id: 'transparent', inlineType: 'boolean', default: 'false' },
              {
                id: 'size',
                inlineType: "'xsm' | 'sm' | 'md' | 'lg' | 'xlg'",
                default: "'md'",
              },
              {
                id: 'radius',
                inlineType: "'none' | 'sm' | 'md' | 'lg' | 'full'",
                default: "'md'",
              },
              {
                id: 'spinnerAppearance',
                inlineType: "'default' | 'duo' | 'gradient' | 'pulse' | 'pulse-duo'",
                default: "'default'",
              },
            ],
          },
          {
            id: 'state-props',
            props: [
              { id: 'disabled', inlineType: 'boolean', default: 'false' },
              { id: 'isLoading', inlineType: 'boolean', default: 'false' },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              {
                id: 'icon',
                blockType: `{
  component: (props: IconPropsType) => React.JSX.Element,
  color: string,
  size: number,
  align: 'left' | 'right',
}`,
              },
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },

      {
        id: 'button-group',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactElement<IButton> | React.ReactElement<IButton>[]',
                isRequired: true,
              },
            ],
          },
          {
            id: 'state-props',
            props: [{ id: 'disabled', inlineType: 'boolean', default: 'false' }],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'variant',
                inlineType: "'default'| 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
              {
                id: 'size',
                inlineType: "'xsm' | 'sm' | 'md' | 'lg' | 'xlg'",
                default: "'md'",
              },
              {
                id: 'radius',
                inlineType: "'none' | 'sm' | 'md' | 'lg' | 'full'",
                default: "'md'",
              },
              {
                id: 'align',
                inlineType: "'vertical' | 'horizontal'",
                default: "'horizontal'",
              },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
    dropdown: [
      {
        id: 'dropdown',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactElement<IDropdownOption> | React.ReactElement<IDropdownOption>[]',
                isRequired: 'true',
              },
              { id: 'value', inlineType: 'string', isRequired: 'true' },
              {
                id: 'button',
                inlineType: "Omit<IButton, 'children' | 'dangerouslySetInnerHTML'>",
                default: '{}',
              },
            ],
          },
          {
            id: 'state-props',
            props: [
              { id: 'disabled', inlineType: 'boolean', default: 'false' },
              {
                id: 'choice',
                inlineType: "'multiple' | 'single'",
                default: "'single'",
              },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
              {
                id: 'appearance',
                inlineType: "'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing'",
                default: "'outline'",
              },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'placeholder', inlineType: 'string', default: "'Select'" },
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
      {
        id: 'dropdown-option',
        sections: [
          {
            id: 'core-props',
            props: [
              { id: 'children', inlineType: 'string', isRequired: 'true' },
              { id: 'value', inlineType: 'string', isRequired: 'true' },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
              },
              {
                id: 'appearance',
                inlineType: "'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing'",
              },
            ],
          },
          {
            id: 'state-props',
            props: [
              { id: 'disabled', inlineType: 'boolean', default: 'false' },
              {
                id: 'choice',
                inlineType: "'multiple' | 'single'",
                default: "'single'",
              },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'description', inlineType: 'string' },
              { id: 'icon', inlineType: 'string' },
              { id: 'selectedValues', inlineType: 'string[]' },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
    'message-box': [
      {
        id: 'message-box',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactElement | React.ReactNode | string',
                default: "''",
              },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'variant',
                inlineType: "'default' | 'info' | 'warning' | 'success' | 'error'",
                default: "'default'",
              },
              {
                id: 'radius',
                inlineType: "'none' | 'sm' | 'md' | 'lg' | 'full'",
                default: "'md'",
              },
              {
                id: 'type',
                inlineType: "'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing'",
                default: "'outline'",
              },
              { id: 'withIcon', inlineType: 'boolean', default: 'false' },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              {
                id: 'customIcon',
                blockType: `{
  component: (props: IconPropsType) => React.JSX.Element,
  size?: number,
  color?: string,
}`,
                default: 'null',
              },
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
    radio: [
      {
        id: 'radio',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode',
                isRequired: 'true',
              },
              { id: 'value', inlineType: 'string', isRequired: 'true' },
              { id: 'checked', inlineType: 'boolean' },
              {
                id: 'onChange',
                inlineType: '(value: string) => void',
              },
              { id: 'name', inlineType: 'string' },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'size',
                inlineType: "'xsm' | 'sm' | 'md' | 'lg' | 'xlg'",
                default: "'md'",
              },
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
              {
                id: 'appearance',
                inlineType: "'default' | 'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing'",
                default: "'default'",
              },
              {
                id: 'alignLabel',
                inlineType: "'top' | 'right' | 'bottom' | 'left'",
                default: "'right'",
              },
              {
                id: 'highlightLabel',
                inlineType: 'boolean',
                default: 'false',
              },
            ],
          },
          {
            id: 'state-props',
            props: [{ id: 'disabled', inlineType: 'boolean', default: 'false' }],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
      {
        id: 'radio-group',
        sections: [
          {
            id: 'core-props',
            props: [
              { id: 'name', inlineType: 'string', isRequired: 'true' },
              { id: 'value', inlineType: 'string', isRequired: 'true' },
              {
                id: 'children',
                inlineType: 'React.ReactElement<IRadio> | React.ReactElement<IRadio>[]',
                isRequired: 'true',
              },
              {
                id: 'onChange',
                inlineType: '(newValue: string) => void',
              },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'size',
                inlineType: "'xsm' | 'sm' | 'md' | 'lg' | 'xlg'",
                default: "'md'",
              },
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
              {
                id: 'appearance',
                inlineType: "'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing'",
                default: "'outline'",
              },
              {
                id: 'align',
                inlineType: "'horizontal' | 'vertical'",
                default: "'horizontal'",
              },
              {
                id: 'alignLabel',
                inlineType: "'top' | 'right' | 'bottom' | 'left'",
                default: "'right'",
              },
              {
                id: 'highlightLabel',
                inlineType: 'boolean',
                default: 'false',
              },
            ],
          },
          {
            id: 'state-props',
            props: [{ id: 'disabled', inlineType: 'boolean', default: 'false' }],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
    spinner: [
      {
        id: 'spinner',
        sections: [
          {
            id: 'visual-props',
            props: [
              {
                id: 'type',
                inlineType: "'default' | 'duo' | 'gradient' | 'pulse' | 'pulse-duo'",
                default: "'default'",
              },
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
              {
                id: 'size',
                inlineType: "'xsm' | 'sm' | 'md' | 'lg' | 'xlg'",
                default: "'md'",
              },
            ],
          },
          {
            id: 'advanced-props',
            props: [
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
    switch: [
      {
        id: 'switch',
        sections: [
          {
            id: 'core-props',
            props: [
              { id: 'onChange', inlineType: '() => void' },
              { id: 'label', inlineType: 'string' },
              { id: 'checked', inlineType: 'boolean' },
            ],
          },
          {
            id: 'visual-props',
            props: [
              {
                id: 'alignLabel',
                inlineType: "'horizontal' | 'vertical'",
                default: "'vertical'",
              },
              {
                id: 'switchSize',
                inlineType: "'xsm' | 'sm' | 'md' | 'lg' | 'xlg'",
                default: "'md'",
              },
              {
                id: 'variant',
                inlineType: "'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning'",
                default: "'default'",
              },
            ],
          },
          {
            id: 'state-props',
            props: [{ id: 'disabled', inlineType: 'boolean', default: 'false' }],
          },
          {
            id: 'advanced-props',
            props: [
              {
                id: 'trackIcon',
                blockType: `{
  checked?: { component: (props: IconPropsType) => React.JSX.Element, size?: number, color?: string },
  unchecked?: { component: (props: IconPropsType) => React.JSX.Element, size?: number, color?: string },
}`,
              },
              {
                id: 'thumbIcon',
                blockType: `{
  component: (props: IconPropsType) => React.JSX.Element,
  size?: number,
  color?: string,
}`,
              },
              { id: 'className', inlineType: 'string', default: "''" },
              { id: 'style', inlineType: 'React.CSSProperties', default: '{}' },
            ],
          },
        ],
      },
    ],
  },
  presets: {
    'social-media-card': [
      {
        id: 'social-media-card',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'music-player': [
      {
        id: 'music-player',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'statistics-cards': [
      {
        id: 'statistics-cards',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'settings-panel': [
      {
        id: 'settings-panel',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'action-buttons': [
      {
        id: 'action-buttons',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'status-indicators': [
      {
        id: 'status-indicators',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'navigation-pills': [
      {
        id: 'navigation-pills',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'quick-actions': [
      {
        id: 'quick-actions',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'weather-widget': [
      {
        id: 'weather-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'notification-cards': [
      {
        id: 'notification-cards',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'todo-list': [
      {
        id: 'todo-list',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'chat-messages': [
      {
        id: 'chat-messages',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'activity-feed': [
      {
        id: 'activity-feed',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'shopping-cart': [
      {
        id: 'shopping-cart',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'file-upload-area': [
      {
        id: 'file-upload-area',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'progress-tracker': [
      {
        id: 'progress-tracker',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'media-controls': [
      {
        id: 'media-controls',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'pricing-card': [
      {
        id: 'pricing-card',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'calendar-widget': [
      {
        id: 'calendar-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'device-status': [
      {
        id: 'device-status',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'analytics-dashboard': [
      {
        id: 'analytics-dashboard',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'contact-card': [
      {
        id: 'contact-card',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'file-manager': [
      {
        id: 'file-manager',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'quick-stats': [
      {
        id: 'quick-stats',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'mini-menu': [
      {
        id: 'mini-menu',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'notification-badges': [
      {
        id: 'notification-badges',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'profile-badge': [
      {
        id: 'profile-badge',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'time-&-location-widget': [
      {
        id: 'time-&-location-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'energy-meter': [
      {
        id: 'energy-meter',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'cryptocurrency-widget': [
      {
        id: 'cryptocurrency-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'gaming-controller-widget': [
      {
        id: 'gaming-controller-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'streak-counter': [
      {
        id: 'streak-counter',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'layer-stack-widget': [
      {
        id: 'layer-stack-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'inspiration-widget': [
      {
        id: 'inspiration-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'nature-widget': [
      {
        id: 'nature-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'reading-progress': [
      {
        id: 'reading-progress',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'idea-bulb-widget': [
      {
        id: 'idea-bulb-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'rocket-launch-widget': [
      {
        id: 'rocket-launch-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'tool-widget': [
      {
        id: 'tool-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'color-palette-widget': [
      {
        id: 'color-palette-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'system-status': [
      {
        id: 'system-status',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'pomodoro-timer': [
      {
        id: 'pomodoro-timer',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'database-widget': [
      {
        id: 'database-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'network-status': [
      {
        id: 'network-status',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'code-stats': [
      {
        id: 'code-stats',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'mouse-tracker': [
      {
        id: 'mouse-tracker',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'design-system': [
      {
        id: 'design-system',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'ai-assistant': [
      {
        id: 'ai-assistant',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'office-building-widget': [
      {
        id: 'office-building-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'team-collaboration-widget': [
      {
        id: 'team-collaboration-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'health-monitor': [
      {
        id: 'health-monitor',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'email-dashboard': [
      {
        id: 'email-dashboard',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'document-scanner': [
      {
        id: 'document-scanner',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'social-engagement': [
      {
        id: 'social-engagement',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'video-call-widget': [
      {
        id: 'video-call-widget',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'task-manager': [
      {
        id: 'task-manager',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'fitness-tracker': [
      {
        id: 'fitness-tracker',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'cloud-storage': [
      {
        id: 'cloud-storage',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'language-learning': [
      {
        id: 'language-learning',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'stock-market': [
      {
        id: 'stock-market',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'recipe-finder': [
      {
        id: 'recipe-finder',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'travel-planner': [
      {
        id: 'travel-planner',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'budget-tracker': [
      {
        id: 'budget-tracker',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'password-manager': [
      {
        id: 'password-manager',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'photo-editor': [
      {
        id: 'photo-editor',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'music-production': [
      {
        id: 'music-production',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'shopping-list': [
      {
        id: 'shopping-list',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'habit-tracker': [
      {
        id: 'habit-tracker',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
    'code-editor': [
      {
        id: 'code-editor',
        sections: [
          {
            id: 'core-props',
            props: [
              {
                id: 'children',
                inlineType: 'React.ReactNode | string',
                default: "''",
              },
            ],
          },
        ],
      },
    ],
  },
} as PropsMappingType;
