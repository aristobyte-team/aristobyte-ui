"use client";

import * as React from "react";
import { renderRipple } from "../../utils";

import styles from "./Button.module.scss";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "default";
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
}

export const Button: React.FC<IButton> = ({
  variant = "default",
  className = "",
  children,
  onClick,
  disabled,
  size = "md",
  ...props
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    renderRipple<HTMLButtonElement>({ ref, clientX, clientY });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`${styles["button"]} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
