"use client";

import * as React from "react";

import styles from "./CloudStorage.module.scss";

export interface ICloudStorage {}

export const CloudStorage: React.FC<ICloudStorage> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`cloud-storage ${styles["cloud-storage"]}`}
    />
  );
};
