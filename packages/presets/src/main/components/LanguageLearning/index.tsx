"use client";

import * as React from "react";

export interface ILanguageLearning {
  disabled?: boolean;
}

export const LanguageLearning: React.FC<ILanguageLearning> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="language-learning" />;
};
