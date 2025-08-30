import * as React from "react";

import { Anchor } from "@aristobyte-ui/anchor";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

import "./Intro.scss";

export interface IIntro {
  pkg: string;
  t: TranslateFunctionType;
  config: ConfigType;
}

const renderText = (id: string, pkg: string, t: TranslateFunctionType) =>
  ({
    storybook: "Storybook",
    npm: `@aristobyte-ui/${pkg}`,
    source: t("intro-links.source"),
  })[id];

export const Intro: React.FC<IIntro> = ({ pkg, config, t }) => (
  <div className="intro">
    {config.introLinks(pkg).map(({ id, href, target, Icon }) => (
      <Anchor className="intro__link" key={id} href={href} target={target}>
        <span>
          <Icon size={24} />
        </span>
        <span>{renderText(id, pkg, t)}</span>
      </Anchor>
    ))}
  </div>
);
