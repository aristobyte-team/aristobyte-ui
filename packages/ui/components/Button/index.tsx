"use client";

import * as React from "react";
import { Spinner } from "../Spinner";

import { renderRipple } from "../../utils";

import styles from "./Button.module.scss";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  icon?: {
    component: React.ElementType;
    align?: "left" | "right";
  };
  isLoading?: boolean;
  spinnerType?: "default" | "duo" | "gradient" | "pulse" | "pulse-duo";
}

export const Button: React.FC<IButton> = ({
  variant = "default",
  className = "",
  children,
  onClick,
  disabled,
  size = "md",
  radius = "md",
  icon,
  isLoading = false,
  spinnerType = "default",
  dangerouslySetInnerHTML,
  ...restProps
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    renderRipple<HTMLButtonElement>({ ref, clientX, clientY });
    if (onClick) {
      onClick(e);
    }
  };

  const Children = () => (
    <>
      {isLoading && (
        <Spinner
          size={size}
          variant={variant}
          type={spinnerType}
          className={styles["spinner"]}
        />
      )}
      {icon && (
        <span
          className={`${styles["icon"]} ${styles[`icon--${icon.align ?? "left"}`]}`}
        >
          {React.createElement(icon.component)}
        </span>
      )}
      {children}
    </>
  );

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={`${styles["button"]} ${styles[`button-variant--${variant}`]} ${styles[`button-size--${size}`]} ${styles[`button-radius--${radius}`]} ${isLoading ? styles["button--loading"] : ""} ${className}`}
      onClick={handleClick}
      {...(dangerouslySetInnerHTML
        ? { dangerouslySetInnerHTML }
        : { children: <Children /> })}
      {...restProps}
    />
  );
};
