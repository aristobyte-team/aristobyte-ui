"use client";

import * as React from "react";

export interface IChatMessages {
  disabled?: boolean;
}

export const ChatMessages: React.FC<IChatMessages> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="chat-messages" />;
};
