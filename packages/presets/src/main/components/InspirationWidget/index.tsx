"use client";

import * as React from "react";

export interface IInspirationWidget {
  disabled?: boolean;
}

export const InspirationWidget: React.FC<IInspirationWidget> = ({
  ...props
}) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="inspiration-widget" />;
};
