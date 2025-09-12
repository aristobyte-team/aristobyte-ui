"use client";

import * as React from "react";

export interface ITaskManager {
  disabled?: boolean;
}

export const TaskManager: React.FC<ITaskManager> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="task-manager" />;
};
