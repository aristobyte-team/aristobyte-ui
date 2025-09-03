"use client";

import * as React from "react";

import styles from "./ActionButtons.module.scss";

export interface IActionButtons {}

export const IActionButtons: React.FC<IActionButtons> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`action-buttons ${styles["action-buttons"]}`}
    />
  );
};
