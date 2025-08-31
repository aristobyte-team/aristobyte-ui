import * as React from "react";

import { CodeBlock, TabSwitchWithSlidingIndicator } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type IImport = {
  unit: string;
  config: ConfigType;
  t: TranslateFunctionType;
};

export const Import: React.FC<IImport> = ({ unit, config, t }) => (
  <TabSwitchWithSlidingIndicator
    tabs={config.import.tabs.map((id) => ({
      buttonContent: <span key={id}>{t(`layout.import-tabs.${id}`)}</span>,
      content: (
        <CodeBlock
          code={`import { ${(config.import.components[unit!] || []).join(", ")} } from "@aristobyte-ui${id === "global" ? "" : "/" + unit}";`}
        />
      ),
    }))}
  />
);
