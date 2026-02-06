"use client";

import * as React from "react";
import { Card, TypeBlock, Label } from "@/components";

import { useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";
import { components, propsMapping } from "@/config";

import "./Props.scss";

export interface IProps {
  category: string;
  unit: string;
}

export const Props: React.FC<IProps> = ({ category, unit }) => {
  const { t } = useTranslate();
  const mapping = propsMapping[category] && propsMapping[category][unit];

  if (!mapping) {
    return null;
  }

  return (
    <section className="props">
      <div className="props__container">
        <Card
          title={t(`layout.commonTitles.props.main`)}
          description={t(`layout.commonDescriptions.props`).replace(
            "{{components}}",
            components![category]![unit]!.join(", ")
          )}
          // @TODO: get rid of the size, color props of the `icon` prop instead of { component: Icons.Palette } we should be passing the Icons.Palette directly to the icon prop
          icon={{ component: Icons.Code, size: 20, color: "#00d492" }}
          label={{
            text: t("layout.labels.typescript"),
            backgroundColor: "#004f3b66",
            borderColor: "#00bc7d85",
            color: "#5ee9b5",
          }}
        >
          <ul className="props__components">
            {mapping.map((component, i) => (
              <li key={i} className="props__components-item">
                <Card
                  title={components[category]![unit]![i]}
                  icon={{ component: Icons.Dot, size: 8, color: "#51a2ff" }}
                >
                  <ul className="props__sections">
                    {component.sections.map((section, j) => (
                      <li className="props__sections-item" key={"" + i + j}>
                        <h5 className="props__sections-title">
                          {t(`layout.commonTitles.props.${section.id}`)}
                        </h5>
                        <ul className="props__list">
                          {section.props.map((prop, k) => (
                            <li className="props__item" key={"" + i + j + k}>
                              <div className="props__item-row">
                                <p className="props__item-name-container">
                                  <span className="props__item-name">
                                    {prop.id}
                                  </span>
                                  {prop.isRequired && (
                                    <Label
                                      text={t("layout.labels.required")}
                                      backgroundColor="#82181a66"
                                      borderColor="#fb2c364c"
                                      color="#ffa2a2"
                                    />
                                  )}
                                </p>
                                {prop.inlineType && (
                                  <p className="props__item-inline-type">
                                    <span className="props__item-inline-type-text">
                                      {prop.inlineType}
                                    </span>
                                    {prop.default && (
                                      <span
                                        className="props__item-inline-type-default"
                                        dangerouslySetInnerHTML={{
                                          __html: t(
                                            "layout.commonTitles.props.default"
                                          ).replace(
                                            "{{value}}",
                                            `<b>${prop.default}</b>`
                                          ),
                                        }}
                                      />
                                    )}
                                  </p>
                                )}
                              </div>
                              {prop.blockType && (
                                <TypeBlock code={prop.blockType} />
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};
