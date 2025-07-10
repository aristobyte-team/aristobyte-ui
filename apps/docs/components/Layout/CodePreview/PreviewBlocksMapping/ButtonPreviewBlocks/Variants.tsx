import * as React from "react";
import { Button } from "@aristobyte-ui/ui/components/Button/index";

export const Variants = () => {
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
};
