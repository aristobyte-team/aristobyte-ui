"use client";

import * as React from "react";

export interface ICodeStats {
  disabled?: boolean;
}

export const CodeStats: React.FC<ICodeStats> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="code-stats" />;
};
