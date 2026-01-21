"use client";

import * as React from "react";

export interface IFileManager {
  disabled?: boolean;
}

export const FileManager: React.FC<IFileManager> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="file-manager" />;
};
