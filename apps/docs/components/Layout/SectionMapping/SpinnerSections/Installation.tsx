import * as React from "react";

import { TabSwitchWithSlidingIndicator } from "@/components";
import { MessageBox } from "@aristobyte-ui/message-box";
import { CodeBlock } from "@/components";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type InstallationPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Installation = ({ config, t }: InstallationPropsType) => (
  <>
    <TabSwitchWithSlidingIndicator
      tabs={config.tabs.installation.map(({ label, Icon, script }) => ({
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
            code={`${script} @aristobyte-ui/spinner`}
            lang="bash"
            theme="laserwave"
            className="installation__code-block"
          />
        ),
      }))}
    />
    <MessageBox withIcon variant="warning" className="layout__warning">
      {t(`layout.components.spinner.installation.description`)}
    </MessageBox>
  </>
);
