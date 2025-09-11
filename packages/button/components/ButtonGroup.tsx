"use client";

import * as React from "react";
import { type IButton, Button } from "./Button";
import clsx from "clsx";

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
  style?: React.CSSProperties;
}

export const ButtonGroup: React.FC<IButtonGroup> = ({
  children,
  align = "horizontal",
  variant = "default",
  size = "md",
  radius = "md",
  disabled = false,
  className = "",
  style = {},
}) => {
  const groupClasses = clsx(
    "btn-group",
    `btn-group-${align}`,
    `btn-group-variant-${variant}`,
    `btn-group-radius-${radius}`,
    `btn-group-size-${size}`,
    className
  );

  const buttons = React.Children.toArray(
    children
  ) as React.ReactElement<IButton>[];

  return (
    <div className={groupClasses} style={style}>
      {buttons.map(({ props }, index) => (
        <Button
          {...props}
          key={index}
          size={props.size || size}
          disabled={props.disabled || disabled}
          variant={props.variant || variant}
          radius="none"
        />
      ))}
    </div>
  );
};
