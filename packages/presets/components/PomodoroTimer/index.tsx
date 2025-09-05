"use client";

import * as React from "react";

import styles from "./PomodoroTimer.module.scss";

export interface IPomodoroTimer {
  disabled?: boolean;
}

export const PomodoroTimer: React.FC<IPomodoroTimer> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`pomodoro-timer ${styles["pomodoro-timer"]}`}
    />
  );
};
