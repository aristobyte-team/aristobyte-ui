"use client";

import * as React from "react";

import styles from "./Radio.module.scss";

export interface IRadio {
  children: React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
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
}

export const Radio: React.FC<IRadio> = ({
  children,
  value,
  checked,
  name,
  disabled = false,
  onChange,
  className = "",
  size = "md",
  variant = "default",
  appearance = "default",
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <label
      className={`${styles["radio"]} ${styles[`radio-appearance--${appearance}`]} ${styles[`radio-variant--${variant}`]} ${styles[`radio-size--${size}`]} ${disabled ? styles["radio--disabled"] : ""} ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={styles["radio__input"]}
      />
      <span className={styles["radio__control"]} />
      {children && <span className={styles["radio__label"]}>{children}</span>}
    </label>
  );
};
