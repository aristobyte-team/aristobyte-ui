"use client";

import * as React from "react";

import styles from "./MusicPlayer.module.scss";

export interface IMusicPlayer {}

export const MusicPlayer: React.FC<IMusicPlayer> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`music-player ${styles["music-player"]}`}
    />
  );
};
