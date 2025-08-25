import * as React from "react";
import { Switch } from "@aristobyte-ui/switch";

export const AlignLabel = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Switch variant="secondary" label="Vertical" alignLabel="vertical" />
      <Switch variant="secondary" label="Horizontal" alignLabel="horizontal" />
    </div>
  );
};
