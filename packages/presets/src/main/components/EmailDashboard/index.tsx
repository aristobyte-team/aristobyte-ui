"use client";

import * as React from "react";

export interface IEmailDashboard {
  disabled?: boolean;
}

export const EmailDashboard: React.FC<IEmailDashboard> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="email-dashboard" />;
};
