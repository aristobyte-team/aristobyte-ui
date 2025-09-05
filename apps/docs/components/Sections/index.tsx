"use client";

import * as React from "react";
import { CodeBlock, Tabs } from "@/components";
import { useConfig, useTranslate } from "@/context";

import { mapping } from "./mapping";

import "./Sections.scss";
import { CodeBlocks } from "@/config";

export interface ISections {
  category: string;
  unit: string;
}

export const Sections: React.FC<ISections> = ({ category, unit }) => {
  const { config } = useConfig();
  const { t } = useTranslate();
  const sections = mapping![category]![unit]!;

  return Object.keys(sections).map((section, i) => (
    <section key={i} className="sections">
      <div key={i} className="sections__container">
        <h1
          className="sections__title"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${category}.${unit}.${section}.title`),
          }}
        />
        <p
          className="sections__description"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${category}.${unit}.${section}.description`),
          }}
        />
        <Tabs
          tabs={config.codePreviewTabs.map((id) => ({
            buttonContent: (
              <span key={id}>{t(`layout.codePreview.${id}`)}</span>
            ),
            content:
              id === "preview" ? (
                <div className="sections__code-preview">
                  {sections[section]!()}
                </div>
              ) : (
                <CodeBlock code={CodeBlocks![category]![unit]![section]!} />
              ),
          }))}
        />{" "}
      </div>
    </section>
  ));
};
