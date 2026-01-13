import * as React from "react";

import "./Label.css";

export interface ILabel {
  text: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const Label: React.FC<ILabel> = ({
  text,
  color,
  backgroundColor,
  borderColor,
}) => (
  <label className="label" style={{ backgroundColor, borderColor, color }}>
    {text}
  </label>
);
