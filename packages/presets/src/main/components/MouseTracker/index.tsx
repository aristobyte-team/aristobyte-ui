'use client';

import * as React from 'react';

import './MouseTracker.scss';

export interface IMouseTracker {
  disabled?: boolean;
}

export const MouseTracker: React.FC<IMouseTracker> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="mouse-tracker" />;
};
