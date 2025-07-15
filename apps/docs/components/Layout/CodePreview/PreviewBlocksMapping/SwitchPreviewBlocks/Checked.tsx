import * as React from "react";
import { Switch } from "@aristobyte-ui/ui/components/Switch/index";

export const Checked = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Switch variant="primary" label="Not checked" />
      <Switch variant="primary" label="Checked" checked />
    </div>
  );
};
