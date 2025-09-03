"use client";

import * as React from "react";

import styles from "./MusicProduction.module.scss";

export interface IMusicProduction {}

export const MusicProduction: React.FC<IMusicProduction> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`music-production ${styles["music-production"]}`}
    />
  );
};
