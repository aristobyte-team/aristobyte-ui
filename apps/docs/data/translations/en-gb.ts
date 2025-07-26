export const EN_GB = {
  sidebar: {
    sections: {
      components: "Component",
      "get-started": "Get started",
    },
    links: {
      button: "Button",
      card: "Card",
      spinner: "Spinner",
      installation: "Installation",
      introduction: "Introduction",
      "message-box": "Message Box",
      radio: "Radio",
      switch: "Switch",
    },
  },
  layout: {
    components: {
      button: {
        intro: {
          title: "Button",
          description:
            "Buttons allow users to perform actions and choose with a single tap.",
          links: {
            storybook: "Storybook",
            npm: "@aristobyte-ui/button",
            source: "Source",
            "style-source": "Style source",
          },
        },
        installation: {
          title: "Installation of Button",
          description:
            "The above command is for individual installation of Button only. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Button",
          description:
            "The Button component is a core interactive element in the AristoByte UI library, offering a consistent and accessible way to trigger actions. It supports multiple variants and states to align with your brand and interaction patterns. Import it as shown below to streamline call-to-action elements across your application:",
          tabs: {
            individual: "Individual",
            global: "Global",
          },
        },
        usage: {
          title: "Usage",
          description:
            "Basic implementation of the Button component using default properties. Suitable for general-purpose interactions.",
        },
        disabled: {
          title: "Disabled State",
          description:
            "Use the <b>disabled</b> prop to visually and functionally disable buttons, preventing user interaction when needed.",
        },
        sizes: {
          title: "Button Sizes",
          description:
            "The Button component supports multiple size variants to match various UI needs, from compact to full-scale buttons.",
        },
        radius: {
          title: "Border Radius",
          description:
            "Control the corner radius of buttons using predefined shape tokens or custom values for seamless UI integration.",
        },
        colors: {
          title: "Color Themes",
          description:
            "Buttons support multiple color schemes mapped to your design tokens. Ideal for conveying intent and context.",
        },
        variants: {
          title: "Button Variants",
          description:
            "Buttons can adopt different colors (e.g., <b>primary</b>, <b>secondary</b>, <b>success</b>, <b>warning</b>, <b>error</b>) to reflect status or brand semantics during loading phases.",
        },
        appearance: {
          title: "Button Appearance",
          description:
            "The <b>appearance</b> prop defines the visual style of the button surface. Choose between <b>solid</b>, <b>outline</b>, <b>outline-dashed</b>, <b>no-outline</b>, and <b>glowing</b> to adapt to different UI contexts. While <b>variant</b> conveys semantic intent (e.g., primary, success), <b>appearance</b> controls the decorative rendering layer. This allows you to decouple behavior from style and maintain a more flexible component structure.",
        },
        loading: {
          title: "Loading State",
          description:
            "The <b>isLoading</b> state provides feedback during asynchronous operations. It disables interaction and shows a spinner.",
        },
        "with-icon": {
          title: "Buttons with Icon",
          description:
            "Pass an icon component via the <b>icon.component</b> prop and choose its position with <b>icon.align</b>. Icons support both <b>left</b> and <b>right</b> alignment and can be used alongside a loading spinner. To render an <b>icon-only</b> button, simply omit the children.",
        },
        "button-group": {
          title: "Button Group",
          description:
            "Group multiple <b>Button</b> components into a single logical unit with shared styling and configuration. Use <b>ButtonGroup</b> to automatically propagate common props like <b>variant</b> and <b>size</b> across all children. Only <b>Button</b> elements are accepted as valid children, ensuring consistency and preventing unintended usage.",
        },
        "button-group-disabled": {
          title: "Disabled Button Group",
          description:
            "Apply the <b>disabled</b> prop on the <b>ButtonGroup</b> component to disable all nested buttons in a unified manner. This ensures consistent visual feedback and prevents individual interaction without modifying each button separately.",
        },
        "button-group-alignment": {
          title: "Button Group Alignment",
          description:
            "Configure the layout direction of buttons using the <b>align</b> prop. Set it to <b>horizontal</b> (default) to arrange buttons side-by-side, or <b>vertical</b> to stack them top-to-bottom. This is useful for adapting button groups to different layout contexts, such as toolbars or form actions.",
        },
        "button-group-radius": {
          title: "Button Group Radius",
          description:
            "Control the curvature of button edges within the group using the <b>radius</b> prop. Available values include <b>none</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, and <b>full</b>. This allows the group to visually align with the overall interface shape semantics, especially in rounded or sharp UI layouts.",
        },
        "button-group-size": {
          title: "Button Group Size",
          description:
            "The <b>size</b> prop defines the uniform sizing of all buttons within the group. Choose from <b>xsm</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, or <b>xlg</b> to ensure spatial consistency and scalability across various UI breakpoints or interaction densities.",
        },
        "button-group-variant": {
          title: "Button Group Variant",
          description:
            "Utilize the <b>variant</b> prop to apply consistent styling across all grouped buttons. Supported variants include <b>default</b>, <b>primary</b>, <b>secondary</b>, <b>success</b>, <b>error</b>, and <b>warning</b>, offering design cohesion for critical and contextual actions.",
        },
      },
      card: {
        intro: {
          title: "Card",
          description:
            "Cards are flexible containers used to group related content, actions, and visuals. The AristoByte UI Card components provide a clean, responsive foundation for dashboards, lists, media previews, and more. Designed with composability in mind, they support headers, footers, and custom layouts to adapt to any use case.",
          links: {
            storybook: "Storybook",
            npm: "@aristobyte-ui/card",
            source: "Source",
            "style-source": "Style source",
          },
        },
        installation: {
          title: "Installation of Card",
          description:
            "The above command is for individual installation of Card only. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Card",
          description:
            "The Card component is part of the AristoByte UI library—a modular design system built for consistency and scalability across your applications. Use the import below to access a reusable, fully encapsulated UI element that adheres to your design and development standards.",
          tabs: {
            individual: "Individual",
            global: "Global",
          },
        },
      },
      home: {
        intro: {
          title: "AristoByte UI - A Scalable, Design-Driven Component System",
          description:
            "AristoByte UI is a forward-thinking component library engineered for performance, consistency, and maintainability. Built with TypeScript and SCSS, it empowers developers to rapidly build modern UIs with a clean architecture, reusable patterns, and first-class DX across web and mobile platforms.",
          links: {
            storybook: "Storybook",
            npm: "@aristobyte-ui",
            source: "Source",
            "style-source": "Style source",
          },
        },
        installation: {
          title: "Install AristoByte UI - Get Started in Seconds",
          description:
            "Seamlessly integrate AristoByte UI into your project using your preferred package manager. Whether you use Yarn, npm, or pnpm, installation is straightforward and fast. Choose your tooling tab below and run the command to unlock a powerful, modular component system optimized for scale.",
        },
        import: {
          title: "Import",
          description:
            "Each component in the AristoByte UI library is designed for seamless integration, offering clean abstractions and consistent styling across your application. To start using any component, simply import it directly from the package entry point. This approach ensures modularity and eliminates unnecessary bundle weight while maintaining a standardized development experience.",
          tabs: {
            individual: "Individual",
            global: "Global",
          },
        },
      },
      spinner: {
        intro: {
          title: "Spinner",
          description:
            "Spinners indicate loading or ongoing processes, keeping users informed while the system completes background tasks.",
          links: {
            storybook: "Storybook",
            npm: "@aristobyte-ui/spinner",
            source: "Source",
            "style-source": "Style source",
          },
        },
        installation: {
          title: "Installation of Spinner",
          description:
            "The above command installs the Spinner component individually. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Spinner",
          description:
            "The Spinner component provides visual feedback for asynchronous actions, improving user awareness of system state. Import it as shown below to seamlessly integrate it into loading workflows:",
          tabs: {
            individual: "Individual",
            global: "Global",
          },
        },
        usage: {
          title: "Usage",
          description:
            "Basic implementation of the Spinner component using default settings. Ideal for showcasing loading states in minimal interfaces.",
        },
        types: {
          title: "Spinner Types",
          description:
            "AristoByte UI offers five spinner types — <b>default</b>, <b>duo</b>, <b>gradient</b>, <b>pulse</b>, and <b>pulse-duo</b>. Each type provides a distinct animation style suited for different loading scenarios, from inline feedback to full-screen blocking loaders.",
        },
        variants: {
          title: "Spinner Variants",
          description:
            "Spinners can adopt different colors (e.g., <b>default</b>, <b>primary</b>, <b>secondary</b>, <b>success</b>, <b>warning</b>, <b>error</b>) to reflect status or brand semantics during loading phases.",
        },
        sizes: {
          title: "Spinner Sizes",
          description:
            "The Spinner component supports five predefined sizes — <b>xsm</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, and <b>xlg</b> — enabling consistent integration across interface hierarchies. From inline loaders to full-screen indicators, choose the size that best fits the UI context.",
        },
      },
      "message-box": {
        intro: {
          title: "Message Box",
          description:
            "Message Boxes provide contextual system feedback for user actions, conveying information, warnings, errors, or success states with clarity and emphasis.",
          links: {
            storybook: "Storybook",
            npm: "@aristobyte-ui/message-box",
            source: "Source",
            "style-source": "Style source",
          },
        },
        installation: {
          title: "Installation of Message Box",
          description:
            "The above command installs the Message Box component individually. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Message Box",
          description:
            "The Message Box component delivers user-facing alerts with semantic clarity and visual consistency. Import it as shown below to streamline notification delivery in your application:",
          tabs: {
            individual: "Individual",
            global: "Global",
          },
        },
        usage: {
          title: "Usage",
          description:
            "Basic implementation of the Message Box component using default props. Ideal for inline status alerts and persistent feedback across layouts.",
        },
        variants: {
          title: "Message Box Variants",
          description:
            "AristoByte UI supports various message box types including <b>info</b>, <b>success</b>, <b>warning</b>, and <b>error</b>. Each type maps to a specific context and visual tone, ensuring users immediately understand the nature of the message.",
        },
        types: {
          title: "Message Box Types",
          description:
            "Choose between <b>solid</b>, <b>outline</b>, <b>outline-dashed</b>, <b>no-outline</b> and <b>glowing</b> styles to align with your UI aesthetic and message urgency. Variants control emphasis and contrast for better UX alignment.",
        },
        radius: {
          title: "Message Box Radius",
          description:
            "Control the border curvature of the Message Box using predefined radius values — <b>none</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, and <b>full</b>. This allows for seamless adaptation to different UI aesthetics, whether you're aiming for sharp, modern edges or fully rounded surfaces.",
        },
        "without-icon": {
          title: "Message Box Without Icon",
          description:
            "A minimal version of the message box component that omits the icon by default. The <b>withIcon</b> prop is set to <b>false</b> unless explicitly enabled, offering a cleaner layout when visual indicators are unnecessary.",
        },
      },
      switch: {
        intro: {
          title: "Switch",
          description:
            "Switch toggles are interactive binary controls used for enabling or disabling a specific option. Ideal for settings, preferences, and form controls, the Switch component ensures clear, intuitive state management.",
          links: {
            storybook: "Storybook",
            npm: "@aristobyte-ui/switch",
            source: "Source",
            "style-source": "Style source",
          },
        },
        installation: {
          title: "Installation of Switch",
          description:
            "The above command installs the Switch component individually. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Switch",
          description:
            "You can import the Switch component either as a standalone module or from the global AristoByteUI package. The import method depends on how your project structure is configured.",
          tabs: {
            individual: "Individual",
            global: "Global",
          },
        },
        usage: {
          title: "Usage",
          description:
            "Basic implementation of the Switch component with optional label and controlled state. Suitable for toggling boolean states in forms, settings panels, and interactive UIs.",
        },
        labeled: {
          title: "Labeled Switch",
          description:
            "Pass a text string using the <b>label</b> prop to display a caption alongside the Switch component. This label improves clarity and accessibility, making it easier for users to understand the function being toggled. It's especially effective in form fields, settings panels, or anywhere context is needed.",
        },
        disabled: {
          title: "Disabled",
          description:
            "The <b>disabled</b> prop visually disables the switch, indicating that it cannot be interacted with by the user. While the switch becomes non-clickable, it can still reflect a <b>checked</b> or <b>unchecked</b> state, allowing developers to communicate a specific status that remains static. This is particularly useful in read-only contexts or in UI flows where toggling is conditionally locked, but the user still needs to observe the current value. Disabled switches maintain their configured <b>variant</b>, <b>size</b>, and <b>label</b> alignment.",
        },
        "align-label": {
          title: "Align Label",
          description:
            "The <b>alignLabel</b> prop allows you to control the positioning of the label relative to the switch thumb. Supported values are <b>horizontal</b> and <b>vertical</b>. The default behavior is <b>vertical</b>, placing the label above or below the switch depending on styling. Use <b>horizontal</b> when you want the label to be inline with the switch for compact layouts.",
        },
        variants: {
          title: "Switch Variants",
          description:
            "The Switch component supports multiple color variants such as <b>default</b>, <b>primary</b>, <b>secondary</b>, <b>success</b>, <b>error</b>, and <b>warning</b>. These variants reflect the intent of the toggle action and align with your application's color semantics.",
        },
        sizes: {
          title: "Switch Sizes",
          description:
            "The Switch component comes in five scalable sizes — <b>xsm</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, and <b>xlg</b>. These sizes provide layout flexibility and can be adapted to match form densities, mobile-first designs, or compact UI patterns.",
        },
        checked: {
          title: "Initially Checked",
          description:
            "Use the <b>checked</b> prop to define the initial on/off state of the Switch. When set to <b>true</b>, the switch renders in the active (checked) state on initial mount. This prop is ideal for controlled or semi-controlled usage patterns, particularly in form presets and settings UIs.",
        },
        controlled: {
          title: "Controlled Switch",
          description:
            "The controlled version of the <b>Switch</b> component offers explicit control over its state using React state management. This pattern ensures that the <b>checked</b> value is fully managed by the parent component via <code>useState</code> and updated through the <b>onChange</b> callback. It's particularly useful when you need to synchronize the switch state with business logic, form handlers, or other UI elements.",
        },
        "track-icon": {
          title: "Track Icons",
          description:
            "The <b>trackIcon</b> prop enables the display of icons within the switch track itself, offering enhanced visual context for toggled states. You can define icons for both <b>checked</b> and <b>unchecked</b> states by passing a config object like <code>{ checked: IconOn, unchecked: IconOff }</code>. These icons render respectively on the left and right sides of the track. It's optional—providing only one or none is fully supported. This feature is useful for reinforcing switch semantics such as enabling/disabling, visibility toggles, and more.",
        },
        "thumb-icon": {
          title: "Thumb Icon",
          description:
            "The <b>thumbIcon</b> prop allows you to inject a custom icon directly into the switch's thumb element, offering a more expressive and branded interaction model. This prop accepts a single <code>React.ElementType</code> and renders the icon inside the movable thumb regardless of its state. It's ideal for use cases where a consistent icon (e.g., a power symbol, lock, or eye) enhances the user's understanding of the control. If omitted, the thumb renders without any icon by default.",
        },
      },
      radio: {
        intro: {
          title: "Radio",
          description:
            "A component for selecting a single option from a predefined set. <b>Radio</b> and <b>RadioGroup</b> provide a flexible foundation for building accessible, customizable choice interfaces in forms or filters.",
          links: {
            storybook: "Storybook",
            npm: "@aristobyte-ui/radio",
            source: "Source",
            "style-source": "Style source",
          },
        },
        installation: {
          title: "Installation of Radio",
          description:
            "The above command installs the Radio component individually. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Radio",
          description:
            "You can either import <b>Radio</b> and <b>RadioGroup</b> directly from the package or rely on a global import setup. Both approaches ensure consistent and scoped styling.",
          tabs: {
            individual: "Individual",
            global: "Global",
          },
        },
        usage: {
          title: "Usage",
          description:
            "This example showcases a typical implementation of the <b>RadioGroup</b> component with multiple <b>Radio</b> children. The <b>value</b> prop defines the selected option, while the <b>disabled</b> prop disables interaction across all radios in the group. Each <b>Radio</b> receives its label via the <b>children</b> prop.",
        },
        disabled: {
          title: "Disabled",
          description:
            "When the <b>disabled</b> prop is applied to the <b>RadioGroup</b>, it cascades to all nested <b>Radio</b> components, making them non-interactive. Even in a disabled state, radios can still reflect a <b>checked</b> value, preserving visual selection without allowing user interaction.",
        },
      },
    },
  },
  codePreview: {
    code: "Code",
    preview: "Preview",
  },
};
