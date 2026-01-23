'use client';

import * as React from 'react';

import './CryptocurrencyWidget.scss';

export interface ICryptocurrencyWidget {
  disabled?: boolean;
}

export const CryptocurrencyWidget: React.FC<ICryptocurrencyWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="cryptocurrency-widget" />;
};
