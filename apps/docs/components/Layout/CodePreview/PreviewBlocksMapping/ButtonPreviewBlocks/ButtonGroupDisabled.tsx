import * as React from "react";
import { Button, ButtonGroup } from "@aristobyte-ui/button";

export const ButtonGroupDisabled = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <ButtonGroup radius="full" disabled>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
};
