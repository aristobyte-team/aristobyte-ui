"use client";

import * as React from "react";

export interface IQuickStats {
  disabled?: boolean;
}

export const QuickStats: React.FC<IQuickStats> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="quick-stats" />;
};
