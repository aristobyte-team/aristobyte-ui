'use client';

import * as React from 'react';

import './ToolWidget.scss';

export interface IToolWidget {
  disabled?: boolean;
}

export const ToolWidget: React.FC<IToolWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="tool-widget" />;
};
