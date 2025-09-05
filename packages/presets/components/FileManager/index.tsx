"use client";

import * as React from "react";

import styles from "./FileManager.module.scss";

export interface IFileManager {
  disabled?: boolean;
}

export const FileManager: React.FC<IFileManager> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`file-manager ${styles["file-manager"]}`}
    />
  );
};
