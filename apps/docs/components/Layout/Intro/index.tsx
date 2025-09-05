import * as React from "react";

import { Anchor } from "@aristobyte-ui/anchor";

import { type TranslateFunctionType } from "@/data";
import { useConfig, useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";

import "./Intro.scss";

export interface IIntro {
  category: string;
  unit: string;
}

const renderText = (
  category: string,
  unit: string,
  id: string,
  t: TranslateFunctionType
) => {
  if (category === "presets") {
    return {
      storybook: "Storybook",
      npm: `@aristobyte-ui/${category}`,
      source: t("layout.intro-links.source"),
    }[id];
  }

  return {
    storybook: "Storybook",
    npm: `@aristobyte-ui/${unit}`,
    source: t("layout.intro-links.source"),
  }[id];
};

const getHref = (category: string, unit: string, href: string) => {
  if (category === "presets") {
    return href.replace("{{package}}", category);
  }

  return href.replace("{{package}}", unit);
};

export const Intro: React.FC<IIntro> = ({ category, unit }) => {
  const { config } = useConfig();
  const { t } = useTranslate();

  return (
    <section className="intro">
      <div className="intro__container">
        <label className="intro__label">
          <Icons.Stars size={22} />
          <p
            dangerouslySetInnerHTML={{
              __html: t(`layout.labels.design-system-component`),
            }}
          />
        </label>
        <h1
          className="intro__title"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${category}.${unit}.intro.title`),
          }}
        />
        <p
          className="intro__description"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${category}.${unit}.intro.description`),
          }}
        />
        <div className="intro__quick-links">
          <p className="intro__quick-links-content">
            <span className="intro__quick-links-dot" />
            <span className="intro__quick-links-text">Quick Links</span>
          </p>
          <ul className="intro__links">
            {config.introLinks.map(({ id, href, target, icon }) => (
              <li key={id}>
                <Anchor
                  className="intro__link"
                  href={getHref(category, unit, href)}
                  target={target}
                >
                  <span className={`intro__link-icon intro__link-icon--${id}`}>
                    {icon({ size: 16 })}
                  </span>
                  <span className="intro__link-text">
                    {renderText(category, unit, id, t)}
                  </span>
                  <span className="intro__link-icon">
                    <Icons.Link size={12} />
                  </span>
                </Anchor>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
