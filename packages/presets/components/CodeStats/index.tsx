"use client";

import * as React from "react";

import styles from "./CodeStats.module.scss";

export interface ICodeStats {}

export const CodeStats: React.FC<ICodeStats> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`code-stats ${styles["code-stats"]}`}
    />
  );
};
