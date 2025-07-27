import * as React from "react";
import { Radio } from "@aristobyte-ui/ui/components/Radio/index";
import { RadioGroup } from "@aristobyte-ui/ui/components/RadioGroup/index";

export const RadioGroupAlign = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RadioGroup
        name="horizontal"
        value="horizontal-1"
        variant="error"
        appearance="glowing"
        highlightLabel
        align="horizontal"
      >
        <Radio value="horizontal-1">Horizontal 1</Radio>
        <Radio value="horizontal-2">Horizontal 2</Radio>
        <Radio value="horizontal-3">Horizontal 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="vertical"
        value="vertical-1"
        variant="primary"
        appearance="glowing"
        highlightLabel
        align="vertical"
      >
        <Radio value="vertical-1">Vertical 1</Radio>
        <Radio value="vertical-2">Vertical 2</Radio>
        <Radio value="vertical-3">Vertical 3</Radio>
      </RadioGroup>
    </div>
  );
};
