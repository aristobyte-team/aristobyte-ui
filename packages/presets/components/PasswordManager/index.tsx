"use client";

import * as React from "react";

export interface IPasswordManager {
  disabled?: boolean;
}

export const PasswordManager: React.FC<IPasswordManager> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="password-manager" />;
};
