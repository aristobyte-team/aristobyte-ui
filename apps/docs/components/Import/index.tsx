"use client";

import * as React from "react";
import { useConfig, useTranslate } from "@/context";

import { CodeBlock } from "@aristobyte-ui/ui/components/CodeBlock/index";

import "./Import.scss";

export type ImportPropsType = {
  componentId: string;
};

export const Import = ({ componentId }: ImportPropsType) => {
  const { config } = useConfig();
  const { t } = useTranslate();
  const [activeId, setActiveId] = React.useState(config.import.tabs[0]!.id);
  const current = config.import.tabs.find(({ id }) => id === activeId) as {
    id: "individual" | "global";
  };
  const currentIndex = config.import.tabs.findIndex(
    ({ id }) => id === activeId
  )!;

  return (
    <div className="import">
      <div className="import__tabs">
        {config.import.tabs.map(({ id }) => (
          <button
            key={id}
            className={
              "import__tab" + (activeId === id ? " import__tab--active" : "")
            }
            onClick={() => setActiveId(id)}
          >
            <span>{t(`layout.components.importTabs.${id}`)}</span>
          </button>
        ))}
        <span
          className="import__bar"
          style={{ left: `${currentIndex * 80}px` }}
        />
      </div>
      <CodeBlock
        code={config.import[current.id][componentId]!}
        className="import__code-block"
      />
    </div>
  );
};
