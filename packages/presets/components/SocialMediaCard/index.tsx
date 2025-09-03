"use client";

import * as React from "react";

import styles from "./SocialMediaCard.module.scss";

export interface ISocialMediaCard {}

export const ISocialMediaCard: React.FC<ISocialMediaCard> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`social-media-card ${styles["social-media-card"]}`}
    />
  );
};
