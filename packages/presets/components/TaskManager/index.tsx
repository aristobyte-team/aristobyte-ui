"use client";

import * as React from "react";

import styles from "./TaskManager.module.scss";

export interface ITaskManager {}

export const ITaskManager: React.FC<ITaskManager> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`task-manager ${styles["task-manager"]}`}
    />
  );
};
