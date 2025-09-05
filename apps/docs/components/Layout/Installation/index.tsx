import * as React from "react";

import { Icons } from "@aristobyte-ui/utils";
import { Button } from "@aristobyte-ui/button";
import { CodeBlock, Label, Card } from "@/components";

import { useConfig, useTranslate } from "@/context";

import "./Installation.scss";

export interface IInstallation {
  category: string;
  unit: string;
}

const getScript = (category: string, unit: string, script: string) => {
  if (category === "presets") {
    return script.replace("{{package}}", category);
  }

  return script.replace("{{package}}", unit);
};

export const Installation: React.FC<IInstallation> = ({ category, unit }) => {
  const { config } = useConfig();
  const { t } = useTranslate();
  const [packageManager, setPackageManager] = React.useState<
    (typeof config.installation)[0]
  >(config.installation[0]!);

  return (
    <section className="installation">
      <div className="installation__container">
        {/* @TODO: @DATA */}
        <Card
          icon={{ component: Icons.BashCursor, size: 26, color: "#5ee9b5" }}
          label={{
            text: "Required",
            backgroundColor: "#004f3b66",
            borderColor: "#00bc7d85",
            color: "#5ee9b5",
          }}
          title="Installation"
          description="Install the <b>Button</b> component individually or as part of the complete <b>@aristobyte-ui</b> library."
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
                    "installation__pkm-button" +
                    (pkm.label === packageManager.label
                      ? " installation__pkm-button--active"
                      : "")
                  }
                >
                  {pkm.label}
                </Button>
              </li>
            ))}
          </ul>

          <h3 className="installation__pkm-active">
            <span>Package Manager</span>
            <Label text={packageManager.label} color="#d3d3d3" />
          </h3>

          <CodeBlock
            icon={{ component: Icons.BashCursor, size: 18, color: "#5ee9b5" }}
            code={getScript(category, unit, packageManager.script)}
            lang="bash"
            theme="dracula-soft"
          />

          <div className="installation__cards">
            <Card
              title="Individual Package"
              description="Install only the Button component if you need specific functionality."
              icon={{ component: Icons.Package, size: 20, color: "#51a2ff" }}
            />
            <Card
              title="Full Library"
              description="Skip this if you have the complete @aristobyte-ui already installed."
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
