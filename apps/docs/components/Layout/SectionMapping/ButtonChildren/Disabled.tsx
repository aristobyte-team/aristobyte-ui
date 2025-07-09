import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type DisabledPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Disabled = ({ config, t }: DisabledPropsType) => (
  <div>Content</div>
);
