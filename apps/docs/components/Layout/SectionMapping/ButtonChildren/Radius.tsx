import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type RadiusPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Radius = ({ config, t }: RadiusPropsType) => <div>Content</div>;
