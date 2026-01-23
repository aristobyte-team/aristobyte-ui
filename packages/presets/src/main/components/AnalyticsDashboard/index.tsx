'use client';

import * as React from 'react';

import './AnalyticsDashboard.scss';

export interface IAnalyticsDashboard {
  disabled?: boolean;
}

export const AnalyticsDashboard: React.FC<IAnalyticsDashboard> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="analytics-dashboard" />;
};
