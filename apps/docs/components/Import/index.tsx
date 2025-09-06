"use client";

import * as React from "react";

import { Card, CodeBlock, Label, Button } from "@/components";

import { useConfig, useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";
import { CodeBlocks, Helpers } from "@/config";

import "./Import.scss";

export type IImport = {
  category: string;
  unit: string;
};

export const Import: React.FC<IImport> = ({ category, unit }) => {
  const { config } = useConfig();
  const { t } = useTranslate();
  // @TODO: @CONFIG - get a loading state for the config so we display the loading and make sure that everything we read from the config is never undefined once the loading is finished
  const [importTab, setImportTab] = React.useState<
    (typeof config.importTabs)[0]
  >(config.importTabs[0]!);

  return (
    <section className="import">
      <div className="import__container">
        <Card
          icon={{ component: Icons.PaperCode, size: 26, color: "#51a2ff" }}
          label={{
            text: t("layout.labels.es6Modules"),
            backgroundColor: "#1c398e66",
            borderColor: "#2b7fff4c",
            color: "#8ec5ff",
          }}
          title={t("layout.commonTitles.import")}
          description={t("layout.commonDescriptions.import")}
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
                  className={importTab === id ? " custom-button--active" : ""}
                >
                  {t(`layout.import-tabs.${id}`)}
                </Button>
              </li>
            ))}
          </ul>
          <h3 className="import__import-type-active">
            <span>{t("layout.commonTitles.importMethod")}</span>
            <Label
              text={t(`layout.import-tabs.${importTab}`)}
              color="#d3d3d3"
            />
          </h3>
          <CodeBlock
            icon={{ component: Icons.PaperCode, size: 18, color: "#51a2ff" }}
            code={Helpers.getPackageImportCode(
              category,
              unit,
              config.import[category]![unit!]!,
              importTab === "global"
            )}
          />
          ;
          <div className="import__cards">
            <Card
              title={t("layout.commonTitles.individualPackage")}
              description={Helpers.insertPackageToText(
                t("layout.commonDescriptions.importIndividualPackage"),
                Helpers.getPackage(category, unit)
              )}
              icon={{ component: Icons.Package, size: 20, color: "#c27aff" }}
              {...(importTab === config.importTabs[0] && {
                style: { borderColor: "#51a2ff4c" },
              })}
            >
              <p className="import__alt-text">
                <Icons.Dot size={8} color="#05df72" />
                {t("layout.commonDescriptions.importIndividualPackageAltText")}
              </p>
            </Card>
            <Card
              title={t("layout.commonTitles.globalLibrary")}
              description={t("layout.commonDescriptions.importGlobalLibrary")}
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
                {t("layout.commonDescriptions.importGlobalLibraryAltText")}
              </p>
            </Card>
          </div>
          <Card
            title={t(`layout.commonTitles.usage`)}
            description={t(`layout.commonDescriptions.usage`)}
            icon={{ component: Icons.Code, size: 20, color: "#00d492" }}
          >
            <CodeBlock code={CodeBlocks![category]![unit]!.usage!} />
          </Card>
        </Card>
      </div>
    </section>
  );
};
