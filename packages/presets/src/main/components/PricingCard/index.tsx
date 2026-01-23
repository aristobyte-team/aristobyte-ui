'use client';

import * as React from 'react';

import './PricingCard.scss';

export interface IPricingCard {
  disabled?: boolean;
}

export const PricingCard: React.FC<IPricingCard> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="pricing-card" />;
};
