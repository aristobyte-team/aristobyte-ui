import * as React from "react";
import { useConfig, useTranslate } from "@/context";

import { Mapping } from "./mapping";

import "./PreviewBlocksMapping.scss";

export type PreviewBlocksMappingPropsType = {
  category: string;
  unit: string;
  section: string;
  className?: string;
};

export const PreviewBlocksMapping = ({
  category,
  unit,
  section,
  className,
}: PreviewBlocksMappingPropsType) => {
  const { config } = useConfig();
  const { t } = useTranslate();

  return (
    <div className={`preview-blocks-mapping ${className}`}>
      {React.createElement(Mapping(category, unit, section), { config, t })}
    </div>
  );
};
