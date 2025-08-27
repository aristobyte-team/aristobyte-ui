"use client";
import * as React from "react";
import { Button } from "@aristobyte-ui/button";

export const Radius = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button variant="primary" radius="none">
        None
      </Button>
      <Button variant="primary" radius="sm">
        Small
      </Button>
      <Button variant="primary" radius="md">
        Medium
      </Button>
      <Button variant="primary" radius="lg">
        Large
      </Button>
      <Button variant="primary" radius="full">
        Full
      </Button>
    </div>
  );
};
