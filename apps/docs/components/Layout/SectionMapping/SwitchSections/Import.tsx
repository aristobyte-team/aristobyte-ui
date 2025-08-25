import * as React from "react";

import { TabSwitchWithSlidingIndicator } from "../../../TabSwitchWithSlidingIndicator";
import { CodeBlock } from "../../../CodeBlock";

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
        <span key={id}>{t(`layout.components.switch.import.tabs.${id}`)}</span>
      ),
      content: (
        <CodeBlock code={content["switch"]!} className="import__code-block" />
      ),
    }))}
  />
);
