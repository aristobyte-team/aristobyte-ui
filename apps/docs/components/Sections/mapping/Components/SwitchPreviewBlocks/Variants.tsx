import * as React from "react";
import { Switch } from "@aristobyte-ui/switch";

export const Variants = () => {
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
};
