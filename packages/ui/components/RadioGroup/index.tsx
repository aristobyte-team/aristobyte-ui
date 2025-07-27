"use client";

import * as React from "react";
import { Radio, type IRadio } from "../Radio";

import styles from "./RadioGroup.module.scss";

export interface IRadioGroup {
  name: string;
  value: string;
  children: React.ReactElement<IRadio> | React.ReactElement<IRadio>[];
  onChange?: (newValue: string) => void;
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
    | "solid"
    | "outline"
    | "outline-dashed"
    | "no-outline"
    | "glowing";
  align?: "horizontal" | "vertical";
  alignLabel?: "top" | "right" | "bottom" | "left";
  highlightLabel?: boolean;
}

export const RadioGroup: React.FC<IRadioGroup> = ({
  name,
  value,
  onChange,
  children,
  disabled = false,
  highlightLabel = false,
  className = "",
  size = "md",
  variant = "default",
  appearance = "outline",
  align = "horizontal",
  alignLabel = "right",
}) => {
  const uniqueId = React.useId();
  const [currentValue, setCurrentValue] = React.useState<string>(value);

  const radios = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<IRadio> =>
      React.isValidElement(child) && child.type === Radio
  );

  const handleChange = (currentRadioValue: string) => {
    if (onChange) {
      onChange(currentRadioValue);
    }

    setCurrentValue(currentRadioValue);
  };

  return (
    <div
      key={uniqueId}
      className={`${styles["radio-group"]} ${styles[`radio-group--${align}`]} ${className}`}
    >
      {radios.map(({ props }) => (
        <Radio
          key={`${name}-${props.value}-${uniqueId}`}
          name={`${name}-${props.value}-${uniqueId}`}
          checked={props.value === currentValue}
          onChange={() => handleChange(props.value)}
          disabled={props.disabled ?? disabled}
          size={props.size ?? size}
          variant={props.variant ?? variant}
          appearance={props.appearance ?? appearance}
          highlightLabel={props.highlightLabel ?? highlightLabel}
          alignLabel={props.alignLabel ?? alignLabel}
          {...props}
        />
      ))}
    </div>
  );
};
