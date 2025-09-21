"use client";

import * as React from "react";
import clsx from "clsx";
import { Spinner } from "@aristobyte-ui/spinner";
import { type IconPropsType, renderRipple } from "@aristobyte-ui/utils";

export interface IButton {
  type?: "button" | "link";
  text?: string;
  children?: React.ReactNode;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void | Promise<void>;
  disabled?: boolean;
  transparent?: boolean;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  appearance?:
    | "solid"
    | "outline"
    | "outline-dashed"
    | "no-outline"
    | "glowing";
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  icon?: {
    component: (props: IconPropsType) => React.ReactElement;
    color?: string;
    size?: number;
    align?: "left" | "right";
  };
  isLoading?: boolean;
  spinnerType?: "default" | "duo" | "gradient" | "pulse" | "pulse-duo";
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<IButton> = ({
  onClick,
  text = "",
  href = "",
  target = "_self",
  children = "",
  type = "button",
  variant = "default",
  appearance = "solid",
  size = "md",
  radius = "md",
  icon,
  spinnerType = "default",
  transparent = false,
  isLoading = false,
  disabled = false,
  className = "",
  style = {},
}) => {
  const uniqueId = React.useId();
  const ref = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const { clientX, clientY } = e;
    renderRipple({ ref, clientX, clientY });
    onClick?.(e);
  };

  const buttonClasses = clsx(
    "button",
    transparent && "button-transparent",
    `button-${variant}-${appearance}`,
    `button-${size}`,
    `button-radius-${radius}`,
    isLoading && "button-loading",
    className
  );

  const renderContent = () => (
    <>
      {isLoading && (
        <Spinner
          size={size}
          variant={variant}
          type={spinnerType}
          className="inline-block"
        />
      )}
      {icon && (
        <span
          className={clsx(
            "button-icon",
            icon.align === "right" && "button-icon-right"
          )}
        >
          {icon.component({ color: icon.color, size: icon.size })}
        </span>
      )}
      {text || children}
    </>
  );

  if (type === "link") {
    return (
      <a
        key={uniqueId}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        style={style}
        className={buttonClasses}
        onClick={handleClick}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      key={uniqueId}
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      disabled={disabled || isLoading}
      style={style}
      className={buttonClasses}
      onClick={handleClick}
    >
      {renderContent()}
    </button>
  );
};
