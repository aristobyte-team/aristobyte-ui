"use client";

import * as React from "react";

import styles from "./ColorPaletteWidget.module.scss";

export interface IColorPaletteWidget {
  disabled?: boolean;
}

export const ColorPaletteWidget: React.FC<IColorPaletteWidget> = ({
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
