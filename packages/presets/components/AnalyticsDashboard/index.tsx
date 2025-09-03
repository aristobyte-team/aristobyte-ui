"use client";

import * as React from "react";

import styles from "./AnalyticsDashboard.module.scss";

export interface IAnalyticsDashboard {}

export const IAnalyticsDashboard: React.FC<IAnalyticsDashboard> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`analytics-dashboard ${styles["analytics-dashboard"]}`}
    />
  );
};
