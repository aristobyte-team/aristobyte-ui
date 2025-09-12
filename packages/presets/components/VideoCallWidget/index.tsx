"use client";

import * as React from "react";

export interface IVideoCallWidget {
  disabled?: boolean;
}

export const VideoCallWidget: React.FC<IVideoCallWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="video-call-widget" />;
};
