import * as React from "react";
import { Icons } from "../../utils";

import styles from "./MessageBox.module.scss";

type MessageBoxVariant = "info" | "warning" | "success" | "error";

export interface IMessageBox extends React.HTMLAttributes<HTMLDivElement> {
  variant?: MessageBoxVariant;
  children?: React.ReactElement | React.ReactNode | string;
  withIcon?: boolean;
  customIcon?: React.ReactElement | React.ReactNode | string;
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
  variant = "info",
  withIcon = false,
  customIcon = null,
}) => (
  <div
    className={`message-box ${styles["message-box"]} ${styles[`message-box--${variant}`]} ${className}`}
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
