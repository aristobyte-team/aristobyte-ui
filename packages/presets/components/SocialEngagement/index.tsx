"use client";

import * as React from "react";

import styles from "./SocialEngagement.module.scss";

export interface ISocialEngagement {}

export const ISocialEngagement: React.FC<ISocialEngagement> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`social-engagement ${styles["social-engagement"]}`}
    />
  );
};
