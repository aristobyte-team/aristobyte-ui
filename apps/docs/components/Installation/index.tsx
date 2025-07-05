"use client";

import * as React from "react";
import { CodeBlock } from "@aristobyte-ui/ui/components/CodeBlock/index";

import { useConfig } from "@/context";

import "./Installation.scss";

export type InstallationPropsType = {
  packageToInstall: string;
};

export const Installation = ({ packageToInstall }: InstallationPropsType) => {
  const {
    config: { installation },
  } = useConfig();
  const [activeId, setActiveId] = React.useState(installation[0]!.id);
  const current = installation.find(({ id }) => id === activeId)!;
  const currentIndex = installation.findIndex(({ id }) => id === activeId)!;

  return (
    <div className="installation">
      <div className="installation__tabs">
        {installation.map(({ id, label, icon }) => (
          <button
            key={id}
            className={
              "installation__tab" +
              (activeId === id ? " installation__tab--active" : "")
            }
            onClick={() => setActiveId(id)}
          >
            <span dangerouslySetInnerHTML={{ __html: icon }} />
            <span>{label}</span>
          </button>
        ))}
        <span
          className="installation__bar"
          style={{
            left: `${currentIndex * 80}px`,
          }}
        />
      </div>
      <CodeBlock
        code={`${current.script} ${packageToInstall}`}
        lang="bash"
        theme="laserwave"
        className="installation__code-block"
      />
    </div>
  );
};
