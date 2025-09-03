"use client";

import * as React from "react";

import styles from "./EmailDashboard.module.scss";

export interface IEmailDashboard {}

export const EmailDashboard: React.FC<IEmailDashboard> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`email-dashboard ${styles["email-dashboard"]}`}
    />
  );
};
