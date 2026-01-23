'use client';

import * as React from 'react';

import './MusicPlayer.scss';

export interface IMusicPlayer {
  disabled?: boolean;
}

export const MusicPlayer: React.FC<IMusicPlayer> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="music-player" />;
};
