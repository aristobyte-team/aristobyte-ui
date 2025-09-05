"use client";

import * as React from "react";

import { Anchor } from "@aristobyte-ui/anchor";

import { useConfig, useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";
import { Helpers } from "@/config";

import "./Intro.scss";

export interface IIntro {
  category: string;
  unit: string;
}

export const Intro: React.FC<IIntro> = ({ category, unit }) => {
  const { config } = useConfig();
  const { t } = useTranslate();

  const linkTexts: { [key: string]: string } = {
    storybook: "Storybook",
    npm: Helpers.insertPackageToText(
      `@aristobyte-ui/{{package}}`,
      category,
      unit
    ),
    source: t("layout.intro-links.source"),
  };

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
                  href={Helpers.insertPackageToText(href, category, unit)}
                  target={target}
                >
                  <span className={`intro__link-icon intro__link-icon--${id}`}>
                    {icon({ size: 16 })}
                  </span>
                  <span className="intro__link-text">{linkTexts[id]}</span>
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
