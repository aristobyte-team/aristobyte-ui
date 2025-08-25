import * as React from "react";

import { CodeBlock, TabSwitchWithSlidingIndicator } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type ImportPropsType = {
  config: ConfigType;
  t: TranslateFunctionType;
};

export const Import = ({ config, t }: ImportPropsType) => (
  <TabSwitchWithSlidingIndicator
    tabs={config.tabs.import.map(({ id, content }) => ({
      buttonContent: (
        <span key={id}>
          {t(`layout.components.dropdown.import.tabs.${id}`)}
        </span>
      ),
      content: (
        <CodeBlock code={content["dropdown"]!} className="import__code-block" />
      ),
    }))}
  />
);
