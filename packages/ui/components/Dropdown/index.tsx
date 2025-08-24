"use client";

import * as React from "react";
import { DropdownOption, type IDropdownOption } from "../DropdownOption";

import { AnimatePresence, motion } from "framer-motion";

import { Button } from "../Button";
import { Portal } from "../../utils/Portal";

import styles from "./Dropdown.module.scss";

export interface IDropdown {
  children:
    | React.ReactElement<IDropdownOption>
    | React.ReactElement<IDropdownOption>[];
  value: string;
  appearance?:
    | "solid"
    | "outline"
    | "outline-dashed"
    | "no-outline"
    | "glowing";
  onChange?: (newValue: string) => void;
  initiallyOpened?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

type PositionType = {
  top: 0;
  left: 0;
  width: 0;
};

export const Dropdown: React.FC<IDropdown> = ({
  children,
  value,
  onChange,
  appearance = "outline",
  placeholder = "Select",
  className = "",
  initiallyOpened = false,
  disabled = false,
}) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(initiallyOpened);
  const [selected, setSelected] = React.useState<string>(value);
  const [position, setPosition] = React.useState<PositionType>({
    top: 0,
    left: 0,
    width: 0,
  });
  const [dropdownHeight, setDropdownHeight] = React.useState(0);
  const [buttonHeight, setButtonHeight] = React.useState(0);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);
  const uniqueId = React.useId();

  React.useLayoutEffect(() => {
    if (!isOpened) {
      return;
    }

    if (boxRef.current) {
      setDropdownHeight(boxRef.current.getBoundingClientRect().height);
    }

    if (buttonRef.current) {
      setButtonHeight(buttonRef.current.getBoundingClientRect().height);
    }
  }, [isOpened]);

  const options = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<IDropdownOption> =>
      React.isValidElement(child) && child.type === DropdownOption
  );

  const isValidValue = () => {
    return !!options.find(({ props }) => props.value === value);
  };

  const handleChange = (currentRadioValue: string) => {
    onChange?.(currentRadioValue);
    setSelected(currentRadioValue);
    setIsOpened(false);
  };

  const handleToggle = () => {
    if (disabled) return;

    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const shouldOpenUpwards =
      dropdownHeight > 0 &&
      spaceBelow < dropdownHeight &&
      spaceAbove > dropdownHeight;

    const finalPosition = {
      top: shouldOpenUpwards
        ? rect.top + window.scrollY - dropdownHeight - buttonHeight / 2
        : rect.top + window.scrollY + buttonHeight + 6,
      left: rect.left + window.scrollX,
      width: rect.width,
    } as PositionType;

    setPosition(finalPosition);
    setIsOpened((prev) => !prev);
  };

  if (!isValidValue()) {
    throw new Error(
      'The "value" prop did not match with any of the DropdownOption "value" prop'
    );
  }

  return (
    <>
      <div className={`${styles["dropdown"]} ${className}`}>
        <Button
          {...{ ref: buttonRef }}
          className={styles["dropdown__button"]}
          appearance={appearance}
          onClick={handleToggle}
          disabled={disabled}
        >
          {placeholder}
        </Button>
      </div>

      <Portal>
        <AnimatePresence>
          {isOpened && (
            <div className={styles["dropdown__box"]}>
              <motion.div
                className={styles["dropdown__box-overlay"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                onClick={() => setIsOpened(false)}
              />
              <motion.div
                ref={boxRef}
                className={styles["dropdown__box-options"]}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                style={{
                  top: position.top,
                  left: position.left,
                  width: position.width,
                }}
              >
                {options.map(({ props }) => (
                  <DropdownOption
                    {...props}
                    key={`${props.value}-${uniqueId}`}
                    selectedValue={selected}
                    onChange={() => handleChange(props.value)}
                  />
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};
