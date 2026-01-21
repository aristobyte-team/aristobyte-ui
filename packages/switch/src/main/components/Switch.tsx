"use client";

import * as React from "react";
import { type IconPropsType } from "@aristobyte-ui/utils";

export interface ISwitch {
  onChange?: () => void;
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
  trackIcon?: {
    checked?: {
      component: (props: IconPropsType) => React.JSX.Element;
      size?: number;
      color?: string;
    };
    unchecked?: {
      component: (props: IconPropsType) => React.JSX.Element;
      size?: number;
      color?: string;
    };
  };
  thumbIcon?: {
    component: (props: IconPropsType) => React.JSX.Element;
    size?: number;
    color?: string;
  };
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Switch: React.FC<ISwitch> = ({
  onChange,
  label,
  alignLabel = "vertical",
  checked,
  switchSize = "md",
  variant = "default",
  disabled = false,
  trackIcon,
  thumbIcon,
  className = "",
  style = {},
}) => {
  const id = React.useId();
  const [isChecked, setIsChecked] = React.useState<boolean>(!!checked);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    if (onChange) onChange();
  };

  const baseClasses = [
    "switch",
    `switch-size-${switchSize}`,
    `switch-variant-${variant}`,
    `switch-align-label-${alignLabel}`,
    disabled && "switch--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label htmlFor={id} className={baseClasses} style={style}>
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
      />

      <span className="switch__track relative rounded-full overflow-hidden transition-colors duration-300 ease-in-out">
        {trackIcon?.checked && (
          <span className="switch__track-icon switch__track-icon--checked absolute top-1/2 flex items-center justify-center transition-all duration-200 ease-out z-0">
            {trackIcon.checked.component({
              size: trackIcon.checked.size,
              color: trackIcon.checked.color,
            })}
          </span>
        )}

        <span className="switch__thumb absolute top-1/2 left-0 bg-white rounded-full transform -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center z-10">
          {thumbIcon && (
            <span className="switch__thumb-icon flex items-center justify-center">
              {thumbIcon.component({
                size: thumbIcon.size,
                color: thumbIcon.color,
              })}
            </span>
          )}
        </span>

        {trackIcon?.unchecked && (
          <span className="switch__track-icon switch__track-icon--unchecked absolute top-1/2 flex items-center justify-center transition-all duration-200 ease-out z-0">
            {trackIcon.unchecked.component({
              size: trackIcon.unchecked.size,
              color: trackIcon.unchecked.color,
            })}
          </span>
        )}
      </span>

      {label && <span className="switch__label ml-2">{label}</span>}
    </label>
  );
};
