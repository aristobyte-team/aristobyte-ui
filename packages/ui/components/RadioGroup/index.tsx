import * as React from "react";
import { Radio, type IRadio } from "../Radio";

import styles from "./RadioGroup.module.scss";

export interface IRadioGroup {
  name: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactElement<IRadio> | React.ReactElement<IRadio>[];
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
  const radios = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<IRadio> =>
      React.isValidElement(child) && child.type === Radio
  );

  return (
    <div className={`${styles["radio-group"]} ${className}`}>
      {radios.map((child) =>
        React.cloneElement(child, {
          name,
          checked: child.props.value === value,
          onChange,
          disabled: disabled || child.props.disabled,
        })
      )}
    </div>
  );
};
