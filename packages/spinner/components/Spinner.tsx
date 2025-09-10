"use client";

import * as React from "react";
import clsx from "clsx";
import "./spinner.css";

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

const sizeMap = {
  xsm: "w-4 h-4", // 16px
  sm: "w-6 h-6", // 24px
  md: "w-8 h-8", // 32px
  lg: "w-10 h-10", // 40px
  xlg: "w-12 h-12", // 48px
};

export const Spinner: React.FC<ISpinner> = ({
  type = "default",
  variant = "default",
  size = "md",
  className = "",
  style = {},
}) => {
  const base = clsx("inline-block relative", sizeMap[size], {
    "animate-rotation rounded-full border-2 border-solid border-t-current border-opacity-25":
      type === "default",
    "animate-rotation rounded-full border-2 border-solid border-transparent":
      type === "duo",
    "animate-rotation-linear rounded-full border-2 border-solid border-r-transparent":
      type === "gradient",
    "animate-pulse rounded-full": type === "pulse",
    "rounded-full": type === "pulse-duo",
  });

  const variantColor = clsx({
    "text-default": variant === "default",
    "text-primary": variant === "primary",
    "text-secondary": variant === "secondary",
    "text-success": variant === "success",
    "text-error": variant === "error",
    "text-warning": variant === "warning",
  });

  return (
    <div className={clsx(base, variantColor, className)} style={style}>
      {type === "pulse-duo" && (
        <>
          <span className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-current animate-pulse-duo-before" />
          <span className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-current animate-pulse-duo-after" />
        </>
      )}
    </div>
  );
};
