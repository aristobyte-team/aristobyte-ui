"use client";

import * as React from "react";
import { Sidebar } from "@/components";
import { useConfig, useTranslate } from "@/context";

import { Anchor } from "@aristobyte-ui/ui/components/Anchor/index";
import { CodeBlock } from "@aristobyte-ui/ui/components/CodeBlock/index";
import { MessageBox } from "@aristobyte-ui/ui/components/MessageBox/index";
import { TabSwitchWithSlidingIndicator } from "@aristobyte-ui/ui/components/TabSwitchWithSlidingIndicator/index";

import { LayoutSection } from "./LayoutSection";

import "./Layout.scss";

export type LayoutPropsType = {
  section: string;
  unit: string;
};

export const Layout = ({ unit, section }: LayoutPropsType) => {
  const { t } = useTranslate();
  const { config } = useConfig();

  return (
    <main className="layout">
      <Sidebar />
      <article className="layout__article">
        <div className="layout__container">
          <LayoutSection
            id="intro"
            section={section}
            unit={unit}
            title
            description
          >
            <div className="layout__links">
              {config.introLinks.map(({ id, href, target, icon }) => (
                <Anchor
                  className="layout__link"
                  key={id}
                  href={href}
                  target={target}
                >
                  <span dangerouslySetInnerHTML={{ __html: icon }} />
                  <span>
                    {t(`layout.${section}.${unit}.intro.links.${id}`)}
                  </span>
                </Anchor>
              ))}
            </div>
          </LayoutSection>
          <hr className="layout__hr" />
          <LayoutSection
            id="installation"
            section={section}
            unit={unit}
            title
            description
          >
            <TabSwitchWithSlidingIndicator
              tabs={config.tabs.installation.map(({ label, icon, script }) => ({
                buttonContent: (
                  <>
                    <span dangerouslySetInnerHTML={{ __html: icon }} />
                    <span>{label}</span>
                  </>
                ),
                content: (
                  <CodeBlock
                    code={`${script} ${unit === "home" ? "@aristobyte-ui" : `@aristobyte-ui/${unit}`}`}
                    lang="bash"
                    theme="laserwave"
                    className="installation__code-block"
                  />
                ),
              }))}
            />
            <MessageBox
              withIcon
              variant={unit === "home" ? "info" : "warning"}
              className="layout__warning"
            >
              {t(`layout.${section}.${unit}.installation.description`)}
            </MessageBox>
          </LayoutSection>
          <LayoutSection
            id="import"
            section={section}
            unit={unit}
            title
            description
          >
            <TabSwitchWithSlidingIndicator
              tabs={config.tabs.import.map(({ id, content }) => ({
                buttonContent: (
                  <span key={id}>
                    {t(`layout.components.${unit}.import.tabs.${id}`)}
                  </span>
                ),
                content: (
                  <CodeBlock
                    code={content[unit]!}
                    className="import__code-block"
                  />
                ),
              }))}
            />
          </LayoutSection>
        </div>
      </article>
    </main>
  );
};
