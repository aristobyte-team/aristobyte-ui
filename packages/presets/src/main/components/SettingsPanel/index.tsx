'use client';

import * as React from 'react';

import './SettingsPanel.scss';

export interface ISettingsPanel {
  disabled?: boolean;
}

export const SettingsPanel: React.FC<ISettingsPanel> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="settings-panel" />;
};
