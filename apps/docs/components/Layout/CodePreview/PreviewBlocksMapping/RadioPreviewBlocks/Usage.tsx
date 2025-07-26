import * as React from "react";
import { Radio } from "@aristobyte-ui/ui/components/Radio/index";
import { RadioGroup } from "@aristobyte-ui/ui/components/RadioGroup/index";

export const Usage = () => {
  return (
    <RadioGroup name="fruits" value="banana" variant="primary">
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  );
};
