"use client";

import * as React from "react";

import styles from "./TimeLocationWidget.module.scss";

export interface ITimeLocationWidget {}

export const TimeLocationWidget: React.FC<ITimeLocationWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`time-location-widget ${styles["time-location-widget"]}`}
    />
  );
};
