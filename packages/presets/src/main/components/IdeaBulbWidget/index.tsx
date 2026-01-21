"use client";

import * as React from "react";

export interface IIdeaBulbWidget {
  disabled?: boolean;
}

export const IdeaBulbWidget: React.FC<IIdeaBulbWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="idea-bulb-widget" />;
};
