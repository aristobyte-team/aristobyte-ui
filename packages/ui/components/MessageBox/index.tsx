import * as React from "react";
import { Icons } from "../../utils";

import styles from "./MessageBox.module.scss";

type MessageBoxVariant = "default" | "info" | "warning" | "success" | "error";

export interface IMessageBox {
  variant?: MessageBoxVariant;
  children?: React.ReactElement | React.ReactNode | string;
  withIcon?: boolean;
  customIcon?: React.ReactElement | React.ReactNode | string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  type?: "solid" | "outline" | "outline-dashed" | "no-outline" | "glowing";
  className?: string;
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
  className = "",
  variant = "default",
  withIcon = false,
  customIcon = null,
  radius = "md",
  type = "outline",
}) => (
  <div
    className={`message-box ${styles["message-box"]} ${styles[`message-box-type--${type}`]} ${styles[`message-box-radius--${radius}`]} ${styles[`message-box--${variant}`]} ${className}`}
  >
    {withIcon && (
      <span
        className={`${styles["message-box__icon"]} ${styles[`message-box__icon--${variant}`]}`}
        dangerouslySetInnerHTML={{
          __html: customIcon ? customIcon : renderIcon(variant),
        }}
      />
    )}
    <p
      className={`${styles["message-box__content"]}`}
      dangerouslySetInnerHTML={{ __html: children || "" }}
    />
  </div>
);
