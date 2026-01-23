'use client';

import * as React from 'react';

import './StatisticsCards.scss';

export interface IStatisticsCards {
  disabled?: boolean;
}

export const StatisticsCards: React.FC<IStatisticsCards> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="statistics-cards" />;
};
