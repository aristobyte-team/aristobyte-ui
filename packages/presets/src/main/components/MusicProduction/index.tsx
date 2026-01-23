'use client';

import * as React from 'react';

import './MusicProduction.scss';

export interface IMusicProduction {
  disabled?: boolean;
}

export const MusicProduction: React.FC<IMusicProduction> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="music-production" />;
};
