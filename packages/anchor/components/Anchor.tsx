"use client";

import * as React from "react";

export interface IAnchor {
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  text?: string;
  children?: React.ReactElement | React.ReactNode | string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void | Promise<void>;
  variant?:
    | "white"
    | "black"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  className?: string;
  style?: React.CSSProperties;
}

export const Anchor: React.FC<IAnchor> = ({
  href = "",
  target = "_self",
  variant = "default",
  children = "",
  text = "",
  onClick,
  className = "",
  style = {},
}) => {
  const renderChildren = () => text || children;

  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      style={style}
      className={`anchor anchor--${variant} ${className}`}
    >
      {renderChildren()}
    </a>
  );
};
