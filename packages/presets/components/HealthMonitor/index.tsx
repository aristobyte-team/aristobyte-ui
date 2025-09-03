"use client";

import * as React from "react";

import styles from "./HealthMonitor.module.scss";

export interface IHealthMonitor {}

export const IHealthMonitor: React.FC<IHealthMonitor> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`health-monitor ${styles["health-monitor"]}`}
    />
  );
};
