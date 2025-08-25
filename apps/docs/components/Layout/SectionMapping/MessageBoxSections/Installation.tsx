import * as React from "react";

import { TabSwitchWithSlidingIndicator } from "@aristobyte-ui/ui/components/TabSwitchWithSlidingIndicator/index";
import { MessageBox } from "@aristobyte-ui/message-box";
import { CodeBlock } from "@aristobyte-ui/ui/components/CodeBlock/index";

import { type ConfigType } from "@/config";
import { type TranslateFunctionType } from "@/data";

export type InstallationPropsType = {
  t: TranslateFunctionType;
  config: ConfigType;
};

export const Installation = ({ config, t }: InstallationPropsType) => (
  <>
    <TabSwitchWithSlidingIndicator
      tabs={config.tabs.installation.map(({ label, icon, script }) => ({
        buttonContent: (
          <>
            <span dangerouslySetInnerHTML={{ __html: icon }} />
            <span>{label}</span>
          </>
        ),
        content: (
          <CodeBlock
            code={`${script} @aristobyte-ui/message-box`}
            lang="bash"
            theme="laserwave"
            className="installation__code-block"
          />
        ),
      }))}
    />
    <MessageBox withIcon variant="warning" className="layout__warning">
      {t(`layout.components.message-box.installation.description`)}
    </MessageBox>
  </>
);
