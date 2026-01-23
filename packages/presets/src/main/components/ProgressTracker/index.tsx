'use client';

import * as React from 'react';

import './ProgressTracker.scss';

export interface IProgressTracker {
  disabled?: boolean;
}

export const ProgressTracker: React.FC<IProgressTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="progress-tracker" />;
};
