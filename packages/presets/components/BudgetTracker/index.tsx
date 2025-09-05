"use client";

import * as React from "react";

import styles from "./BudgetTracker.module.scss";

export interface IBudgetTracker {
  disabled?: boolean;
}

export const BudgetTracker: React.FC<IBudgetTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`budget-tracker ${styles["budget-tracker"]}`}
    />
  );
};
