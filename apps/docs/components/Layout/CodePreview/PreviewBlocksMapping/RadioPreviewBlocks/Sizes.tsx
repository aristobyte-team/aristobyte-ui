import * as React from "react";
import { Radio } from "@aristobyte-ui/ui/components/Radio/index";
import { RadioGroup } from "@aristobyte-ui/ui/components/RadioGroup/index";

export const Sizes = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <RadioGroup name="sizes" value="xsm" variant="primary" size="xsm">
        <Radio value="xsm">Extra small</Radio>
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
        <Radio value="xlg">Extra large</Radio>
      </RadioGroup>

      <RadioGroup name="sizes" value="sm" variant="primary" size="sm">
        <Radio value="xsm">Extra small</Radio>
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
        <Radio value="xlg">Extra large</Radio>
      </RadioGroup>

      <RadioGroup name="sizes" value="md" variant="primary" size="md">
        <Radio value="xsm">Extra small</Radio>
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
        <Radio value="xlg">Extra large</Radio>
      </RadioGroup>

      <RadioGroup name="sizes" value="lg" variant="primary" size="lg">
        <Radio value="xsm">Extra small</Radio>
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
        <Radio value="xlg">Extra large</Radio>
      </RadioGroup>

      <RadioGroup name="sizes" value="xlg" variant="primary" size="xlg">
        <Radio value="xsm">Extra small</Radio>
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
        <Radio value="xlg">Extra large</Radio>
      </RadioGroup>
    </div>
  );
};
