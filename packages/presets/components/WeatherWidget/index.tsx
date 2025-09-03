"use client";

import * as React from "react";

import styles from "./WeatherWidget.module.scss";

export interface IWeatherWidget {}

export const IWeatherWidget: React.FC<IWeatherWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`weather-widget ${styles["weather-widget"]}`}
    />
  );
};
