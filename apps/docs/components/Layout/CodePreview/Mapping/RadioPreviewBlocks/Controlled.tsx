import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui/radio";

type VariantType =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning";

export const Controlled = () => {
  const [variant, setVariant] = React.useState<VariantType>("secondary");

  return (
    <RadioGroup
      name="controlled-variants"
      value={variant}
      variant={variant}
      onChange={(newValue) => setVariant(newValue as VariantType)}
    >
      <Radio value="default">Default</Radio>
      <Radio value="primary">Primary</Radio>
      <Radio value="secondary">Secondary</Radio>
      <Radio value="error">Error</Radio>
      <Radio value="warning">Warning</Radio>
      <Radio value="success">Success</Radio>
    </RadioGroup>
  );
};
