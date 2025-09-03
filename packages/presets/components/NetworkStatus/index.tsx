"use client";

import * as React from "react";

import styles from "./NetworkStatus.module.scss";

export interface INetworkStatus {}

export const INetworkStatus: React.FC<INetworkStatus> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`network-status ${styles["network-status"]}`}
    />
  );
};
