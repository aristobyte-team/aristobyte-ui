import * as React from "react";
import { useConfig, useTranslate } from "@/context";

import { TabSwitchWithSlidingIndicator } from "../../TabSwitchWithSlidingIndicator";
import { CodeBlock } from "../../CodeBlock";

import { PreviewBlocksMapping } from "./PreviewBlocksMapping";

import { type TranslateFunctionType } from "@/data";

export type CodePreviewPropsType = {
  unit: string;
  section: string;
};

const renderTitle = (id: string, t: TranslateFunctionType) => {
  return <span key={id}>{t(`codePreview.${id}`)}</span>;
};

export const CodePreview = ({ unit, section }: CodePreviewPropsType) => {
  const { t } = useTranslate();
  const { config } = useConfig();

  const [code, preview] = config.tabs.codePreview as [
    {
      id: string;
      content: {
        [unit: string]: {
          [unitSection: string]: string;
        };
      };
    },
    {
      id: string;
      content: {
        [unit: string]: {
          [unitSection: string]: {
            category: string;
            unit: string;
            section: string;
          };
        };
      };
    },
  ];

  return (
    <TabSwitchWithSlidingIndicator
      tabs={[
        {
          buttonContent: renderTitle(preview.id, t),
          content: (
            <PreviewBlocksMapping
              {...preview.content[unit]![section]!}
              className="preview-blocks-mapping__preview-block"
            />
          ),
        },
        {
          buttonContent: renderTitle(code.id, t),
          content: <CodeBlock code={code.content[unit]![section]!} />,
        },
      ]}
    />
  );
};
