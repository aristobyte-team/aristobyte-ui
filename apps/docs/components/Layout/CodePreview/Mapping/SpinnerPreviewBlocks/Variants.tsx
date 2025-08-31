import * as React from "react";
import { Spinner } from "@aristobyte-ui/spinner";

export const Variants = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Spinner />
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="error" />
      <Spinner variant="warning" />
      <Spinner variant="success" />
    </div>
  );
};
