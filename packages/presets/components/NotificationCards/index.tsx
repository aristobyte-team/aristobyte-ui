"use client";

import * as React from "react";

import styles from "./NotificationCards.module.scss";

export interface INotificationCards {}

export const INotificationCards: React.FC<INotificationCards> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`notification-cards ${styles["notification-cards"]}`}
    />
  );
};
