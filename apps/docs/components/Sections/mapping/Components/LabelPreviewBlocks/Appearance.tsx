import * as React from "react";
import { Label } from "@aristobyte-ui/label";

export const Appearance = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Label text="Solid" appearance="solid" variant="primary" />
      <Label text="Glowing" appearance="glowing" variant="primary" />
      <Label text="Outline" appearance="outline" variant="primary" />
      <Label text="Outline Dashed" appearance="outline-dashed" variant="primary" />
      <Label text="No Outline" appearance="no-outline" variant="primary" />
    </div>
  </div>
);
