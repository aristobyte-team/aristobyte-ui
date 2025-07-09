import * as React from "react";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type LoadingPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Loading = ({ config, t }: LoadingPropsType) => <div>Content</div>;
