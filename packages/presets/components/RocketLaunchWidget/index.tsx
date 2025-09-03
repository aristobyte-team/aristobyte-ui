"use client";

import * as React from "react";

import styles from "./RocketLaunchWidget.module.scss";

export interface IRocketLaunchWidget {}

export const RocketLaunchWidget: React.FC<IRocketLaunchWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`rocket-launch-widget ${styles["rocket-launch-widget"]}`}
    />
  );
};
