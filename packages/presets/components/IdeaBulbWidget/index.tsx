"use client";

import * as React from "react";

import styles from "./IdeaBulbWidget.module.scss";

export interface IIdeaBulbWidget {
  disabled?: boolean;
}

export const IdeaBulbWidget: React.FC<IIdeaBulbWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`idea-bulb-widget ${styles["idea-bulb-widget"]}`}
    />
  );
};
