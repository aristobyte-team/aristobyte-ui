"use client";

import * as React from "react";

export interface IMouseTracker {
  disabled?: boolean;
}

export const MouseTracker: React.FC<IMouseTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="mouse-tracker" />;
};
