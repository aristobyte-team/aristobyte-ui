import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type IconsOnlyPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const IconsOnly = ({ config, t }: IconsOnlyPropsType) => (
  <div>Content</div>
);
