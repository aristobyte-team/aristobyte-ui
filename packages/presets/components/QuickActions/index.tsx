"use client";

import * as React from "react";

import styles from "./QuickActions.module.scss";

export interface IQuickActions {}

export const QuickActions: React.FC<IQuickActions> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`quick-actions ${styles["quick-actions"]}`}
    />
  );
};
