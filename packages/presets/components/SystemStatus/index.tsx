"use client";

import * as React from "react";

export interface ISystemStatus {
  disabled?: boolean;
}

export const SystemStatus: React.FC<ISystemStatus> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="system-status" />;
};
