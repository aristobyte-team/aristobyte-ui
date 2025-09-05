"use client";

import * as React from "react";

import styles from "./OfficeBuildingWidget.module.scss";

export interface IOfficeBuildingWidget {
  disabled?: boolean;
}

export const OfficeBuildingWidget: React.FC<IOfficeBuildingWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`office-building-widget ${styles["office-building-widget"]}`}
    />
  );
};
