import * as React from "react";

import styles from "./DropdownOption.module.scss";
import { Icons } from "@aristobyte-ui/utils";

export interface IDropdownOption {
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
  children: string;
  value: string;
  onChange?: () => void;
  selectedValues?: string[];
  description?: string;
  icon?: string;
  disabled?: boolean;
  choice?: "multiple" | "single";
  style?: React.CSSProperties;
}

export const DropdownOption: React.FC<IDropdownOption> = ({
  variant,
  children,
  value,
  selectedValues,
  onChange,
  // icon,
  description,
  disabled,
  style = {},
}) => {
  const uniqueId = React.useId();
  return (
    <button
      style={style}
      key={uniqueId}
      disabled={disabled}
      className={`${styles["dropdown-option"]} ${styles[`dropdown-option-variant--${variant}`]} ${disabled ? styles["dropdown-option--disabled"] : ""}`}
      onClick={onChange}
    >
      <div className={styles["dropdown-option__content"]}>
        <h3 className={styles["dropdown-option__title"]}>{children}</h3>
        <p className={styles["dropdown-option__description"]}>{description}</p>
      </div>
      <div
        className={`${styles["dropdown-option__tick"]} ${selectedValues?.includes(value) ? styles["dropdown-option__tick--active"] : ""}`}
      >
        <Icons.Success size={18} />
      </div>
    </button>
  );
};
