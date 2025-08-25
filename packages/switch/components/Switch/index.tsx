"use client";

import * as React from "react";

import styles from "./Switch.module.scss";

export interface ISwitch {
  label?: string;
  alignLabel?: "horizontal" | "vertical";
  switchSize?: "xsm" | "sm" | "md" | "lg" | "xlg";
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  trackIcon?: { checked?: React.ElementType; unchecked?: React.ElementType };
  thumbIcon?: React.ElementType;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
}

//@TODO: Fix the the switch styling, which is breaking when continuously clicking on the component
export const Switch: React.FC<ISwitch> = ({
  label,
  alignLabel = "vertical",
  checked,
  switchSize = "md",
  variant = "default",
  disabled = false,
  trackIcon,
  thumbIcon,
  className = "",
  onChange,
}) => {
  const id = React.useId();
  const [isChecked, setIsChecked] = React.useState<boolean>(!!checked);

  const handleChange = () => {
    setIsChecked((prev) => !prev);

    if (onChange) onChange();
  };

  return (
    <label
      htmlFor={id}
      className={`${styles["switch"]} ${styles[`switch-size--${switchSize}`]} ${
        styles[`switch-variant--${variant}`]
      } ${styles[`switch-align-label--${alignLabel}`]} ${disabled ? styles["switch--disabled"] : ""} ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
      />
      <span className={styles["switch__track"]}>
        {trackIcon && trackIcon.checked && (
          <span
            className={`${styles["switch__track-icon"]} ${styles["switch__track-icon--checked"]}`}
          >
            {React.createElement(trackIcon.checked)}
          </span>
        )}
        <span className={styles["switch__thumb"]}>
          {thumbIcon && (
            <span className={styles["switch__thumb-icon"]}>
              {React.createElement(thumbIcon)}
            </span>
          )}
        </span>
        {trackIcon && trackIcon.unchecked && (
          <span
            className={`${styles["switch__track-icon"]} ${styles["switch__track-icon--unchecked"]}`}
          >
            {React.createElement(trackIcon.unchecked)}
          </span>
        )}
      </span>
      {label && <span className={styles["switch__label"]}>{label}</span>}
    </label>
  );
};
