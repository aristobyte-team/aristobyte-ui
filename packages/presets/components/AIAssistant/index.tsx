"use client";

import * as React from "react";

export interface IAIAssistant {
  disabled?: boolean;
}

export const AIAssistant: React.FC<IAIAssistant> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="ai-assistant" />;
};
