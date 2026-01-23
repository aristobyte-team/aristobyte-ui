'use client';

import * as React from 'react';

import './HabitTracker.scss';

export interface IHabitTracker {
  disabled?: boolean;
}

export const HabitTracker: React.FC<IHabitTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="habit-tracker" />;
};
