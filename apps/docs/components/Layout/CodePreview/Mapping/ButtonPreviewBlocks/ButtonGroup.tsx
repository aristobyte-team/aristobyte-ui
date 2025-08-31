"use client";
import * as React from "react";
import { Button } from "@aristobyte-ui/button";
import { ButtonGroup as ButtonGroupComponent } from "@aristobyte-ui/button";

export const ButtonGroup = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <ButtonGroupComponent radius="full">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroupComponent>
    </div>
  );
};
