"use client";

import * as React from "react";

export interface IColorPaletteWidget {
  disabled?: boolean;
}

export const ColorPaletteWidget: React.FC<IColorPaletteWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="color-palette-widget" />;
};
