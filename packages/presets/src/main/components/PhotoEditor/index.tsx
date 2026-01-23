'use client';

import * as React from 'react';

import './PhotoEditor.scss';

export interface IPhotoEditor {
  disabled?: boolean;
}

export const PhotoEditor: React.FC<IPhotoEditor> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="photo-editor" />;
};
