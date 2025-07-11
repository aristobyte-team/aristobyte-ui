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
        loading: {
          title: "Loading State",
          description:
            "The <b>isLoading</b> state provides feedback during asynchronous operations. It disables interaction and shows a spinner.",
        },
        "with-icons": {
          title: "Buttons with Icons",
          description:
            "Combine buttons with icons for better visual guidance. Icons can be placed before or after the label.",
        },
        "icons-only": {
          title: "Icon-Only Buttons",
          description:
            "Icon-only buttons are used for space-efficient UIs. Ensure accessibility by using `aria-label` or <b>title</b>.",
        },
        "custom-styles": {
          title: "Custom Styles",
          description:
            "Use the <b>className</b> prop or override theme tokens to customize button styling for specific design use cases.",
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
    },
  },
  codePreview: {
    code: "Code",
    preview: "Preview",
  },
};
