"use client";

import * as React from "react";
import { Sidebar } from "@/components";

import { SectionMapping } from "./SectionMapping";

import "./Layout.scss";

export type LayoutPropsType = {
  category: string;
  unit: string;
};

export const Layout = ({ unit, category }: LayoutPropsType) => {
  return (
    <main className="layout">
      <Sidebar />
      <article className="layout__article">
        <div className="layout__container">
          <SectionMapping {...{ category, unit }} />
        </div>
      </article>
    </main>
  );
};
