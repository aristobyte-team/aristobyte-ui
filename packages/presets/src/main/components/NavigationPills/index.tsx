'use client';

import * as React from 'react';

import './NavigationPills.scss';

export interface INavigationPills {
  disabled?: boolean;
}

export const NavigationPills: React.FC<INavigationPills> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="navigation-pills" />;
};
