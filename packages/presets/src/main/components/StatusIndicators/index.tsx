'use client';

import * as React from 'react';

import './StatusIndicators.scss';

export interface IStatusIndicators {
  disabled?: boolean;
}

export const StatusIndicators: React.FC<IStatusIndicators> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="status-indicators" />;
};
