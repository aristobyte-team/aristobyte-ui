"use client";

import * as React from "react";

export interface IBudgetTracker {
  disabled?: boolean;
}

export const BudgetTracker: React.FC<IBudgetTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="budget-tracker" />;
};
