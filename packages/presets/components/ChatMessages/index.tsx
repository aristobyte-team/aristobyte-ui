"use client";

import * as React from "react";

import styles from "./ChatMessages.module.scss";

export interface IChatMessages {}

export const ChatMessages: React.FC<IChatMessages> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`chat-messages ${styles["chat-messages"]}`}
    />
  );
};
