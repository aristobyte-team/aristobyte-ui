"use client";

import * as React from "react";

export interface IRecipeFinder {
  disabled?: boolean;
}

export const RecipeFinder: React.FC<IRecipeFinder> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="recipe-finder" />;
};
