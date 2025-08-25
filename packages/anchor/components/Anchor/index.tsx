"use client";

import * as React from "react";
import { renderRipple } from "../../utils";

import styles from "./Anchor.module.scss";

export interface IAnchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "default";
}

export const Anchor: React.FC<IAnchor> = ({
  href,
  variant = "default",
  className = "",
  children,
  onClick,
  ...props
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    renderRipple<HTMLAnchorElement>({ ref, clientX, clientY });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      {...props}
      ref={ref}
      href={href}
      className={`anchor ${styles["anchor"]} ${styles[`anchor--${variant}`]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
