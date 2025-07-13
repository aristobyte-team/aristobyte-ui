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
    Appearance: `import * as React from "react";
import { Button } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="default">
          Solid
        </Button>
        <Button appearance="glowing" variant="default">
          Glowing
        </Button>
        <Button appearance="outline" variant="default">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="default">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="default">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="primary">
          Solid
        </Button>
        <Button appearance="glowing" variant="primary">
          Glowing
        </Button>
        <Button appearance="outline" variant="primary">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="primary">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="primary">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="secondary">
          Solid
        </Button>
        <Button appearance="glowing" variant="secondary">
          Glowing
        </Button>
        <Button appearance="outline" variant="secondary">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="secondary">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="secondary">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="error">
          Solid
        </Button>
        <Button appearance="glowing" variant="error">
          Glowing
        </Button>
        <Button appearance="outline" variant="error">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="error">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="error">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="warning">
          Solid
        </Button>
        <Button appearance="glowing" variant="warning">
          Glowing
        </Button>
        <Button appearance="outline" variant="warning">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="warning">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="warning">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="success">
          Solid
        </Button>
        <Button appearance="glowing" variant="success">
          Glowing
        </Button>
        <Button appearance="outline" variant="success">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="success">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="success">
          No-Outline
        </Button>
      </div>
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
    ButtonGroup: `import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <ButtonGroup radius="full">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
}`,
    ButtonGroupDisabled: `import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <ButtonGroup radius="full" disabled>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
}`,
    ButtonGroupAlignment: `import * as React from "react";
import { Button, ButtonGroup} from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonGroup radius="full" align="horizontal">
        <Button>Horizontal Button 1</Button>
        <Button>Horizontal Button 2</Button>
        <Button>Horizontal Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" align="vertical">
        <Button>Vertical Button 1</Button>
        <Button>Vertical Button 2</Button>
        <Button>Vertical Button 3</Button>
      </ButtonGroup>
    </div>
  );
}`,
    ButtonGroupRadius: `import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonGroup radius="none">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="sm">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="md">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="lg">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
}`,
    ButtonGroupSize: `import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonGroup radius="full" size="xsm">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="sm">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="md">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="lg">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="xlg">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
}`,
    ButtonGroupVariant: `import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonGroup radius="full" variant="default">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" variant="primary">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" variant="secondary">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" variant="error">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" variant="warning">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" variant="success">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
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
  MessageBox: {
    Usage: `import * as React from "react";
import { MessageBox } from "@aristobyte-ui";

export default function App() {
  return <MessageBox withIcon>Default message box</MessageBox>;
}`,
    Types: `import * as React from "react";
import { MessageBox } from "@aristobyte-ui";

export const Types = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <MessageBox variant="success" withIcon type="solid">
        Solid message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="glowing">
        Glowing message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="outline">
        Outline message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="outline-dashed">
        Dotted outline message box type
      </MessageBox>
      <MessageBox variant="success" withIcon type="no-outline">
        No-outline message box type
      </MessageBox>
    </div>
  );
}`,
    Variants: `import * as React from "react";
import { MessageBox } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <MessageBox withIcon>Default message box</MessageBox>
      <MessageBox variant="info" withIcon>Info message box</MessageBox>
      <MessageBox variant="warning" withIcon>Warning message box</MessageBox>
      <MessageBox variant="success" withIcon>Success message box</MessageBox>
      <MessageBox variant="error" withIcon>Error message box</MessageBox>
    </div>
  );
}`,
    Radius: `import * as React from "react";
import { MessageBox } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <MessageBox withIcon radius="none">No radius</MessageBox>
      <MessageBox withIcon radius="sm">Small radius</MessageBox>
      <MessageBox withIcon radius="md">Medium radius</MessageBox>
      <MessageBox withIcon radius="lg">Large radius</MessageBox>
      <MessageBox withIcon radius="full">Full radius</MessageBox>
    </div>
  );
}`,
    WithoutIcon: `import * as React from "react";
import { MessageBox } from "@aristobyte-ui";

export const WithoutIcon = () => {
  return <MessageBox>Message box without icon</MessageBox>;
}`,
  },
};
