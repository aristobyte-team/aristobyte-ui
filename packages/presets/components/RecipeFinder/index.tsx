"use client";

import * as React from "react";

import styles from "./RecipeFinder.module.scss";

export interface IRecipeFinder {
  disabled?: boolean;
}

export const RecipeFinder: React.FC<IRecipeFinder> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`recipe-finder ${styles["recipe-finder"]}`}
    />
  );
};
