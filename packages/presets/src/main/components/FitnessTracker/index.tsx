"use client";

import * as React from "react";

export interface IFitnessTracker {
  disabled?: boolean;
}

export const FitnessTracker: React.FC<IFitnessTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="fitness-tracker" />;
};
