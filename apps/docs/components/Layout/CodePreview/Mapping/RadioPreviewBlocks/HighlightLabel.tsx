import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui/radio";

export const HighlightLabel = () => {
  return (
    <RadioGroup
      name="highlight-label"
      value="highlighted"
      variant="success"
      appearance="glowing"
    >
      <Radio value="highlighted" highlightLabel>
        Highlighted
      </Radio>
      <Radio value="regular">Regular</Radio>
    </RadioGroup>
  );
};
