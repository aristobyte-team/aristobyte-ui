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
import { Button } from "@aristobyte-ui/ui/components/Button/index";

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
import { Button } from "@aristobyte-ui/ui/components/Button/index";

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
import { Button } from "@aristobyte-ui/ui/components/Button/index";

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
  },
  Spinner: {
    Usage: `import * as React from "react";
import { Spinner } from "@aristobyte-ui/ui/components/Spinner/index";

export default function App() {
  return <Spinner variant="primary" />;
}`,
    Sizes: `import * as React from "react";
import { Spinner } from "@aristobyte-ui/ui/components/Spinner/index";

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
import { Spinner } from "@aristobyte-ui/ui/components/Spinner/index";

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
import { Spinner } from "@aristobyte-ui/ui/components/Spinner/index";

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
