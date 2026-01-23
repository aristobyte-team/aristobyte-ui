'use client';

import * as React from 'react';

import './TaskManager.scss';

export interface ITaskManager {
  disabled?: boolean;
}

export const TaskManager: React.FC<ITaskManager> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="task-manager" />;
};
