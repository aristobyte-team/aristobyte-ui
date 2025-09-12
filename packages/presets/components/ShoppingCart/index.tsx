"use client";

import * as React from "react";

export interface IShoppingCart {
  disabled?: boolean;
}

export const ShoppingCart: React.FC<IShoppingCart> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="shopping-cart" />;
};
