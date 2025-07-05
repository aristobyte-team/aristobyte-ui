"use client";

import * as React from "react";
import { useTranslate } from "@/context";

import "./LayoutSection.scss";

export type LayoutSectionPropsType = {
  id: string;
  section: string;
  unit: string;
  title?: boolean;
  description?: boolean;
  children?: React.ReactElement | React.ReactNode | string;
};

export const LayoutSection = ({
  id,
  section,
  unit,
  title = false,
  description = false,
  children = null,
}: LayoutSectionPropsType) => {
  const { t } = useTranslate();

  return (
    <section className="layout-section">
      {title && (
        <h1
          className="layout-section__title"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${section}.${unit}.${id}.title`),
          }}
        />
      )}
      {description && (
        <p
          className="layout-section__description"
          dangerouslySetInnerHTML={{
            __html: t(`layout.${section}.${unit}.${id}.description`),
          }}
        />
      )}
      {children}
    </section>
  );
};
