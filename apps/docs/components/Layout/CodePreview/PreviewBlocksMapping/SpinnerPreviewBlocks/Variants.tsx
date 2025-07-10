import * as React from "react";
import { Spinner } from "@aristobyte-ui/ui/components/Spinner/index";

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
