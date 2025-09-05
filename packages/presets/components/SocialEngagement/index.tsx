"use client";

import * as React from "react";

import styles from "./SocialEngagement.module.scss";

export interface ISocialEngagement {
  disabled?: boolean;
}

export const SocialEngagement: React.FC<ISocialEngagement> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`social-engagement ${styles["social-engagement"]}`}
    />
  );
};
