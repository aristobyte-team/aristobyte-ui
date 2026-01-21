"use client";

import * as React from "react";

export interface IProgressTracker {
  disabled?: boolean;
}

export const ProgressTracker: React.FC<IProgressTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="progress-tracker" />;
};
