"use client";

import * as React from "react";
import clsx from "clsx";
import { type IconPropsType, Icons } from "@aristobyte-ui/utils";

type MessageBoxVariant =
  | "default"
  | "primary"
  | "secondary"
  | "warning"
  | "success"
  | "error";
type MessageBoxType =
  | "solid"
  | "outline"
  | "outline-dashed"
  | "no-outline"
  | "glowing";
type MessageBoxRadius = "none" | "sm" | "md" | "lg" | "full";

export interface IMessageBox {
  variant?: MessageBoxVariant;
  children?: React.ReactElement | React.ReactNode | string;
  withIcon?: boolean;
  customIcon?: {
    component: (props: IconPropsType) => React.JSX.Element;
    size?: number;
    color?: string;
  };
  radius?: MessageBoxRadius;
  type?: MessageBoxType;
  className?: string;
  style?: React.CSSProperties;
}

const renderIcon = (variant: MessageBoxVariant) => {
  switch (variant) {
    case "warning":
      return Icons.Warning;
    case "success":
      return Icons.Success;
    case "error":
      return Icons.Error;
    case "primary":
    case "secondary":
    default:
      return Icons.Info;
  }
};

export const MessageBox: React.FC<IMessageBox> = ({
  children,
  variant = "default",
  withIcon = false,
  customIcon = null,
  radius = "md",
  type = "outline",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={clsx(
        "message-box",
        `message-box--${variant}`,
        `message-box-type--${type}`,
        `message-box-radius-${radius}`,
        className
      )}
      style={style}
    >
      {withIcon && (
        <span className={clsx("message-box__icon")}>
          {customIcon?.component({
            size: customIcon.size,
            color: customIcon.color,
          }) || renderIcon(variant)({})}
        </span>
      )}
      <p
        className="message-box__content"
        dangerouslySetInnerHTML={{ __html: children || "" }}
      />
    </div>
  );
};
