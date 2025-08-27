"use client";
import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui/button";

export const ButtonGroupRadius = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonGroup radius="none">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="sm">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="md">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="lg">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
};
