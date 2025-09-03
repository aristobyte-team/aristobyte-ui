"use client";

import * as React from "react";

import styles from "./HabitTracker.module.scss";

export interface IHabitTracker {}

export const IHabitTracker: React.FC<IHabitTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`habit-tracker ${styles["habit-tracker"]}`}
    />
  );
};
