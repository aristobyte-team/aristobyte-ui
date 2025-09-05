"use client";

import * as React from "react";

import styles from "./ReadingProgress.module.scss";

export interface IReadingProgress {
  disabled?: boolean;
}

export const ReadingProgress: React.FC<IReadingProgress> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`reading-progress ${styles["reading-progress"]}`}
    />
  );
};
