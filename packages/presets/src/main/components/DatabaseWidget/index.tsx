'use client';

import * as React from 'react';

import './DatabaseWidget.scss';

export interface IDatabaseWidget {
  disabled?: boolean;
}

export const DatabaseWidget: React.FC<IDatabaseWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="database-widget" />;
};
