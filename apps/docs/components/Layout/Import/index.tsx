import * as React from "react";

import { Card, CodeBlock, Label } from "@/components";

import { useConfig, useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";
import { Button } from "@aristobyte-ui/button";

import "./Import.scss";
import { CodeBlocks } from "@/config";

export type IImport = {
  category: string;
  unit: string;
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

export const Import: React.FC<IImport> = ({ category, unit }) => {
  const { config } = useConfig();
  const { t } = useTranslate();
  const [importTab, setImportTab] = React.useState<
    (typeof config.importTabs)[0]
  >(config.importTabs[0]!);

  return (
    <section className="import">
      <div className="import__container">
        {/* @TODO: @DATA */}
        <Card
          icon={{ component: Icons.PaperCode, size: 26, color: "#51a2ff" }}
          label={{
            text: "ES6 Modules",
            backgroundColor: "#1c398e66",
            borderColor: "#2b7fff4c",
            color: "#8ec5ff",
          }}
          title="Import"
          description="Install the <b>Button</b> component individually or as part of the complete <b>@aristobyte-ui</b> library."
        >
          <Card
            title={t(`layout.${category}.${unit}.import.title`)}
            description={t(`layout.${category}.${unit}.import.description`)}
            icon={{ component: Icons.Dot, size: 8, color: "#51a2ff" }}
          />
          <ul className="import__import-type-buttons">
            {config.importTabs.map((id) => (
              <li key={id}>
                <Button
                  onClick={() => setImportTab(id)}
                  className={
                    "import__import-type-button" +
                    (importTab === id
                      ? " import__import-type-button--active"
                      : "")
                  }
                >
                  {t(`layout.import-tabs.${id}`)}
                </Button>
              </li>
            ))}
          </ul>
          <h3 className="import__import-type-active">
            <span>Import Method</span>
            <Label
              text={t(`layout.import-tabs.${importTab}`)}
              color="#d3d3d3"
            />
          </h3>
          <CodeBlock
            icon={{ component: Icons.PaperCode, size: 18, color: "#51a2ff" }}
            code={renderCode(
              category,
              unit,
              config.import[category]![unit!] || [],
              importTab === "global"
            )}
          />
          ;
          <div className="import__cards">
            <Card
              title="Individual Package"
              description="Import directly from the Button package for optimal tree-shaking and smaller bundle sizes."
              icon={{ component: Icons.Package, size: 20, color: "#c27aff" }}
              {...(importTab === config.importTabs[0] && {
                style: { borderColor: "#51a2ff4c" },
              })}
            >
              <p className="import__alt-text">
                <Icons.Dot size={8} color="#05df72" />
                Recommended for component-specific usage
              </p>
            </Card>
            <Card
              title="Global Library"
              description="Import from the main library package when using multiple components from AristoByte UI."
              icon={{
                component: Icons.GradientSquare,
                colors: ["#51a2ff", "#c27aff"],
                size: 20,
              }}
              {...(importTab === config.importTabs[1] && {
                style: { borderColor: "#51a2ff4c" },
              })}
            >
              <p className="import__alt-text">
                <Icons.Dot size={8} color="#51a2ff" />
                Recommended for component-specific usage
              </p>
            </Card>
          </div>
          <Card
            title={t(`layout.${category}.${unit}.usage.title`)}
            description={t(`layout.${category}.${unit}.usage.description`)}
            icon={{ component: Icons.Code, size: 20, color: "#00d492" }}
          >
            <CodeBlock code={CodeBlocks![category]![unit]!.usage!}></CodeBlock>
          </Card>
        </Card>
      </div>
    </section>
  );
};
