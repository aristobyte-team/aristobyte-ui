import * as React from "react";
import { Mapping } from "./mapping";
import { useConfig, useTranslate } from "@/context";
import { LayoutSection } from "../LayoutSection";

export type SectionMappingPropsType = {
  category: string;
  unit: string;
};

export const SectionMapping = ({ category, unit }: SectionMappingPropsType) => {
  const { config } = useConfig();
  const { t } = useTranslate();

  return Mapping({ category, unit, config, t }).map(
    ({ childComponent, props }) => (
      <LayoutSection key={props.id} {...props}>
        {React.createElement(childComponent, { config, t })}
      </LayoutSection>
    )
  );
};
