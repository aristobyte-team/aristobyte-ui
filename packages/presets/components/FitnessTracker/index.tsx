"use client";

import * as React from "react";

import styles from "./FitnessTracker.module.scss";

export interface IFitnessTracker {}

export const IFitnessTracker: React.FC<IFitnessTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`fitness-tracker ${styles["fitness-tracker"]}`}
    />
  );
};
