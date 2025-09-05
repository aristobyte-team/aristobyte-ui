"use client";

import * as React from "react";

import styles from "./LanguageLearning.module.scss";

export interface ILanguageLearning {
  disabled?: boolean;
}

export const LanguageLearning: React.FC<ILanguageLearning> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`language-learning ${styles["language-learning"]}`}
    />
  );
};
