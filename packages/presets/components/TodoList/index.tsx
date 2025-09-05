"use client";

import * as React from "react";

import styles from "./TodoList.module.scss";

export interface ITodoList {
  disabled?: boolean;
}

export const TodoList: React.FC<ITodoList> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`todo-list ${styles["todo-list"]}`}
    />
  );
};
