"use client";

import * as React from "react";

import styles from "./StatisticsCards.module.scss";

export interface IStatisticsCards {
  disabled?: boolean;
}

export const StatisticsCards: React.FC<IStatisticsCards> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`statistics-cards ${styles["statistics-cards"]}`}
    />
  );
};
