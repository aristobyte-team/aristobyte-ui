"use client";

import * as React from "react";

export interface INetworkStatus {
  disabled?: boolean;
}

export const NetworkStatus: React.FC<INetworkStatus> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="network-status" />;
};
