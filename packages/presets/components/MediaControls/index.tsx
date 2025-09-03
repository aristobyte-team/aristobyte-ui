"use client";

import * as React from "react";

import styles from "./MediaControls.module.scss";

export interface IMediaControls {}

export const MediaControls: React.FC<IMediaControls> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`media-controls ${styles["media-controls"]}`}
    />
  );
};
