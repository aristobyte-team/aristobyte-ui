"use client";

import * as React from "react";

import styles from "./ToolWidget.module.scss";

export interface IToolWidget {}

export const IToolWidget: React.FC<IToolWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`tool-widget ${styles["tool-widget"]}`}
    />
  );
};
