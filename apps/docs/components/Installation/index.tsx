import * as React from "react";

import { TabSwitchWithSlidingIndicator } from "@/components";
import { MessageBox } from "@aristobyte-ui/message-box";
import { CodeBlock } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export interface IInstallation {
  category: string;
  unit: string;
  t: TranslateFunctionType;
  config: ConfigType;
}

export const Installation: React.FC<IInstallation> = ({
  category,
  unit,
  config,
  t,
}) => (
  <>
    <TabSwitchWithSlidingIndicator
      tabs={config.installation.map(({ label, Icon, script }) => ({
        buttonContent: (
          <>
            <span>
              <Icon />
            </span>
            <span>{label}</span>
          </>
        ),
        content: (
          <CodeBlock
            code={`${script} @aristobyte-ui/${unit}`}
            lang="bash"
            theme="laserwave"
          />
        ),
      }))}
    />
    <MessageBox withIcon variant="warning" className="layout__warning">
      {t(`layout.${category}.${unit}.installation.description`)}
    </MessageBox>
  </>
);
