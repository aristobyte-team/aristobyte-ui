"use client";

import * as React from "react";

export interface IWeatherWidget {
  disabled?: boolean;
}

export const WeatherWidget: React.FC<IWeatherWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="weather-widget" />;
};
