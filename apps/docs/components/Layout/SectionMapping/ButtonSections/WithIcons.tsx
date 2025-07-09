import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type WithIconsPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const WithIcons = ({ config, t }: WithIconsPropsType) => (
  <div>Content</div>
);
