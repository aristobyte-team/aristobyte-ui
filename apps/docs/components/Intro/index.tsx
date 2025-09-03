import * as React from "react";

import { Anchor } from "@aristobyte-ui/anchor";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

import "./Intro.scss";

export interface IIntro {
  unit: string;
  t: TranslateFunctionType;
  config: ConfigType;
}

const renderText = (id: string, unit: string, t: TranslateFunctionType) =>
  ({
    storybook: "Storybook",
    npm: `@aristobyte-ui/${unit}`,
    source: t("layout.intro-links.source"),
  })[id];

export const Intro: React.FC<IIntro> = ({ unit, config, t }) => (
  <div className="intro">
    {config.introLinks(unit).map(({ id, href, target, Icon }) => (
      <Anchor
        className="intro__link"
        key={id}
        href={href}
        target={target}
        variant="white"
      >
        <span>
          <Icon size={24} />
        </span>
        <span>{renderText(id, unit, t)}</span>
      </Anchor>
    ))}
  </div>
);
