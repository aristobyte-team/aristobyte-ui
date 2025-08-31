import * as React from "react";
import { Spinner } from "@aristobyte-ui/spinner";

export const Types = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Spinner variant="primary" type="default" />
      <Spinner variant="primary" type="duo" />
      <Spinner variant="primary" type="gradient" />
      <Spinner variant="primary" type="pulse" />
      <Spinner variant="primary" type="pulse-duo" />
    </div>
  );
};
