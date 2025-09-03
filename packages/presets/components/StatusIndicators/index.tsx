"use client";

import * as React from "react";

import styles from "./StatusIndicators.module.scss";

export interface IStatusIndicators {}

export const StatusIndicators: React.FC<IStatusIndicators> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`status-indicators ${styles["status-indicators"]}`}
    />
  );
};
