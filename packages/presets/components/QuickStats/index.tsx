"use client";

import * as React from "react";

import styles from "./QuickStats.module.scss";

export interface IQuickStats {}

export const IQuickStats: React.FC<IQuickStats> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`quick-stats ${styles["quick-stats"]}`}
    />
  );
};
