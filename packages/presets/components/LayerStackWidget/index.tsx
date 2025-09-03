"use client";

import * as React from "react";

import styles from "./LayerStackWidget.module.scss";

export interface ILayerStackWidget {}

export const ILayerStackWidget: React.FC<ILayerStackWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`layer-stack-widget ${styles["layer-stack-widget"]}`}
    />
  );
};
