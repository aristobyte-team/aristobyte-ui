"use client";

import * as React from "react";

export interface ITravelPlanner {
  disabled?: boolean;
}

export const TravelPlanner: React.FC<ITravelPlanner> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="travel-planner" />;
};
