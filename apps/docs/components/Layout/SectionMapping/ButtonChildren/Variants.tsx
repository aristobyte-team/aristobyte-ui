import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type VariantsPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Variants = ({ config, t }: VariantsPropsType) => (
  <div>Content</div>
);
