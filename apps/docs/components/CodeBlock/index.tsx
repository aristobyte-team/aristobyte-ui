"use client";
import * as React from "react";
import { getSingletonHighlighter as highlighter } from "shiki";

import { Button } from "@/components";
import { type IconPropsType, Icons } from "@aristobyte-ui/utils";

import {
  CodeHighlightSupportedLanguages,
  CodeHighlightSupportedThemes,
} from "@/config";

import "./CodeBlock.scss";

interface ICodeBlock {
  code: string;
  icon?: {
    component: (props: IconPropsType) => React.JSX.Element;
    size?: number;
    color?: string;
  };
  lang?: CodeHighlightSupportedLanguages;
  theme?: CodeHighlightSupportedThemes;
  className?: string;
}

export const CodeBlock: React.FC<ICodeBlock> = ({
  code,
  icon,
  lang = "tsx",
  theme = "github-dark", // Other nice once "houston" | "dracula-soft",
  className = "",
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

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <div className={`code-block ${className}`}>
      {icon && (
        <div>{icon.component({ size: icon.size, color: icon.color })}</div>
      )}
      <div
        className="code-block__container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Button
        onClick={copyToClipboard}
        className="code-block__button"
        icon={{ component: Icons.Copy }}
      />
    </div>
  );
};
