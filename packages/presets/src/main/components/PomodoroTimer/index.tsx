"use client";

import * as React from "react";

export interface IPomodoroTimer {
  disabled?: boolean;
}

export const PomodoroTimer: React.FC<IPomodoroTimer> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="pomodoro-timer" />;
};
