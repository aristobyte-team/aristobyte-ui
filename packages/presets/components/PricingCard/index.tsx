"use client";

import * as React from "react";

import styles from "./PricingCard.module.scss";

export interface IPricingCard {}

export const IPricingCard: React.FC<IPricingCard> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`pricing-card ${styles["pricing-card"]}`}
    />
  );
};
