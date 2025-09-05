"use client";

import * as React from "react";

import { Sidebar } from "./Sidebar";
import { Intro } from "./Intro";
import { Installation } from "./Installation";
import { Import } from "./Import";
import { Sections } from "./Sections";

import "./Layout.scss";

export interface ILayout {
  category: string;
  unit: string;
}

export const Layout: React.FC<ILayout> = ({ category, unit }) => {
  return (
    <main className="layout">
      <Sidebar />
      <article className="layout__article">
        <div className="layout__container">
          <Intro unit={unit} category={category} />
          <Installation unit={unit} category={category} />
          <Import unit={unit} category={category} />
          <Sections category={category} unit={unit} />
        </div>
      </article>
    </main>
  );
};
