"use client";

import * as React from "react";

import styles from "./SettingsPanel.module.scss";

export interface ISettingsPanel {}

export const SettingsPanel: React.FC<ISettingsPanel> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`settings-panel ${styles["settings-panel"]}`}
    />
  );
};
