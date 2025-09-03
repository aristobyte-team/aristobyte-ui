import * as React from "react";

import { CodeBlock, TabSwitchWithSlidingIndicator } from "@/components";
import { mapping } from "./Mapping";

import { type TranslateFunctionType } from "@/data";
import { type ConfigType, CodeBlocks } from "@/config";

import "./CodePreview.scss";

export type CodePreviewPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
  category: string;
  unit: string;
  section: string;
};

export const CodePreview = ({
  t,
  config,
  category,
  unit,
  section,
}: CodePreviewPropsType) => (
  <TabSwitchWithSlidingIndicator
    tabs={config.codePreviewTabs.map((id) => ({
      buttonContent: <span key={id}>{t(`layout.codePreview.${id}`)}</span>,
      content:
        id === "preview" ? (
          <div className="code-preview">
            {React.createElement(mapping[category]![unit]![section]!)}
          </div>
        ) : (
          <CodeBlock code={CodeBlocks![category]![unit]![section]!} />
        ),
    }))}
  />
);
