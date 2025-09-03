"use client";

import * as React from "react";

import styles from "./ShoppingList.module.scss";

export interface IShoppingList {}

export const IShoppingList: React.FC<IShoppingList> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`shopping-list ${styles["shopping-list"]}`}
    />
  );
};
