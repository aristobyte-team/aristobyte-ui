import * as React from "react";
import { Radio } from "@aristobyte-ui/ui/components/Radio/index";
import { RadioGroup } from "@aristobyte-ui/ui/components/RadioGroup/index";

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
