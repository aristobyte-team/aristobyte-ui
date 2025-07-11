export const CodeBlocks = {
  Import: (componentsToImport: string[], path: string = "") =>
    `import { ${componentsToImport.join(", ")} } from "@aristobyte-ui${path}";`,
  Button: {
    Usage: `import { Button } from "@aristobyte-ui";

export default function App() {
  return <Button variant="primary">Button</Button>;
}`,
    Disabled: `import { Button } from "@aristobyte-ui";

export default function App() {
  return <Button variant="primary" disabled>Button</Button>;
}`,
    Sizes: `import { Button } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" size="xsm">
        Button
      </Button>
      <Button variant="primary" size="sm">
        Button
      </Button>
      <Button variant="primary" size="md">
        Button
      </Button>
      <Button variant="primary" size="lg">
        Button
      </Button>
      <Button variant="primary" size="xlg">
        Button
      </Button>
    </div>
  );
}`,
    Radius: `import * as React from "react";
import { Button } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" radius="none">
        None
      </Button>
      <Button variant="primary" radius="sm">
        Small
      </Button>
      <Button variant="primary" radius="md">
        Medium
      </Button>
      <Button variant="primary" radius="lg">
        Large
      </Button>
      <Button variant="primary" radius="full">
        Full
      </Button>
    </div>
  );
}`,
    Variants: `import * as React from "react";
import { Button } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
    </div>
  );
}`,
    Loading: `import * as React from "react";
import { Button } from "@aristobyte-ui";

export const Loading = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" isLoading spinnerType="default">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="duo">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="gradient">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="pulse">
        Loading
      </Button>
      <Button variant="primary" isLoading spinnerType="pulse-duo">
        Loading
      </Button>
    </div>
  );
}`,
    WithIcon: `import * as React from "react";
import { Button } from "@aristobyte-ui";

const GiftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" icon={{ component: GiftIcon, align: "left" }}>
        Button
      </Button>
      <Button variant="secondary" icon={{ component: GiftIcon, align: "left" }}>
        Button
      </Button>
      <Button
        isLoading
        variant="primary"
        icon={{ component: GiftIcon, align: "left" }}
      >
        Button
      </Button>
      <Button
        isLoading
        variant="secondary"
        icon={{ component: GiftIcon, align: "right" }}
      >
        Button
      </Button>
    </div>
  );
}`,
  },
  Spinner: {
    Usage: `import * as React from "react";
import { Spinner } from "@aristobyte-ui";

export default function App() {
  return <Spinner variant="primary" />;
}`,
    Sizes: `import * as React from "react";
import { Spinner } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Spinner variant="primary" size="xsm" />
      <Spinner variant="primary" size="sm" />
      <Spinner variant="primary" size="md" />
      <Spinner variant="primary" size="lg" />
      <Spinner variant="primary" size="xlg" />
    </div>
  );
}`,
    Types: `import * as React from "react";
import { Spinner } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Spinner variant="primary" type="default" />
      <Spinner variant="primary" type="duo" />
      <Spinner variant="primary" type="gradient" />
      <Spinner variant="primary" type="pulse" />
      <Spinner variant="primary" type="pulse-duo" />
    </div>
  );
}`,
    Variants: `import * as React from "react";
import { Spinner } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Spinner />
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="error" />
      <Spinner variant="warning" />
      <Spinner variant="success" />
    </div>
  );
}`,
  },
};
