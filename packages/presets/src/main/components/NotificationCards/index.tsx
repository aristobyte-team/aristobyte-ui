'use client';

import * as React from 'react';

import './NotificationCards.scss';

export interface INotificationCards {
  disabled?: boolean;
}

export const NotificationCards: React.FC<INotificationCards> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="notification-cards" />;
};
