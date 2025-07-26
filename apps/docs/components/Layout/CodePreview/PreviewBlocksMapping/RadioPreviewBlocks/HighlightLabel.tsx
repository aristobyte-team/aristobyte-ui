import * as React from "react";
import { Radio } from "@aristobyte-ui/ui/components/Radio/index";
import { RadioGroup } from "@aristobyte-ui/ui/components/RadioGroup/index";

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
