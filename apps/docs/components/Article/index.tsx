import * as React from "react";
import { Intro, Installation, Import, Sections, Props } from "@/components";

import "./Article.scss";

export interface IArticle {
  category: string;
  unit: string;
}

export const Article: React.FC<IArticle> = ({ category, unit }) => (
  <article className="article">
    <Intro unit={unit} category={category} />
    <Installation unit={unit} category={category} />
    <Import unit={unit} category={category} />
    <Sections category={category} unit={unit} />
    <Props category={category} unit={unit} />
  </article>
);
