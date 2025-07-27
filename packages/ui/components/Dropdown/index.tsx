"use client";

import * as React from "react";
import { Icons } from "../../utils";

import styles from "./Dropdown.module.scss";

export interface IDropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface IDropdown {
  options: IDropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Dropdown: React.FC<IDropdown> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div
      ref={ref}
      className={`${styles["dropdown"]} ${disabled ? styles["dropdown--disabled"] : ""} ${className}`}
    >
      <button
        type="button"
        className={styles["dropdown__trigger"]}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        disabled={disabled}
      >
        <span className={styles["dropdown__label"]}>
          {selectedOption?.label || placeholder}
        </span>
        <span
          className={styles["dropdown__icon"]}
          dangerouslySetInnerHTML={{ __html: Icons.ArrowDown }}
        />
      </button>
      {isOpen && (
        <div className={styles["dropdown__menu"]}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`${styles["dropdown__option"]} ${
                value === option.value
                  ? styles["dropdown__option--selected"]
                  : ""
              } ${option.disabled ? styles["dropdown__option--disabled"] : ""}`}
              onClick={() => {
                if (!option.disabled) {
                  onChange(option.value);
                  setIsOpen(false);
                }
              }}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
