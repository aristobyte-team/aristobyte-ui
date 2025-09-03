"use client";

import * as React from "react";

import styles from "./CodeEditor.module.scss";

export interface ICodeEditor {}

export const ICodeEditor: React.FC<ICodeEditor> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`code-editor ${styles["code-editor"]}`}
    />
  );
};
