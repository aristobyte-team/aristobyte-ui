'use client';

import * as React from 'react';

import './RocketLaunchWidget.scss';

export interface IRocketLaunchWidget {
  disabled?: boolean;
}

export const RocketLaunchWidget: React.FC<IRocketLaunchWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="rocket-launch-widget" />;
};
