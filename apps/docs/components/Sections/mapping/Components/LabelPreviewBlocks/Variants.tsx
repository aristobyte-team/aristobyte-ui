import * as React from "react";
import { Label } from "@aristobyte-ui/label";

export const Variants = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <Label text="Default" variant="default" />
    <Label text="Primary" variant="primary" />
    <Label text="Secondary" variant="secondary" />
    <Label text="Success" variant="success" />
    <Label text="Error" variant="error" />
    <Label text="Warning" variant="warning" />
  </div>
);
