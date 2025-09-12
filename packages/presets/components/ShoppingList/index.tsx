"use client";

import * as React from "react";

export interface IShoppingList {
  disabled?: boolean;
}

export const ShoppingList: React.FC<IShoppingList> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="shopping-list" />;
};
