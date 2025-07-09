import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type UsagePropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Usage = ({ config, t }: UsagePropsType) => <div>Content</div>;
