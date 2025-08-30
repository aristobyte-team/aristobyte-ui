import * as React from "react";

import { Intro as IntroComponent } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type IntroPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Intro = ({ config, t }: IntroPropsType) => (
  <IntroComponent pkg="button" config={config} t={t} />
);
