import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type SizesPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Sizes = ({ config, t }: SizesPropsType) => <div>Content</div>;
