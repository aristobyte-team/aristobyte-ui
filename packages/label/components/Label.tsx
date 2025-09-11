"use client";

import * as React from "react";
import clsx from "clsx";

export interface ILabel {
  text: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const Label: React.FC<ILabel> = ({
  text,
  variant = "default",
  size = "md",
  radius = "md",
  className = "",
  color,
  backgroundColor,
  borderColor,
}) => {
  const labelClass = clsx(
    "label",
    `label-${variant}-solid`, // default to solid appearance; could make this configurable
    `label-${size}`,
    `label-radius-${radius}`,
    className
  );

  return (
    <label
      className={labelClass}
      style={{
        color,
        backgroundColor,
        borderColor,
      }}
    >
      {text}
    </label>
  );
};
