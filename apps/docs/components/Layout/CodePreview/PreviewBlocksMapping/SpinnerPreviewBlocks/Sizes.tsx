import * as React from "react";
import { Spinner } from "@aristobyte-ui/spinner";

export const Sizes = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Spinner variant="primary" size="xsm" />
      <Spinner variant="primary" size="sm" />
      <Spinner variant="primary" size="md" />
      <Spinner variant="primary" size="lg" />
      <Spinner variant="primary" size="xlg" />
    </div>
  );
};
