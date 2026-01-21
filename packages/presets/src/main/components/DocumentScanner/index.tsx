"use client";

import * as React from "react";

export interface IDocumentScanner {
  disabled?: boolean;
}

export const DocumentScanner: React.FC<IDocumentScanner> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="document-scanner" />;
};
