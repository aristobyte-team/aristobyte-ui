"use client";

import * as React from "react";
import { Import, Installation, Sidebar } from "@/components";
import { useConfig, useTranslate } from "@/context";

import { Anchor } from "@aristobyte-ui/ui/components/Anchor/index";
import { MessageBox } from "@aristobyte-ui/ui/components/MessageBox/index";

import "./Layout.scss";

export type LayoutPropsType = {
  id: string;
  section: string;
};

export const Layout = ({ id, section }: LayoutPropsType) => {
  const { t } = useTranslate();
  const { config } = useConfig();

  return (
    <main className="layout">
      <Sidebar />
      <article className="layout__article">
        <div className="layout__container">
          <section className="layout__content">
            <h1 className="layout__title">
              {t(`layout.${section}.introTitle.${id}`)}
            </h1>
            <p className="layout__description">
              {t(`layout.${section}.introDescription.${id}`)}
            </p>
            <div className="layout__links">
              {config.introLinks.map(({ id: linkId, href, target, icon }) => (
                <Anchor
                  className="layout__link"
                  key={linkId}
                  href={href}
                  target={target}
                >
                  <span dangerouslySetInnerHTML={{ __html: icon }} />
                  <span>
                    {t(`layout.${section}.introLinks.${linkId}`) +
                      (linkId === "npm" ? `/${id}` : "")}
                  </span>
                </Anchor>
              ))}
            </div>
          </section>
          <hr className="layout__hr" />
          <section className="layout__installation">
            <h1 className="layout__title">
              {id === "home"
                ? t(`layout.${section}.installationTitle.home`)
                : t(`layout.${section}.installationTitle.rest`)}
            </h1>
            <Installation
              packageToInstall={
                id === "home" ? "@aristobyte-ui" : `@aristobyte-ui/${id}`
              }
            />
            <MessageBox
              withIcon
              variant={id === "home" ? "info" : "warning"}
              className="layout__warning"
            >
              {id === "home"
                ? t(`layout.${section}.installationDescription.home`)
                : t(`layout.${section}.installationDescription.rest`)}
            </MessageBox>
          </section>
          <section className="layout__import">
            <h1 className="layout__title">
              {t(`layout.${section}.importTitle`)}
            </h1>
            <p className="layout__description">
              {t(`layout.${section}.importDescription.${id}`)}
            </p>
            <Import componentId={id} />
          </section>
        </div>
      </article>
    </main>
  );
};
