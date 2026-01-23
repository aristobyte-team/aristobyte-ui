'use client';

import * as React from 'react';

import './MediaControls.scss';

export interface IMediaControls {
  disabled?: boolean;
}

export const MediaControls: React.FC<IMediaControls> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="media-controls" />;
};
