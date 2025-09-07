"use client";
import * as React from "react";
import { getSingletonHighlighter as highlighter } from "shiki";

import {
  CodeHighlightSupportedLanguages,
  CodeHighlightSupportedThemes,
} from "@/config";

import styles from "./TypeBlock.module.scss";

interface ITypeBlock {
  code: string;
  lang?: CodeHighlightSupportedLanguages;
  theme?: CodeHighlightSupportedThemes;
}

export const TypeBlock: React.FC<ITypeBlock> = ({
  code,
  lang = "tsx",
  theme = "houston",
}) => {
  const [html, setHtml] = React.useState("");

  React.useEffect(() => {
    (async () => {
      setHtml(
        (await highlighter({ themes: [theme], langs: [lang] })).codeToHtml(
          code,
          { lang, theme }
        )
      );
    })();
  }, [code, lang, theme]);

  return (
    <div className={`type-block ${styles["type-block"]}`}>
      <div
        className={styles["type-block__container"]}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
