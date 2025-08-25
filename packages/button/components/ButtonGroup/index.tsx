"use client";

import * as React from "react";
import { type IButton, Button } from "../Button";

import styles from "./ButtonGroup.module.scss";

export interface IButtonGroup {
  children:
    | React.ReactElement<IButton, typeof Button>
    | React.ReactElement<IButton, typeof Button>[];
  align?: "vertical" | "horizontal";
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  className?: string;
}

export const ButtonGroup: React.FC<IButtonGroup> = ({
  children,
  align = "horizontal",
  variant = "default",
  size = "md",
  radius = "md",
  disabled,
  className = "",
}) => {
  return (
    <div
      className={`${styles["button-group"]} ${styles[`button-group-variant--${variant}`]} ${styles[`button-group-size--${size}`]} ${styles[`button-group-radius--${radius}`]} ${styles[`button-group-align--${align}`]} ${className}`}
    >
      {React.Children.toArray(children)
        .filter(
          (child): child is React.ReactElement<IButton, typeof Button> =>
            React.isValidElement(child) && child.type === Button
        )
        .map((child, index) =>
          React.cloneElement(child, {
            key: index || child.key,
            size: size || child.props.size,
            disabled: disabled || child.props.disabled,
            variant: variant || child.props.variant,
            radius: "none",
          })
        )}
    </div>
  );
};
