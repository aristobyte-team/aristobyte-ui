import * as React from "react";
import { Switch } from "@aristobyte-ui/ui/components/Switch/index";

export const Sizes = () => {
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
