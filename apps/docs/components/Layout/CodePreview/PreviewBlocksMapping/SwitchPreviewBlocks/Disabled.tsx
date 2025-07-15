import * as React from "react";
import { Switch } from "@aristobyte-ui/ui/components/Switch/index";

export const Disabled = () => {
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
};
