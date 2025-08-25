import * as React from "react";

import { Anchor } from "@aristobyte-ui/anchor";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type IntroPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Intro = ({ config, t }: IntroPropsType) => (
  <div className="layout__links">
    {config.introLinks.map(({ id, href, target, icon }) => (
      <Anchor className="layout__link" key={id} href={href} target={target}>
        <span dangerouslySetInnerHTML={{ __html: icon }} />
        <span>{t(`layout.components.dropdown.intro.links.${id}`)}</span>
      </Anchor>
    ))}
  </div>
);
