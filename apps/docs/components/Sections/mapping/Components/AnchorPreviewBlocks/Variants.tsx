import * as React from "react";
import { Anchor } from "@aristobyte-ui/anchor";

export const Variants = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
    <Anchor variant="default">Default</Anchor>
    <Anchor variant="primary">Primary</Anchor>
    <Anchor variant="secondary">Secondary</Anchor>
    <Anchor variant="success">Success</Anchor>
    <Anchor variant="error">Error</Anchor>
    <Anchor variant="warning">Warning</Anchor>
  </div>
);
