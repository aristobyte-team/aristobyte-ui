export const EN_GB = {
  sidebar: {
    sections: {
      components: "Component",
      presets: "Presets",
      "get-started": "Get started",
    },
    links: {
      button: "Button",
      card: "Card",
      dropdown: "Dropdown",
      spinner: "Spinner",
      installation: "Installation",
      introduction: "Introduction",
      "message-box": "Message Box",
      radio: "Radio",
      switch: "Switch",
      "social-media-card": "Social Media Card",
      "music-player": "Music Player",
      "statistics-cards": "Statistics Cards",
      "settings-panel": "Settings Panel",
      "action-buttons": "Action Buttons",
      "status-indicators": "Status Indicators",
      "navigation-pills": "Navigation Pills",
      "quick-actions": "Quick Actions",
      "weather-widget": "Weather Widget",
      "notification-cards": "Notification Cards",
      "todo-list": "Todo List",
      "chat-messages": "Chat Messages",
      "activity-feed": "Activity Feed",
      "shopping-cart": "Shopping Cart",
      "file-upload-area": "File Upload Area",
      "progress-tracker": "Progress Tracker",
      "media-controls": "Media Controls",
      "pricing-card": "Pricing Card",
      "calendar-widget": "Calendar Widget",
      "device-status": "Device Status",
      "analytics-dashboard": "Analytics Dashboard",
      "contact-card": "Contact Card",
      "file-manager": "File Manager",
      "quick-stats": "Quick Stats",
      "mini-menu": "Mini Menu",
      "notification-badges": "Notification Badges",
      "profile-badge": "Profile Badge",
      "time-&-location-widget": "Time & Location Widget",
      "energy-meter": "Energy Meter",
      "cryptocurrency-widget": "Cryptocurrency Widget",
      "gaming-controller-widget": "Gaming Controller Widget",
      "streak-counter": "Streak Counter",
      "layer-stack-widget": "Layer Stack Widget",
      "inspiration-widget": "Inspiration Widget",
      "nature-widget": "Nature Widget",
      "reading-progress": "Reading Progress",
      "idea-bulb-widget": "Idea Bulb Widget",
      "rocket-launch-widget": "Rocket Launch Widget",
      "tool-widget": "Tool Widget",
      "color-palette-widget": "Color Palette Widget",
      "system-status": "System Status",
      "pomodoro-timer": "Pomodoro Timer",
      "database-widget": "Database Widget",
      "network-status": "Network Status",
      "code-stats": "Code Stats",
      "mouse-tracker": "Mouse Tracker",
      "design-system": "Design System",
      "ai-assistant": "AI Assistant",
      "office-building-widget": "Office Building Widget",
      "team-collaboration-widget": "Team Collaboration Widget",
      "health-monitor": "Health Monitor",
      "email-dashboard": "Email Dashboard",
      "document-scanner": "Document Scanner",
      "social-engagement": "Social Engagement",
      "video-call-widget": "Video Call Widget",
      "task-manager": "Task Manager",
      "fitness-tracker": "Fitness Tracker",
      "cloud-storage": "Cloud Storage",
      "language-learning": "Language Learning",
      "stock-market": "Stock Market",
      "recipe-finder": "Recipe Finder",
      "travel-planner": "Travel Planner",
      "budget-tracker": "Budget Tracker",
      "password-manager": "Password Manager",
      "photo-editor": "Photo Editor",
      "music-production": "Music Production",
      "shopping-list": "Shopping List",
      "habit-tracker": "Habit Tracker",
      "code-editor": "Code Editor",
    },
  },
  layout: {
    "intro-links": {
      source: "Source",
    },
    "import-tabs": {
      individual: "Individual",
      global: "Global",
    },
    codePreview: {
      code: "Code",
      preview: "Preview",
    },
    components: {
      button: {
        intro: {
          title: "Button",
          description:
            "Buttons allow users to perform actions and choose with a single tap.",
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
        },
      },
      home: {
        intro: {
          title: "AristoByte UI - A Scalable, Design-Driven Component System",
          description:
            "AristoByte UI is a forward-thinking component library engineered for performance, consistency, and maintainability. Built with TypeScript and SCSS, it empowers developers to rapidly build modern UIs with a clean architecture, reusable patterns, and first-class DX across web and mobile platforms.",
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
        },
      },
      spinner: {
        intro: {
          title: "Spinner",
          description:
            "Spinners indicate loading or ongoing processes, keeping users informed while the system completes background tasks.",
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
            "A component for selecting a single option from a predefined set. <code>Radio</code> and <code>RadioGroup</code> provide a flexible foundation for building accessible, customizable choice interfaces in forms or filters.",
        },
        installation: {
          title: "Installation of Radio",
          description:
            "The above command installs the Radio component individually. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Radio",
          description:
            "You can either import <code>Radio</code> and <code>RadioGroup</code> directly from the package or rely on a global import setup. Both approaches ensure consistent and scoped styling.",
        },
        usage: {
          title: "Usage",
          description:
            "This example showcases a typical implementation of the <code>RadioGroup</code> component with multiple <code>Radio</code> children. The <b>value</b> prop defines the selected option, while the <b>disabled</b> prop disables interaction across all radios in the group. Each <code>Radio</code> receives its label via the <b>children</b> prop.",
        },
        disabled: {
          title: "Disabled",
          description:
            "When the <b>disabled</b> prop is applied to the <code>RadioGroup</code>, it cascades to all nested <code>Radio</code> components, making them non-interactive. Even in a disabled state, radios can still reflect a <b>checked</b> value, preserving visual selection without allowing user interaction. You may also define <b>disabled</b> at the <code>Radio</code> level for more granular control—individual definitions take precedence.",
        },
        sizes: {
          title: "Sizes",
          description:
            "The <b>size</b> prop defines the scale of the radio control and its label. Available options include <b>xsm</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, and <b>xlg</b>, giving developers flexibility to match component sizing with typography, spacing, and layout needs. The default size is <b>md</b>. This prop can be defined on both <code>RadioGroup</code> and <code>Radio</code>, with the latter taking priority when both are present.",
        },
        variants: {
          title: "Variants",
          description:
            "The <b>variant</b> prop determines the visual styling of the radio control, allowing it to adapt to various semantic contexts or UI themes. Available values include <b>default</b>, <b>primary</b>, <b>secondary</b>, <b>success</b>, <b>error</b>, and <b>warning</b>. These variants typically map to predefined color tokens and help ensure design consistency across components. If not defined, the <b>default</b> style is applied. You may pass this prop to <code>RadioGroup</code> or to individual <code>Radio</code> components, where the latter will override inherited group values.",
        },
        appearance: {
          title: "Appearance",
          description:
            "The <b>appearance</b> prop defines the visual structure of the radio's outline and its interaction state feedback. Available values include <b>solid</b>, <b>outline</b>, <b>outline-dashed</b>, <b>no-outline</b>, and <b>glowing</b>. By default, the radio adopts the <b>outline</b> appearance. Each variant provides a distinct visual tone—ranging from minimalist (<b>no-outline</b>) to expressive (<b>glowing</b>)—allowing precise alignment with your product's design language. This prop is supported on both <code>RadioGroup</code> and <code>Radio</code>; however, direct <code>Radio</code> definitions take precedence.",
        },
        "highlight-label": {
          title: "Highlight Label",
          description:
            "Enables the label to inherit the active <b>variant</b> color when <b>highlightLabel</b> is set to <b>true</b>. This enhances visual association between the label and the selected theme. When <b>false</b> (default), the label color remains neutral or white. The prop can be used on <code>RadioGroup</code> to apply it broadly, but <code>Radio</code>-level values override group-level settings.",
        },
        "radio-group-align": {
          title: "Align Radios",
          description:
            "The <b>align</b> prop controls the directional layout of the <code>Radio</code> components within the <code>RadioGroup</code>. By default, radios are stacked <b>vertical</b>, but you can switch to a <b>horizontal</b> layout for more compact or inline presentations. Alignment can also be defined per <code>Radio</code> component, which overrides the group alignment if both are defined.",
        },
        "align-label": {
          title: "Align Label",
          description:
            "The <b>alignLabel</b> prop allows fine-tuned control over the label's position relative to the radio control. It accepts <b>top</b>, <b>right</b>, <b>bottom</b>, or <b>left</b>, with <b>bottom</b> being the default. This prop can be applied to both <code>Radio</code> and <code>RadioGroup</code>, but individual <code>Radio</code> components take precedence when both are defined.",
        },
        controlled: {
          title: "Controlled Radios",
          description:
            "A controlled <b>RadioGroup</b> allows full external control over the selected value using React state. By passing a dynamic <code>value</code> and <code>onChange</code> handler—typically derived from <code>useState</code>—you ensure the radio selection is synchronized with the component’s state lifecycle. This pattern is ideal for form integrations, live previews, and data-bound interfaces where UI must reflect application state in real time.",
        },
      },
      dropdown: {
        intro: {
          title: "Dropdown",
          description:
            "Dropdowns enable users to select a single option from a contextual list. It's a compact, flexible UI pattern ideal for filters, forms, and segmented controls.",
        },
        installation: {
          title: "Installation of Dropdown",
          description:
            "The above command is for individual installation of Dropdown only. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Dropdown",
          description:
            "The Dropdown component provides a minimal yet accessible selection UI for various use cases. It supports dynamic options, disabled states, and custom styling. Import it as shown below to enrich your data selection flows:",
        },
        usage: {
          title: "Usage",
          description:
            "Basic implementation of the Dropdown component in a controlled setup. Ideal for collecting selections or filtering content contextually.",
        },
        disabled: {
          title: "Disabled",
          description:
            "Demonstrates a <b>Dropdown</b> component in a <b>disabled</b> state. All options and interactions are inactive, ensuring that users cannot modify the selection.",
        },
        appearance: {
          title: "Appearance",
          description:
            "Illustrates all available <b>Dropdown</b> <b>appearances</b> — <b>solid</b>, <b>glowing</b>, <b>outline</b>, <b>outline-dashed</b>, <b>no-outline</b> — across variants (<b>default</b>, <b>primary</b>, <b>secondary</b>, <b>success</b>, <b>error</b>, <b>warning</b>). Useful for visual reference and styling consistency. Use <b>variant</b> to convey semantic intent, while <b>appearance</b> controls decorative rendering.",
        },
      },
    },
    presets: {
      "social-media-card": {
        intro: {
          title: "Social Media Card",
          description:
            "The <b>Social Media Card</b> preset provides a modular content block for displaying user profiles, posts, or activity snippets. Designed for engagement-driven UIs, it supports avatars, metadata, and action buttons to replicate modern social feed interactions.",
        },
        installation: {
          title: "Installation of Social Media Card",
          description:
            "Install the <b>Social Media Card</b> preset individually using the command above. You may skip this step if <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Social Media Card",
          description:
            "Import the <b>Social Media Card</b> from the AristoByte UI package to rapidly integrate feed-like layouts into your application. Its composable design allows easy extension with comments, likes, and sharing controls.",
        },
        usage: {
          title: "Usage",
          description:
            "Basic implementation of the <b>SocialMediaCard</b> component. Showcases a profile with <b>title</b>, <b>subtitle</b>, <b>description</b>, and optional <b>metrics</b>, <b>media</b>, and <b>tags</b>.",
        },
        disabled: {
          title: "Disabled",
          description:
            "Demonstrates the <b>SocialMediaCard</b> in a <b>disabled</b> state. Interactions such as the action <b>button</b> are inactive, preventing any user actions.",
        },
      },
      "music-player": {
        intro: {
          title: "Music Player",
          description:
            "The <b>Music Player</b> preset delivers an embedded audio playback interface with controls for play, pause, skip, and volume. Tailored for media-centric applications, it ensures accessibility and responsive interaction patterns.",
        },
        installation: {
          title: "Installation of Music Player",
          description:
            "Install the <b>Music Player</b> preset individually. This step can be skipped if <b>@aristobyte-ui</b> is already available globally.",
        },
        import: {
          title: "Import Music Player",
          description:
            "Bring the <b>Music Player</b> component into your project to offer users direct control over audio content. The preset ships with adaptive styling for mobile and desktop breakpoints.",
        },
      },
      "statistics-cards": {
        intro: {
          title: "Statistics Cards",
          description:
            "The <b>Statistics Cards</b> preset enables at-a-glance metrics display. Ideal for dashboards and analytics, each card showcases key KPIs with clear typography, icons, and contextual coloring.",
        },
        installation: {
          title: "Installation of Statistics Cards",
          description:
            "Install the <b>Statistics Cards</b> preset individually if not already included in the global <b>@aristobyte-ui</b> package.",
        },
        import: {
          title: "Import Statistics Cards",
          description:
            "Import <b>Statistics Cards</b> into your dashboard to provide users with concise, visually distinct data summaries. Cards can be customized with icons, variants, and sizing props.",
        },
      },
      "settings-panel": {
        intro: {
          title: "Settings Panel",
          description:
            "The <b>Settings Panel</b> preset organizes configuration options into a clean, intuitive interface. Perfect for account preferences, system settings, or feature toggles.",
        },
        installation: {
          title: "Installation of Settings Panel",
          description:
            "Install the <b>Settings Panel</b> preset individually. Skip this step if <b>@aristobyte-ui</b> is installed globally.",
        },
        import: {
          title: "Import Settings Panel",
          description:
            "Import the <b>Settings Panel</b> into your application to centralize user configuration. It supports nested controls, switches, and contextual grouping for clarity.",
        },
      },
      "action-buttons": {
        intro: {
          title: "Action Buttons",
          description:
            "The <b>Action Buttons</b> preset provides a collection of quick-access controls designed for contextual actions. Ideal for toolbars, card footers, and floating action layouts.",
        },
        installation: {
          title: "Installation of Action Buttons",
          description:
            "Install the <b>Action Buttons</b> preset individually. You may skip if <b>@aristobyte-ui</b> is already part of your project.",
        },
        import: {
          title: "Import Action Buttons",
          description:
            "Import <b>Action Buttons</b> into your UI to streamline repetitive tasks and enable consistent call-to-action placement. Compatible with all button variants and appearances.",
        },
      },
      "status-indicators": {
        intro: {
          title: "Status Indicators",
          description:
            "The <b>Status Indicators</b> preset provides lightweight visual signals to communicate state, availability, or progress. Commonly used in dashboards, chat presence, or device monitors.",
        },
        installation: {
          title: "Installation of Status Indicators",
          description:
            "Install the <b>Status Indicators</b> preset individually if needed. Otherwise, use the globally available version from <b>@aristobyte-ui</b>.",
        },
        import: {
          title: "Import Status Indicators",
          description:
            "Import <b>Status Indicators</b> to enrich your UI with semantic feedback. Supports color variants and size scaling for adaptive integration.",
        },
      },
      "navigation-pills": {
        intro: {
          title: "Navigation Pills",
          description:
            "The <b>Navigation Pills</b> preset offers a compact tab-like navigation system styled as rounded pills. It is ideal for segmenting content categories or toggling views.",
        },
        installation: {
          title: "Installation of Navigation Pills",
          description:
            "Install the <b>Navigation Pills</b> preset individually. Skip if <b>@aristobyte-ui</b> is already available globally.",
        },
        import: {
          title: "Import Navigation Pills",
          description:
            "Import <b>Navigation Pills</b> to enable users to switch between grouped sections. Variants allow semantic styling and highlight current selection.",
        },
      },
      "quick-actions": {
        intro: {
          title: "Quick Actions",
          description:
            "The <b>Quick Actions</b> preset consolidates a set of commonly performed tasks into an easily accessible UI cluster. Perfect for contextual shortcuts in productivity tools.",
        },
        installation: {
          title: "Installation of Quick Actions",
          description:
            "Install the <b>Quick Actions</b> preset individually, unless already included via the global <b>@aristobyte-ui</b> package.",
        },
        import: {
          title: "Import Quick Actions",
          description:
            "Import <b>Quick Actions</b> to provide users with rapid entry points to frequent workflows. Supports icons, tooltips, and grouped layouts.",
        },
      },
      "weather-widget": {
        intro: {
          title: "Weather Widget",
          description:
            "The <b>Weather Widget</b> preset surfaces real-time weather insights in a compact, card-based format. It integrates temperature, condition icons, and location context.",
        },
        installation: {
          title: "Installation of Weather Widget",
          description:
            "Install the <b>Weather Widget</b> preset individually, unless <b>@aristobyte-ui</b> is already installed globally.",
        },
        import: {
          title: "Import Weather Widget",
          description:
            "Import <b>Weather Widget</b> into your application to provide environmental context. Supports location-based customization and unit switching.",
        },
      },
      "notification-cards": {
        intro: {
          title: "Notification Cards",
          description:
            "The <b>Notification Cards</b> preset provides structured alert blocks for delivering contextual updates. Perfect for activity feeds, dashboards, or inbox-like UIs.",
        },
        installation: {
          title: "Installation of Notification Cards",
          description:
            "Install the <b>Notification Cards</b> preset individually. Skip this step if <b>@aristobyte-ui</b> is globally available.",
        },
        import: {
          title: "Import Notification Cards",
          description:
            "Import <b>Notification Cards</b> to surface time-sensitive messages with consistent styling and hierarchy. Configurable with icons and action buttons.",
        },
      },
    },
  },
};
