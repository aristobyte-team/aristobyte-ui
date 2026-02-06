import * as React from "react";
import { Anchor } from "@aristobyte-ui/anchor";

export const Targets = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
    <Anchor href="https://example.com" target="_self">
      Same Tab
    </Anchor>
    <Anchor href="https://example.com" target="_blank">
      New Tab
    </Anchor>
  </div>
);
