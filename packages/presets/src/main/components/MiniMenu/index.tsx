'use client';

import * as React from 'react';

import './MiniMenu.scss';

export interface IMiniMenu {
  disabled?: boolean;
}

export const MiniMenu: React.FC<IMiniMenu> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="mini-menu" />;
};
