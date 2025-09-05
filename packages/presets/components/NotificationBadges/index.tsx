"use client";

import * as React from "react";

import styles from "./NotificationBadges.module.scss";

export interface INotificationBadges {
  disabled?: boolean;
}

export const NotificationBadges: React.FC<INotificationBadges> = ({
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
