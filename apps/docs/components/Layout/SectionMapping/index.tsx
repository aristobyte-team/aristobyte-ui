import * as React from "react";
import { mapping } from "./mapping";
import { useConfig, useTranslate } from "@/context";
import { LayoutSection } from "../LayoutSection";

export type SectionMappingPropsType = {
  category: string;
  unit: string;
};

export const SectionMapping = ({ category, unit }: SectionMappingPropsType) => {
  const { config } = useConfig();
  const { t } = useTranslate();

  return mapping[category]![unit]!.map((entry) => (
    <LayoutSection
      key={Object.keys(entry)[0]!}
      id={Object.keys(entry)[0]!}
      category={category}
      unit={unit}
    >
      {React.createElement(entry[Object.keys(entry)[0]!]!, {
        category,
        unit,
        section: Object.keys(entry)[0]!,
        config,
        t,
      })}
    </LayoutSection>
  ));
};
