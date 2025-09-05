import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui/radio";

export const Appearance = () => {
  return (
    <RadioGroup name="variants" value="solid">
      <Radio value="solid" appearance="solid" variant="success">
        Solid
      </Radio>
      <Radio value="glowing" appearance="glowing" variant="success">
        Glowing
      </Radio>
      <Radio value="outline" appearance="outline" variant="success">
        Outline
      </Radio>
      <Radio
        value="outline-dashed"
        appearance="outline-dashed"
        variant="success"
      >
        Dashed outline
      </Radio>
      <Radio value="no-outline" appearance="no-outline" variant="success">
        No-outline
      </Radio>
    </RadioGroup>
  );
};
