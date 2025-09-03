"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { DropdownOption, type IDropdownOption } from "../DropdownOption";
import { Button, type IButton } from "@aristobyte-ui/button";
import { Portal } from "@aristobyte-ui/utils";

import styles from "./Dropdown.module.scss";

export interface IDropdown {
  children:
    | React.ReactElement<IDropdownOption>
    | React.ReactElement<IDropdownOption>[];
  value: string;
  button?: Omit<IButton, "children" | "dangerouslySetInnerHTML">;
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
  onChange?: (newValue: string) => void;
  initiallyOpened?: boolean;
  choice?: "multiple" | "single";
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
  variant = "default",
  placeholder = "Select",
  choice = "single",
  className = "",
  initiallyOpened = false,
  disabled = false,
  button = {},
}) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(initiallyOpened);
  const [selected, setSelected] = React.useState<string[]>(
    value ? [value] : []
  );
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
    if (!choice) {
      setSelected([currentRadioValue]);
      setIsOpened(false);
      return;
    }

    if (choice === "single") {
      setSelected([currentRadioValue]);
    }

    if (choice === "multiple") {
      setSelected((prev) =>
        prev.includes(currentRadioValue)
          ? prev.filter((v) => v !== currentRadioValue)
          : [...prev, currentRadioValue]
      );
    }
  };

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

    if (button?.onClick) button.onClick(e);

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
          onClick={handleToggle}
          className={`${styles["dropdown__button"]} ${button?.className || ""}`}
          appearance={button?.appearance || appearance}
          variant={button?.variant || variant}
          disabled={button?.disabled || disabled}
          {...{ ref: buttonRef }}
        >
          {placeholder}
        </Button>
      </div>

      <Portal>
        <AnimatePresence>
          {isOpened && (
            <div
              className={`${styles["dropdown__box"]} ${styles[`dropdown__box-variant--${variant}`]}`}
            >
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
                    variant={variant}
                    appearance={appearance}
                    key={`${props.value}-${uniqueId}`}
                    selectedValues={selected}
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
