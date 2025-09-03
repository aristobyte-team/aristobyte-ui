"use client";

import * as React from "react";

import styles from "./TravelPlanner.module.scss";

export interface ITravelPlanner {}

export const ITravelPlanner: React.FC<ITravelPlanner> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`travel-planner ${styles["travel-planner"]}`}
    />
  );
};
