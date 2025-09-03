"use client";

import * as React from "react";

import styles from "./NotificationBadges.module.scss";

export interface INotificationBadges {}

export const INotificationBadges: React.FC<INotificationBadges> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`notification-badges ${styles["notification-badges"]}`}
    />
  );
};
