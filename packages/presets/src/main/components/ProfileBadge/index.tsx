'use client';

import * as React from 'react';

import './ProfileBadge.scss';

export interface IProfileBadge {
  disabled?: boolean;
}

export const ProfileBadge: React.FC<IProfileBadge> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="profile-badge" />;
};
