"use client";

import * as React from "react";

export interface ITimeLocationWidget {
  disabled?: boolean;
}

export const TimeLocationWidget: React.FC<ITimeLocationWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="time-location-widget" />;
};
