"use client";

import * as React from "react";

import styles from "./DatabaseWidget.module.scss";

export interface IDatabaseWidget {}

export const IDatabaseWidget: React.FC<IDatabaseWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`database-widget ${styles["database-widget"]}`}
    />
  );
};
