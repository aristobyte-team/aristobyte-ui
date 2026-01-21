"use client";

import * as React from "react";

export interface INotificationBadges {
  disabled?: boolean;
}

export const NotificationBadges: React.FC<INotificationBadges> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="notification-badges" />;
};
