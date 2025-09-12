"use client";

import * as React from "react";

export interface IDeviceStatus {
  disabled?: boolean;
}

export const DeviceStatus: React.FC<IDeviceStatus> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="device-status" />;
};
