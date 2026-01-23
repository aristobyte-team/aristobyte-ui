'use client';

import * as React from 'react';

import './DesignSystem.scss';

export interface IDesignSystem {
  disabled?: boolean;
}

export const DesignSystem: React.FC<IDesignSystem> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="design-system" />;
};
