import * as React from "react";
import { getSingletonHighlighter } from "shiki";
import { Button } from "@aristobyte-ui/button";
import { Icons } from "../../../../packages/ui/utils";

import { SupportedLanguages, SupportedThemes } from "./types";

import "./CodeBlock.scss";

interface ICodeBlock {
  code: string;
  lang?: SupportedLanguages;
  theme?: SupportedThemes;
  className?: string;
}

export const CodeBlock: React.FC<ICodeBlock> = ({
  code,
  lang = "tsx",
  theme = "nord",
  className = "",
}) => {
  const [html, setHtml] = React.useState("");

  React.useEffect(() => {
    (async () => {
      setHtml(
        (
          await getSingletonHighlighter({
            themes: [theme],
            langs: [lang],
          })
        ).codeToHtml(code, {
          lang,
          theme,
        })
      );
    })();
  }, [code, lang, theme]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <div className={`code-block ${className}`}>
      <div
        className="code-block__container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Button
        onClick={copyToClipboard}
        className="code-block__button"
        dangerouslySetInnerHTML={{ __html: Icons.Copy }}
      />
    </div>
  );
};
