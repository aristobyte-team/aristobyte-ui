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
}

export const Radio: React.FC<IRadio> = ({
  children,
  value,
  checked,
  name,
  disabled = false,
  onChange,
  className = "",
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <label
      className={`${styles["radio"]} ${disabled ? styles["radio--disabled"] : ""} ${className}`}
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
