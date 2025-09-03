"use client";

import * as React from "react";

import styles from "./ActivityFeed.module.scss";

export interface IActivityFeed {}

export const IActivityFeed: React.FC<IActivityFeed> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`activity-feed ${styles["activity-feed"]}`}
    />
  );
};
