"use client";

import * as React from "react";
import { Variant, renderRipple } from "../../utils";

import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    renderRipple({ ref, clientX, clientY });
    props.onClick?.(e);
  };

  return (
    <button
      ref={ref}
      className={`${styles["button"]} ${styles[`button--${variant}`]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
