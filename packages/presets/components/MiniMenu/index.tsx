"use client";

import * as React from "react";

import styles from "./MiniMenu.module.scss";

export interface IMiniMenu {}

export const IMiniMenu: React.FC<IMiniMenu> = ({ ...props }) => {
  const uniqId = React.useId();

  return (
    <div
      {...props}
      key={uniqId}
      className={`mini-menu ${styles["mini-menu"]}`}
    />
  );
};
