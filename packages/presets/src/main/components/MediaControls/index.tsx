"use client";

import * as React from "react";

export interface IMediaControls {
  disabled?: boolean;
}

export const MediaControls: React.FC<IMediaControls> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="media-controls" />;
};
