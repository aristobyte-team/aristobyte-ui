'use client';

import * as React from 'react';

import './HealthMonitor.scss';

export interface IHealthMonitor {
  disabled?: boolean;
}

export const HealthMonitor: React.FC<IHealthMonitor> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="health-monitor" />;
};
