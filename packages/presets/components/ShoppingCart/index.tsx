"use client";

import * as React from "react";

import styles from "./ShoppingCart.module.scss";

export interface IShoppingCart {}

export const ShoppingCart: React.FC<IShoppingCart> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`shopping-cart ${styles["shopping-cart"]}`}
    />
  );
};
