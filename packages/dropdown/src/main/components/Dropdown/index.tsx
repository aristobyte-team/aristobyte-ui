'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { DropdownOption, type IDropdownOption } from '../DropdownOption';
import { Button, type IButton } from '@aristobyte-ui/button';
import { Portal } from '@aristobyte-ui/utils';

import './Dropdown.scss';

type PositionType = {
  top: 0;
  left: 0;
  width: 0;
};

export interface IDropdown {
  children: React.ReactElement<IDropdownOption> | React.ReactElement<IDropdownOption>[];
  value: string;
  button?: Omit<IButton, 'children' | 'dangerouslySetInnerHTML'>;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  appearance?: 'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing';
  onChange?: (newValue: string) => void;
  choice?: 'multiple' | 'single';
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Dropdown: React.FC<IDropdown> = ({
  children,
  value,
  onChange,
  appearance = 'outline',
  variant = 'default',
  placeholder = 'Select',
  choice = 'single',
  className = '',
  disabled = false,
  button = {},
  style = {},
}) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string[]>(value ? [value] : []);
  const [position, setPosition] = React.useState<PositionType>({
    top: 0,
    left: 0,
    width: 0,
  });
  const buttonContainerRef = React.useRef<HTMLDivElement>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);
  const uniqueId = React.useId();

  const computePosition = React.useCallback(() => {
    if (!buttonContainerRef.current || !boxRef.current) return;

    const rect = buttonContainerRef.current.getBoundingClientRect();
    const dropdownRect = boxRef.current.getBoundingClientRect();

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const shouldOpenUpwards = spaceBelow < dropdownRect.height && spaceAbove > dropdownRect.height;

    setPosition({
      top: shouldOpenUpwards
        ? rect.top + window.scrollY - dropdownRect.height - rect.height / 2
        : rect.top + window.scrollY + rect.height + 6,
      left: rect.left + window.scrollX,
      width: rect.width,
    } as PositionType);
  }, []);

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

    if (choice === 'single') {
      setSelected([currentRadioValue]);
    }

    if (choice === 'multiple') {
      setSelected((prev) =>
        prev.includes(currentRadioValue) ? prev.filter((v) => v !== currentRadioValue) : [...prev, currentRadioValue]
      );
    }
  };

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (disabled) return;

    if (button?.onClick) button.onClick(e);

    setIsOpened((prev) => !prev);
  };

  React.useLayoutEffect(() => {
    if (!isOpened) return;

    const raf = requestAnimationFrame(() => {
      computePosition();
    });

    const handleResize = () => computePosition();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize, true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize, true);
    };
  }, [isOpened, computePosition, options.length]);

  if (!isValidValue()) {
    throw new Error('The "value" prop did not match with any of the DropdownOption "value" prop');
  }

  return (
    <>
      <div className={`dropdown ${className}`} ref={buttonContainerRef}>
        <Button
          onClick={handleToggle}
          className={`dropdown__button ${button?.className || ''}`}
          appearance={button?.appearance || appearance}
          variant={button?.variant || variant}
          disabled={button?.disabled || disabled}
        >
          {placeholder}
        </Button>
      </div>

      <Portal>
        <AnimatePresence>
          {isOpened && (
            <div
              className={`dropdown__box dropdown__box-variant--${variant} dropdown__box-appearance--${appearance}`}
              style={style}
            >
              <motion.div
                className="dropdown__box-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
                onClick={() => setIsOpened(false)}
              />
              <motion.div
                ref={boxRef}
                className="dropdown__box-options"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
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
