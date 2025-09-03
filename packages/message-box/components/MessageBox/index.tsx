import * as React from "react";
import { Icons } from "@aristobyte-ui/utils";

import styles from "./MessageBox.module.scss";

type MessageBoxVariant = "default" | "info" | "warning" | "success" | "error";

export interface IMessageBox {
  variant?: MessageBoxVariant;
  children?: React.ReactElement | React.ReactNode | string;
  withIcon?: boolean;
  customIcon?: () => React.JSX.Element;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  type?: "solid" | "outline" | "outline-dashed" | "no-outline" | "glowing";
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
    case "info":
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
  const Icon = customIcon || renderIcon(variant);
  return (
    <div
      className={`message-box ${styles["message-box"]} ${
        styles[`message-box-type--${type}`]
      } ${styles[`message-box-radius--${radius}`]} ${
        styles[`message-box--${variant}`]
      } ${className}`}
      style={style}
    >
      {withIcon && (
        <span
          className={`${styles["message-box__icon"]} ${
            styles[`message-box__icon--${variant}`]
          }`}
        >
          <Icon />
        </span>
      )}
      <p
        className={`${styles["message-box__content"]}`}
        dangerouslySetInnerHTML={{ __html: children || "" }}
      />
    </div>
  );
};
