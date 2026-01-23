'use client';

import * as React from 'react';

import './QuickActions.scss';

export interface IQuickActions {
  disabled?: boolean;
}

export const QuickActions: React.FC<IQuickActions> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="quick-actions" />;
};
