'use client';

import * as React from 'react';

import './StockMarket.scss';

export interface IStockMarket {
  disabled?: boolean;
}

export const StockMarket: React.FC<IStockMarket> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="stock-market" />;
};
