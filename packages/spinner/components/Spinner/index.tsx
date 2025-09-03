"use client";

import * as React from "react";

import styles from "./Spinner.module.scss";

export interface ISpinner {
  type?: "default" | "duo" | "gradient" | "pulse" | "pulse-duo";
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  className?: string;
  style?: React.CSSProperties;
}

export const Spinner: React.FC<ISpinner> = ({
  type = "default",
  variant = "default",
  size = "md",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`spinner ${styles[`spinner-type--${type}`]} ${
        styles[`spinner-variant--${variant}`]
      } ${styles[`spinner-size--${size}`]} ${className}`}
      style={style}
    />
  );
};
