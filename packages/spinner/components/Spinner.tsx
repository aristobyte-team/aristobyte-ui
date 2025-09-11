"use client";

import * as React from "react";
import clsx from "clsx";

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
}

export const Spinner: React.FC<ISpinner> = ({
  type = "regular",
  variant = "default",
  size = "md",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "spinner",
        `spinner-${type}`, // type: regular | duo | gradient | pulse | pulse-duo
        `spinner-${size}`, // size: xsm | sm | md | lg | xlg
        `spinner-${variant}`, // variant: default | primary | ...
        className
      )}
    />
  );
};
