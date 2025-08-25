import * as React from "react";
import { Button } from "@aristobyte-ui/button";

export const Sizes = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" size="xsm">
        Extra small
      </Button>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="md">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
      <Button variant="primary" size="xlg">
        Extra large
      </Button>
    </div>
  );
};
