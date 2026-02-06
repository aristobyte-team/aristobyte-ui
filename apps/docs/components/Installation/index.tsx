"use client";

import * as React from "react";

import { CodeBlock, Label, Card, Button } from "@/components";

import { useConfig, useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";
import { Helpers } from "@/config";

import "./Installation.scss";

export interface IInstallation {
  category: string;
  unit: string;
}

export const Installation: React.FC<IInstallation> = ({ category, unit }) => {
  const { config } = useConfig();
  const { t } = useTranslate();
  const [packageManager, setPackageManager] = React.useState<
    (typeof config.installation)[0]
  >(config.installation[0]!);

  return (
    <section className="installation">
      <div className="installation__container">
        <Card
          icon={{ component: Icons.BashCursor, size: 26, color: "#5ee9b5" }}
          label={{
            text: t("layout.labels.required"),
            backgroundColor: "#004f3b66",
            borderColor: "#00bc7d85",
            color: "#5ee9b5",
          }}
          title={t("layout.commonTitles.installation")}
          description={Helpers.insertPackageToText(
            t("layout.commonDescriptions.installation"),
            Helpers.getPackage(category, unit)
          )}
        >
          <Card
            title={t(`layout.${category}.${unit}.installation.title`)}
            description={t(
              `layout.${category}.${unit}.installation.description`
            )}
            icon={{ component: Icons.Dot, size: 8, color: "#51a2ff" }}
          />

          <ul className="installation__pkm-buttons">
            {config.installation.map((pkm) => (
              <li key={pkm.label}>
                <Button
                  icon={{ component: pkm.icon }}
                  onClick={() => setPackageManager(pkm)}
                  className={
                    pkm.label === packageManager.label
                      ? "custom-button--active"
                      : ""
                  }
                >
                  {pkm.label}
                </Button>
              </li>
            ))}
          </ul>

          <h3 className="installation__pkm-active">
            <span>{t("layout.commonTitles.packageManager")}</span>
            <Label text={packageManager.label} color="#d3d3d3" />
          </h3>

          <CodeBlock
            icon={{ component: Icons.BashCursor, size: 18, color: "#5ee9b5" }}
            code={Helpers.parseInstallationScript(
              packageManager.script,
              category,
              unit
            )}
            lang="bash"
            theme="dracula-soft"
          />

          <div className="installation__cards">
            <Card
              title={t("layout.commonTitles.individualPackage")}
              description={Helpers.insertPackageToText(
                t("layout.commonDescriptions.installationIndividualPackage"),
                Helpers.getPackage(category, unit)
              )}
              icon={{ component: Icons.Package, size: 20, color: "#51a2ff" }}
            />
            <Card
              title={t("layout.commonTitles.fullLibrary")}
              description={t(
                "layout.commonDescriptions.installationFullLibrary"
              )}
              icon={{
                component: Icons.GradientSquare,
                colors: ["#51a2ff", "#c27aff"],
                size: 20,
              }}
              style={{ borderColor: "#314158" }}
            />
          </div>
        </Card>
      </div>
    </section>
  );
};
