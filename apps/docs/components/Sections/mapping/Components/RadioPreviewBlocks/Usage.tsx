import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui";

export default function App() {
  return (
    <RadioGroup name="fruits" value="banana">
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="orange">Orange</Radio>
    </RadioGroup>
  );
}
