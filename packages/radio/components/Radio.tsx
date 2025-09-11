import * as React from "react";
import clsx from "clsx";

export interface IRadio {
  children: React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  highlightLabel?: boolean;
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  appearance?:
    | "default"
    | "solid"
    | "outline"
    | "outline-dashed"
    | "no-outline"
    | "glowing";
  alignLabel?: "top" | "right" | "bottom" | "left";
  style?: React.CSSProperties;
}

export const Radio: React.FC<IRadio> = ({
  children,
  value,
  checked,
  name,
  disabled = false,
  highlightLabel = false,
  size = "md",
  variant = "default",
  appearance = "default",
  alignLabel = "right",
  onChange,
  className,
  style,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const alignClasses: Record<string, string> = {
    top: "flex-col",
    right: "flex-row",
    bottom: "flex-col",
    left: "flex-row",
  };

  const controlOrder: Record<string, string> = {
    top: "order-2",
    right: "",
    bottom: "",
    left: "order-2",
  };

  return (
    <label
      className={clsx(
        "flex items-center relative cursor-pointer select-none",
        alignClasses[alignLabel],
        disabled && "cursor-not-allowed opacity-50 pointer-events-none",
        `radio-size--${size}`,
        `radio-variant--${variant}`,
        `radio-appearance--${appearance}`,
        className
      )}
      style={style}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="peer sr-only"
      />
      <span
        className={clsx(
          "radio__control flex-shrink-0 rounded-full transition-all duration-200",
          controlOrder[alignLabel]
        )}
      />
      {children && (
        <span
          className={clsx(
            "ml-2 select-none",
            highlightLabel && `text-${variant}`
          )}
        >
          {children}
        </span>
      )}
    </label>
  );
};
