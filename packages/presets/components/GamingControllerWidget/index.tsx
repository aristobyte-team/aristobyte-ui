"use client";

import * as React from "react";

export interface IGamingControllerWidget {
  disabled?: boolean;
}

export const GamingControllerWidget: React.FC<IGamingControllerWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="gaming-controller-widget" />;
};
