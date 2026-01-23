'use client';

import * as React from 'react';

import './ChatMessages.scss';

export interface IChatMessages {
  disabled?: boolean;
}

export const ChatMessages: React.FC<IChatMessages> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="chat-messages" />;
};
