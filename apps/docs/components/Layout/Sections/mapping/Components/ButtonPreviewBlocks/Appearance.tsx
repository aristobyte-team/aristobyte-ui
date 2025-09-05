"use client";
import * as React from "react";
import { Button } from "@aristobyte-ui/button";

export const Appearance = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="default">
          Solid
        </Button>
        <Button appearance="glowing" variant="default">
          Glowing
        </Button>
        <Button appearance="outline" variant="default">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="default">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="default">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="primary">
          Solid
        </Button>
        <Button appearance="glowing" variant="primary">
          Glowing
        </Button>
        <Button appearance="outline" variant="primary">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="primary">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="primary">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="secondary">
          Solid
        </Button>
        <Button appearance="glowing" variant="secondary">
          Glowing
        </Button>
        <Button appearance="outline" variant="secondary">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="secondary">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="secondary">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="error">
          Solid
        </Button>
        <Button appearance="glowing" variant="error">
          Glowing
        </Button>
        <Button appearance="outline" variant="error">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="error">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="error">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="warning">
          Solid
        </Button>
        <Button appearance="glowing" variant="warning">
          Glowing
        </Button>
        <Button appearance="outline" variant="warning">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="warning">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="warning">
          No-Outline
        </Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button appearance="solid" variant="success">
          Solid
        </Button>
        <Button appearance="glowing" variant="success">
          Glowing
        </Button>
        <Button appearance="outline" variant="success">
          Outline
        </Button>
        <Button appearance="outline-dashed" variant="success">
          Outline Dashed
        </Button>
        <Button appearance="no-outline" variant="success">
          No-Outline
        </Button>
      </div>
    </div>
  );
};
