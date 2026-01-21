import * as React from 'react';

import './Radio.scss';

export interface IRadio {
  children: React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  highlightLabel?: boolean;
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  appearance?: 'default' | 'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing';
  alignLabel?: 'top' | 'right' | 'bottom' | 'left';
  style?: React.CSSProperties;
}

export const Radio: React.FC<IRadio> = ({
  children,
  value,
  checked,
  name,
  disabled = false,
  highlightLabel = false,
  size = 'md',
  variant = 'default',
  appearance = 'default',
  alignLabel = 'right',
  onChange,
  className = '',
  style = {},
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <label
      className={`radio ${`radio-align-label--${alignLabel}`} ${`radio-appearance--${appearance}`} ${`radio-variant--${variant}`} ${`radio-size--${size}`} ${disabled ? 'radio--disabled' : ''} ${className}`}
      style={style}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="radio__input"
      />
      <span className="radio__control" />
      {children && (
        <span className={`radio__label ${highlightLabel ? 'radio__label--highlight-label' : ''}`}>{children}</span>
      )}
    </label>
  );
};
