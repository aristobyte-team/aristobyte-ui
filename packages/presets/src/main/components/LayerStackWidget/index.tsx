'use client';

import * as React from 'react';

import './LayerStackWidget.scss';

export interface ILayerStackWidget {
  disabled?: boolean;
}

export const LayerStackWidget: React.FC<ILayerStackWidget> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="layer-stack-widget" />;
};
