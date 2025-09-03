"use client";

import * as React from "react";

import styles from "./InspirationWidget.module.scss";

export interface IInspirationWidget {}

export const IInspirationWidget: React.FC<IInspirationWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`inspiration-widget ${styles["inspiration-widget"]}`}
    />
  );
};
