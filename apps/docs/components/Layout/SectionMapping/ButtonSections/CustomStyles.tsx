import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type CustomStylesPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const CustomStyles = ({ config, t }: CustomStylesPropsType) => (
  <div>Content</div>
);
