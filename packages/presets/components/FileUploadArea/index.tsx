"use client";

import * as React from "react";

import styles from "./FileUploadArea.module.scss";

export interface IFileUploadArea {
  disabled?: boolean;
}

export const FileUploadArea: React.FC<IFileUploadArea> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`file-upload-area ${styles["file-upload-area"]}`}
    />
  );
};
