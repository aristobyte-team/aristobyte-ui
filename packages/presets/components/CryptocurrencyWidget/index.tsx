"use client";

import * as React from "react";

import styles from "./CryptocurrencyWidget.module.scss";

export interface ICryptocurrencyWidget {}

export const ICryptocurrencyWidget: React.FC<ICryptocurrencyWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`cryptocurrency-widget ${styles["cryptocurrency-widget"]}`}
    />
  );
};
