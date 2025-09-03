import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui/radio";

export const Variants = () => {
  return (
    <RadioGroup name="variants" value="default">
      <Radio value="default" variant="default">
        Default
      </Radio>
      <Radio value="primary" variant="primary">
        Primary
      </Radio>
      <Radio value="secondary" variant="secondary">
        Secondary
      </Radio>
      <Radio value="error" variant="error">
        Error
      </Radio>
      <Radio value="warning" variant="warning">
        Warning
      </Radio>
      <Radio value="success" variant="success">
        Success
      </Radio>
    </RadioGroup>
  );
};
