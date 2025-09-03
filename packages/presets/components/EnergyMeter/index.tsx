"use client";

import * as React from "react";

import styles from "./EnergyMeter.module.scss";

export interface IEnergyMeter {}

export const IEnergyMeter: React.FC<IEnergyMeter> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`energy-meter ${styles["energy-meter"]}`}
    />
  );
};
