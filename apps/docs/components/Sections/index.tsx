"use client";

import * as React from "react";
import { Button, Card, CodeBlock } from "@/components";

import { useConfig, useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";
import { CodeBlocks } from "@/config";

import { mapping } from "./mapping";

import "./Sections.css";

export interface ISections {
  category: string;
  unit: string;
}

export interface ITabs {
  category: string;
  unit: string;
  section: string;
}

const Tabs: React.FC<ITabs> = ({ category, unit, section }) => {
  const { t } = useTranslate();
  const {
    config: {
      tabs: { codePreview: tabs },
    },
  } = useConfig();
  const [height, setHeight] = React.useState(0);
  const [activeView, setActiveView] = React.useState<string>(tabs[0]!);
  const codeRef = React.useRef<HTMLDivElement>(null);
  const previewRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setHeight(
      activeView === "preview"
        ? previewRef.current!.offsetHeight
        : codeRef.current!.offsetHeight
    );
  }, [activeView]);

  return (
    <>
      <ul className="sections__buttons">
        {tabs.map((id) => (
          <li key={category + unit + id}>
            <Button
              icon={{
                component: id === "preview" ? Icons.Eye : Icons.Code,
                size: 26,
                color: id === "preview" ? "#fff" : "#fff",
              }}
              onClick={() => setActiveView(id)}
              className={activeView === id ? " custom-button--active" : ""}
            >
              {t(`layout.codePreview.${id}`)}
            </Button>
          </li>
        ))}
      </ul>
      <Card
        title={t(`layout.codePreview.${activeView}`)}
        icon={{
          component: activeView === "preview" ? Icons.Eye : Icons.Code,
          size: 26,
          color: activeView === "preview" ? "#c27aff" : "#00d492",
        }}
      >
        <div style={{ height }} className="sections__code-preview">
          <div
            ref={previewRef}
            className={`sections__preview ${activeView === "preview" ? " sections__preview--active" : ""}`}
          >
            {mapping![category]![unit]![section]!()}
          </div>
          <div
            ref={codeRef}
            className={`sections__code ${activeView === "code" ? " sections__code--active" : ""}`}
          >
            <CodeBlock code={CodeBlocks![category]![unit]![section]!} />
          </div>
        </div>
      </Card>
    </>
  );
};

export const Sections: React.FC<ISections> = ({ category, unit }) => {
  const { t } = useTranslate();

  return Object.keys(mapping![category]![unit]!).map((section, i) => (
    <section key={i} className="sections">
      <div key={i} className="sections__container">
        <Card
          title={t(`layout.${category}.${unit}.${section}.title`)}
          description={t(`layout.${category}.${unit}.${section}.description`)}
          // @TODO: get rid of the size, color props of the `icon` prop instead of { component: Icons.Palette } we should be passing the Icons.Palette directly to the icon prop
          icon={{ component: Icons.Palette, size: 26, color: "#c27aff" }}
          label={{
            text: t("layout.labels.core"),
            backgroundColor: "#59168b66",
            borderColor: "#ad46ff4c",
            color: "#dab2ff",
          }}
        >
          <Tabs category={category} unit={unit} section={section} />
          <Card
            title={t(`layout.${category}.${unit}.${section}.guidelines.title`)}
            icon={{ component: Icons.Palette, size: 26, color: "#c27aff" }}
            className="sections__guidelines"
          >
            <div className="sections__guidelines-container">
              {[...Array(2).keys()].map((i) => (
                <ul key={i} className="sections__guidelines-list">
                  <h5 className="sections__guidelines-subtitle">
                    {t(
                      `layout.${category}.${unit}.${section}.guidelines.subtitle${i + 1}`
                    )}
                  </h5>
                  {[...Array(4).keys()].map((j) => (
                    <li key={"" + i + j} className="sections__guidelines-item">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: t(
                            `layout.${category}.${unit}.${section}.guidelines.list${i + 1}.element${j + 1}`
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Card>
        </Card>
      </div>
    </section>
  ));
};
