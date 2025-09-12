"use client";

import * as React from "react";

export interface INatureWidget {
  disabled?: boolean;
}

export const NatureWidget: React.FC<INatureWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="nature-widget" />;
};
