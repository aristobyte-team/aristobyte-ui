"use client";

import * as React from "react";

export interface IFileUploadArea {
  disabled?: boolean;
}

export const FileUploadArea: React.FC<IFileUploadArea> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="file-upload-area" />;
};
