"use client";

import * as React from "react";

import styles from "./SystemStatus.module.scss";

export interface ISystemStatus {}

export const ISystemStatus: React.FC<ISystemStatus> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`system-status ${styles["system-status"]}`}
    />
  );
};
