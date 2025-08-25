import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui/button";

export const ButtonGroupAlignment = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ButtonGroup radius="full" align="horizontal">
        <Button>Horizontal Button 1</Button>
        <Button>Horizontal Button 2</Button>
        <Button>Horizontal Button 3</Button>
      </ButtonGroup>

      <ButtonGroup radius="full" align="vertical">
        <Button>Vertical Button 1</Button>
        <Button>Vertical Button 2</Button>
        <Button>Vertical Button 3</Button>
      </ButtonGroup>
    </div>
  );
};
