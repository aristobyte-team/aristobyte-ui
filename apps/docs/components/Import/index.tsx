import * as React from "react";

import { CodeBlock, TabSwitchWithSlidingIndicator } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type IImport = {
  category: string;
  unit: string;
  config: ConfigType;
  t: TranslateFunctionType;
};

const renderCode = (
  category: string,
  unit: string,
  componentToImportArr: string[],
  isGlobal: boolean
) => {
  switch (category) {
    case "components":
    default:
      return `import { ${componentToImportArr.join(", ")} } from "@aristobyte-ui${isGlobal ? "" : "/" + unit}";`;
    case "presets":
      return `import { ${componentToImportArr.join(", ")} } from "@aristobyte-ui${isGlobal ? "" : "/" + category}";`;
  }
};

export const Import: React.FC<IImport> = ({ category, unit, config, t }) => (
  <TabSwitchWithSlidingIndicator
    tabs={config.importTabs.map((id) => ({
      buttonContent: <span key={id}>{t(`layout.import-tabs.${id}`)}</span>,
      content: (
        <CodeBlock
          code={renderCode(
            category,
            unit,
            config.import[category]![unit!] || [],
            id === "global"
          )}
        />
      ),
    }))}
  />
);
