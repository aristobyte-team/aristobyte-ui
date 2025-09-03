"use client";

import * as React from "react";

import styles from "./PhotoEditor.module.scss";

export interface IPhotoEditor {}

export const IPhotoEditor: React.FC<IPhotoEditor> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`photo-editor ${styles["photo-editor"]}`}
    />
  );
};
