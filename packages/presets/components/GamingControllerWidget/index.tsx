"use client";

import * as React from "react";

import styles from "./GamingControllerWidget.module.scss";

export interface IGamingControllerWidget {}

export const GamingControllerWidget: React.FC<IGamingControllerWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`gaming-controller-widget ${styles["gaming-controller-widget"]}`}
    />
  );
};
