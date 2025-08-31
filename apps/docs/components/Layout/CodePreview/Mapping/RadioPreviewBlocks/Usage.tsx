import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui/radio";

export const Usage = () => {
  return (
    <RadioGroup name="fruits" value="banana" variant="primary">
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  );
};
