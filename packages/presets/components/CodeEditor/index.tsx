"use client";

import * as React from "react";

import styles from "./CodeEditor.module.scss";

export interface ICodeEditor {
  disabled?: boolean;
}

export const CodeEditor: React.FC<ICodeEditor> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`code-editor ${styles["code-editor"]}`}
    />
  );
};
