"use client";

import * as React from "react";

export interface ICloudStorage {
  disabled?: boolean;
}

export const CloudStorage: React.FC<ICloudStorage> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="cloud-storage" />;
};
