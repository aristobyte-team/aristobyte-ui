"use client";
import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui/button";

export const ButtonGroupSize = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonGroup radius="full" size="xsm">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="sm">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="md">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="lg">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" size="xlg">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
};
