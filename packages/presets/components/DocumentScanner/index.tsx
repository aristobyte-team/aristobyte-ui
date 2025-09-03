"use client";

import * as React from "react";

import styles from "./DocumentScanner.module.scss";

export interface IDocumentScanner {}

export const IDocumentScanner: React.FC<IDocumentScanner> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`document-scanner ${styles["document-scanner"]}`}
    />
  );
};
