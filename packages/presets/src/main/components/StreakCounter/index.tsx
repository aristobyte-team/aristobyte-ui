'use client';

import * as React from 'react';

import './StreakCounter.scss';

export interface IStreakCounter {
  disabled?: boolean;
}

export const StreakCounter: React.FC<IStreakCounter> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="streak-counter" />;
};
