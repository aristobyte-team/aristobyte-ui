"use client";

import * as React from "react";

import styles from "./MouseTracker.module.scss";

export interface IMouseTracker {}

export const IMouseTracker: React.FC<IMouseTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`mouse-tracker ${styles["mouse-tracker"]}`}
    />
  );
};
