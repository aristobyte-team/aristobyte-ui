"use client";

import * as React from "react";

import styles from "./NavigationPills.module.scss";

export interface INavigationPills {}

export const INavigationPills: React.FC<INavigationPills> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`navigation-pills ${styles["navigation-pills"]}`}
    />
  );
};
