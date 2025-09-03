"use client";

import * as React from "react";

import styles from "./ColorPaletteWidget.module.scss";

export interface IColorPaletteWidget {}

export const IColorPaletteWidget: React.FC<IColorPaletteWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`color-palette-widget ${styles["color-palette-widget"]}`}
    />
  );
};
