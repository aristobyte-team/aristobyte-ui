"use client";

import * as React from "react";

export interface IQuickActions {
  disabled?: boolean;
}

export const QuickActions: React.FC<IQuickActions> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="quick-actions" />;
};
