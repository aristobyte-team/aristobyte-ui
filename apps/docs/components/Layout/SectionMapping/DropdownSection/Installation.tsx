import * as React from "react";

import { TabSwitchWithSlidingIndicator } from "../../../TabSwitchWithSlidingIndicator";
import { CodeBlock } from "../../../CodeBlock";
import { MessageBox } from "@aristobyte-ui/message-box";

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
            code={`${script} @aristobyte-ui/dropdown`}
            lang="bash"
            theme="laserwave"
            className="installation__code-block"
          />
        ),
      }))}
    />
    <MessageBox withIcon variant="warning" className="layout__warning">
      {t(`layout.components.dropdown.installation.description`)}
    </MessageBox>
  </>
);
