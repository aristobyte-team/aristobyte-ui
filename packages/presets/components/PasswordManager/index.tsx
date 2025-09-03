"use client";

import * as React from "react";

import styles from "./PasswordManager.module.scss";

export interface IPasswordManager {}

export const IPasswordManager: React.FC<IPasswordManager> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`password-manager ${styles["password-manager"]}`}
    />
  );
};
