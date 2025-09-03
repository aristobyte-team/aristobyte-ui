"use client";

import * as React from "react";

import styles from "./StreakCounter.module.scss";

export interface IStreakCounter {}

export const IStreakCounter: React.FC<IStreakCounter> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`streak-counter ${styles["streak-counter"]}`}
    />
  );
};
