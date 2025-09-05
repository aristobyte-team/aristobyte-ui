"use client";

import * as React from "react";

import styles from "./AIAssistant.module.scss";

export interface IAIAssistant {
  disabled?: boolean;
}

export const AIAssistant: React.FC<IAIAssistant> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`ai-assistant ${styles["ai-assistant"]}`}
    />
  );
};
