"use client";

import * as React from "react";

export interface IEnergyMeter {
  disabled?: boolean;
}

export const EnergyMeter: React.FC<IEnergyMeter> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="energy-meter" />;
};
