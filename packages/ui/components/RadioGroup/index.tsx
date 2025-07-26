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
}

export const RadioGroup: React.FC<IRadioGroup> = ({
  name,
  value,
  onChange,
  children,
  disabled = false,
  className = "",
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
    <div key={uniqueId} className={`${styles["radio-group"]} ${className}`}>
      {radios.map(({ props }) => (
        <Radio
          key={`${name}-${props.value}-${uniqueId}`}
          name={`${name}-${props.value}-${uniqueId}`}
          checked={props.value === currentValue}
          onChange={() => handleChange(props.value)}
          disabled={disabled || props.disabled}
          {...props}
        />
      ))}
    </div>
  );
};
