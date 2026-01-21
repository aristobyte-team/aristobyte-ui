"use client";

import * as React from "react";

export interface IActionButtons {
  disabled?: boolean;
}

export const ActionButtons: React.FC<IActionButtons> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="action-buttons" />;
};
