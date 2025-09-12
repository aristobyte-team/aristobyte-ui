"use client";

import * as React from "react";

export interface IActivityFeed {
  disabled?: boolean;
}

export const ActivityFeed: React.FC<IActivityFeed> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="activity-feed" />;
};
