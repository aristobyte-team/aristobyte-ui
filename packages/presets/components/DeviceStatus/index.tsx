"use client";

import * as React from "react";

import styles from "./DeviceStatus.module.scss";

export interface IDeviceStatus {}

export const DeviceStatus: React.FC<IDeviceStatus> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`device-status ${styles["device-status"]}`}
    />
  );
};
