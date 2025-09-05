"use client";

import * as React from "react";

import styles from "./EnergyMeter.module.scss";

export interface IEnergyMeter {
  disabled?: boolean;
}

export const EnergyMeter: React.FC<IEnergyMeter> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`energy-meter ${styles["energy-meter"]}`}
    />
  );
};
