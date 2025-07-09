import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type ColorsPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Colors = ({ config, t }: ColorsPropsType) => <div>Content</div>;
