'use client';

import * as React from 'react';

import './WeatherWidget.scss';

export interface IWeatherWidget {
  disabled?: boolean;
}

export const WeatherWidget: React.FC<IWeatherWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="weather-widget" />;
};
