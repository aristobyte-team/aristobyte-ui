"use client";

import * as React from "react";

export interface IPhotoEditor {
  disabled?: boolean;
}

export const PhotoEditor: React.FC<IPhotoEditor> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="photo-editor" />;
};
