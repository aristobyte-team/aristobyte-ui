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

export default function App() {
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

export default function App() {
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

export default function App() {
  return <MessageBox>Message box without icon</MessageBox>;
}`,
  },
  Switch: {
    Checked: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Switch variant="primary" label="Not checked" />
      <Switch variant="primary" label="Checked" checked />
    </div>
  );
}`,
    Usage: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  return <Switch />;
}`,
    Variants: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Switch variant="default" checked label="Default" />
      <Switch variant="primary" checked label="Primary" />
      <Switch variant="secondary" checked label="Secondary" />
      <Switch variant="error" checked label="Error" />
      <Switch variant="warning" checked label="Warning" />
      <Switch variant="success" checked label="Success" />
    </div>
  );
}`,
    Sizes: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Switch variant="success" checked switchSize="xsm" label="Extra small" />
      <Switch variant="success" checked switchSize="sm" label="Small" />
      <Switch variant="success" checked switchSize="md" label="Medium" />
      <Switch variant="success" checked switchSize="lg" label="Large" />
      <Switch variant="success" checked switchSize="xlg" label="Extra large" />
    </div>
  );
};
`,
    Labeled: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  return <Switch variant="secondary" label="I am switch!" />;
}`,
    Disabled: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Switch
        variant="primary"
        label="I am disabled and unchecked"
        alignLabel="horizontal"
        disabled
      />
      <Switch
        variant="primary"
        label="I am disabled but checked"
        checked
        alignLabel="horizontal"
        disabled
      />
    </div>
  );
}`,
    Controlled: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Switch
        variant="primary"
        label={isChecked ? "I am checked :)" : "I am not checked :("}
        alignLabel="horizontal"
        checked={isChecked}
        onChange={() => setIsChecked((prevState) => !prevState)}
      />
    </div>
  );
}`,
    AlignLabel: `import * as React from "react";
import { Switch } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Switch variant="secondary" label="Vertical" alignLabel="vertical" />
      <Switch variant="secondary" label="Horizontal" alignLabel="horizontal" />
    </div>
  );
}`,
    TrackIcon: `import * as React from "react";

import { Switch } from "@aristobyte-ui/ui/components/Switch/index";

const BulbOnIcon = () => (
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
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const BulbOffIcon = () => (
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
    <path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
    <path d="m2 2 20 20" />
    <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

export default function App() {
  return (
    <Switch
      switchSize="xlg"
      variant="warning"
      trackIcon={{ checked: BulbOnIcon, unchecked: BulbOffIcon }}
    />
  );
}`,
    ThumbIcon: `import * as React from "react";

import { Switch } from "@aristobyte-ui";

const SunIcon = () => (
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
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
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
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export default function App() {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <Switch
      switchSize="xlg"
      variant="warning"
      thumbIcon={isChecked ? SunIcon : MoonIcon}
      checked={isChecked}
      onChange={() => setIsChecked((prevState) => !prevState)}
    />
  );
}`,
  },
  Radio: {
    Usage: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <RadioGroup name="fruits" value="banana">
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  );
}`,
    Disabled: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <RadioGroup name="fruits" value="banana" disabled>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  );
}`,
    Sizes: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <RadioGroup name="fruits" value="banana" size="xsm">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="orange">Orange</Radio>
      </RadioGroup>

      <RadioGroup name="fruits" value="banana" size="sm">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="orange">Orange</Radio>
      </RadioGroup>

      <RadioGroup name="fruits" value="banana" size="md">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="orange">Orange</Radio>
      </RadioGroup>

      <RadioGroup name="fruits" value="banana" size="lg">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="orange">Orange</Radio>
      </RadioGroup>

      <RadioGroup name="fruits" value="banana" size="xlg">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="orange">Orange</Radio>
      </RadioGroup>
    </div>
  );
}`,
    Variants: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <RadioGroup name="variants" value="default">
      <Radio value="default" variant="default">Default</Radio>
      <Radio value="primary" variant="primary">Primary</Radio>
      <Radio value="secondary" variant="secondary">Secondary</Radio>
      <Radio value="error" variant="error">Error</Radio>
      <Radio value="warning" variant="warning">Warning</Radio>
      <Radio value="success" variant="success">Success</Radio>
    </RadioGroup>
  );
}`,
    Appearance: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <RadioGroup name="variants" value="solid">
      <Radio value="solid" appearance="solid" variant="success">Solid</Radio>
      <Radio value="glowing" appearance="glowing" variant="success">Glowing</Radio>
      <Radio value="outline" appearance="outline" variant="success">Outline</Radio>
      <Radio value="outline-dashed" appearance="outline-dashed" variant="success">Dashed outline</Radio>
      <Radio value="no-outline" appearance="no-outline" variant="success">No-outline</Radio>
    </RadioGroup>
  );
}`,
    HighlightLabel: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <RadioGroup
      name="highlight-label"
      value="highlighted"
      variant="success"
      appearance="glowing"
    >
      <Radio value="highlighted" highlightLabel>Highlighted</Radio>
      <Radio value="regular">Regular</Radio>
    </RadioGroup>
  );
}`,
    RadioGroupAlign: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RadioGroup
        name="horizontal"
        value="horizontal-1"
        variant="error"
        appearance="glowing"
        highlightLabel
        align="horizontal"
      >
        <Radio value="horizontal-1">Horizontal 1</Radio>
        <Radio value="horizontal-2">Horizontal 2</Radio>
        <Radio value="horizontal-3">Horizontal 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="vertical"
        value="vertical-1"
        variant="primary"
        appearance="glowing"
        highlightLabel
        align="vertical"
      >
        <Radio value="vertical-1">Vertical 1</Radio>
        <Radio value="vertical-2">Vertical 2</Radio>
        <Radio value="vertical-3">Vertical 3</Radio>
      </RadioGroup>
    </div>
  );
}`,
    AlignLabel: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RadioGroup
        name="top-label"
        value="top-label-1"
        variant="primary"
        appearance="solid"
        alignLabel="top"
        highlightLabel
      >
        <Radio value="top-label-1">Top label 1</Radio>
        <Radio value="top-label-2">Top label 2</Radio>
        <Radio value="top-label-3">Top label 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="right-label"
        value="right-label-1"
        variant="warning"
        appearance="solid"
        alignLabel="right"
        highlightLabel
      >
        <Radio value="right-label-1">Right label 1</Radio>
        <Radio value="right-label-2">Right label 2</Radio>
        <Radio value="right-label-3">Right label 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="bottom-label"
        value="bottom-label-1"
        variant="success"
        appearance="solid"
        alignLabel="bottom"
        highlightLabel
      >
        <Radio value="bottom-label-1">Bottom label 1</Radio>
        <Radio value="bottom-label-2">Bottom label 2</Radio>
        <Radio value="bottom-label-3">Bottom label 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="left-label"
        value="left-label-1"
        variant="error"
        appearance="solid"
        alignLabel="left"
        highlightLabel
      >
        <Radio value="left-label-1">Left label 1</Radio>
        <Radio value="left-label-2">Left label 2</Radio>
        <Radio value="left-label-3">Left label 3</Radio>
      </RadioGroup>
    </div>
  );
}`,
    Controlled: `import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

type VariantType =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning";

export default function App() {
  const [variant, setVariant] = React.useState<VariantType>("default");
  
  return (
    <RadioGroup
      name="controlled-variants"
      value={variant}
      variant={variant}
      onChange={(newValue) => setVariant(newValue as VariantType)}
    >
      <Radio value="default">Default</Radio>
      <Radio value="primary">Primary</Radio>
      <Radio value="secondary">Secondary</Radio>
      <Radio value="error">Error</Radio>
      <Radio value="warning">Warning</Radio>
      <Radio value="success">Success</Radio>
    </RadioGroup>
  );
}`,
  },
};
