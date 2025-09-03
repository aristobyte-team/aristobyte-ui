"use client";

import * as React from "react";

import styles from "./NatureWidget.module.scss";

export interface INatureWidget {}

export const NatureWidget: React.FC<INatureWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`nature-widget ${styles["nature-widget"]}`}
    />
  );
};
