"use client";

import * as React from "react";
import { useTranslate } from "@/context";

import "./LayoutSection.scss";

export type LayoutSectionPropsType = {
  id: string;
  category: string;
  unit: string;
  children?: React.ReactElement | React.ReactNode | string;
};

export const LayoutSection = ({
  id,
  category,
  unit,
  children = null,
}: LayoutSectionPropsType) => {
  const { t } = useTranslate();

  return (
    <>
      <section className="layout-section">
        <h1
          className="layout-section__title"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${category}.${unit}.${id}.title`),
          }}
        />
        <p
          className="layout-section__description"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${category}.${unit}.${id}.description`),
          }}
        />
        {children}
      </section>
      <hr className="layout__hr" />
    </>
  );
};
