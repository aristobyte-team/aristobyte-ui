"use client";

import * as React from "react";

import styles from "./DesignSystem.module.scss";

export interface IDesignSystem {}

export const DesignSystem: React.FC<IDesignSystem> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`design-system ${styles["design-system"]}`}
    />
  );
};
