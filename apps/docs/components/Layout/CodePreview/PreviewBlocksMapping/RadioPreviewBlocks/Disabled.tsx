import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui/radio";

export const Disabled = () => {
  return (
    <RadioGroup name="fruits" value="orange" variant="primary" disabled>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  );
};
