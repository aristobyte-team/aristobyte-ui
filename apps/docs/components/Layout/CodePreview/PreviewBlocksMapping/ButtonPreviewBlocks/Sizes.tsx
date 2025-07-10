import * as React from "react";
import { Button } from "@aristobyte-ui/ui/components/Button/index";

export const Sizes = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" size="xsm">
        Button
      </Button>
      <Button variant="primary" size="sm">
        Button
      </Button>
      <Button variant="primary" size="md">
        Button
      </Button>
      <Button variant="primary" size="lg">
        Button
      </Button>
      <Button variant="primary" size="xlg">
        Button
      </Button>
    </div>
  );
};
