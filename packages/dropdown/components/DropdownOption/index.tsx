import * as React from "react";

import styles from "./DropdownOption.module.scss";

export interface IDropdownOption {
  children: string;
  value: string;
  onChange?: () => void;
  selectedValue?: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

export const DropdownOption: React.FC<IDropdownOption> = ({
  children,
  // value,
  // selectedValue,
  onChange,
  // icon,
  description,
  // disabled,
}) => {
  // const isSelected = selectedValue === value;
  return (
    <button className={styles["dropdown-option"]} onClick={onChange}>
      <div className={styles["dropdown-option__content"]}>
        <h3 className={styles["dropdown-option__title"]}>{children}</h3>
        <p className={styles["dropdown-option__description"]}>{description}</p>
      </div>
    </button>
  );
};
