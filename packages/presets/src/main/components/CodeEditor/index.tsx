'use client';

import * as React from 'react';

import './CodeEditor.scss';

export interface ICodeEditor {
  disabled?: boolean;
}

export const CodeEditor: React.FC<ICodeEditor> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="code-editor" />;
};
