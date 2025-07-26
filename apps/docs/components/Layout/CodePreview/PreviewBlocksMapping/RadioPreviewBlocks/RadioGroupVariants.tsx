import * as React from "react";
import { Radio } from "@aristobyte-ui/ui/components/Radio/index";
import { RadioGroup } from "@aristobyte-ui/ui/components/RadioGroup/index";

export const RadioGroupVariants = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RadioGroup name="variants" value="default">
        <Radio value="default">Default</Radio>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="error">Error</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="success">Success</Radio>
      </RadioGroup>

      <RadioGroup name="variants" value="primary" variant="primary">
        <Radio value="default">Default</Radio>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="error">Error</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="success">Success</Radio>
      </RadioGroup>

      <RadioGroup name="variants" value="secondary" variant="secondary">
        <Radio value="default">Default</Radio>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="error">Error</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="success">Success</Radio>
      </RadioGroup>

      <RadioGroup name="variants" value="error" variant="error">
        <Radio value="default">Default</Radio>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="error">Error</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="success">Success</Radio>
      </RadioGroup>

      <RadioGroup name="variants" value="warning" variant="warning">
        <Radio value="default">Default</Radio>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="error">Error</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="success">Success</Radio>
      </RadioGroup>

      <RadioGroup name="variants" value="success" variant="success">
        <Radio value="default">Default</Radio>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="error">Error</Radio>
        <Radio value="warning">Warning</Radio>
        <Radio value="success">Success</Radio>
      </RadioGroup>
    </div>
  );
};
