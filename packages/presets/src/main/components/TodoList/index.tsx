"use client";

import * as React from "react";

export interface ITodoList {
  disabled?: boolean;
}

export const TodoList: React.FC<ITodoList> = ({ ...props }) => {
  const uniqId = React.useId();

  return <div {...props} key={uniqId} className="todo-list" />;
};
