'use client';

import * as React from 'react';
import { type IconPropsType } from '@aristobyte-ui/utils';

import './Switch.scss';

export interface ISwitch {
  onChange?: () => void;
  label?: string;
  alignLabel?: 'horizontal' | 'vertical';
  switchSize?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  trackIcon?: {
    checked?: {
      component: (props: IconPropsType) => React.JSX.Element;
      size?: number;
      color?: string;
    };
    unchecked?: {
      component: (props: IconPropsType) => React.JSX.Element;
      size?: number;
      color?: string;
    };
  };
  thumbIcon?: {
    component: (props: IconPropsType) => React.JSX.Element;
    size?: number;
    color?: string;
  };
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

//@TODO: Fix the the switch styling, which is breaking when continuously clicking on the component
export const Switch: React.FC<ISwitch> = ({
  onChange,
  label,
  alignLabel = 'vertical',
  checked,
  switchSize = 'md',
  variant = 'default',
  disabled = false,
  trackIcon,
  thumbIcon,
  className = '',
  style = {},
}) => {
  const id = React.useId();
  const [isChecked, setIsChecked] = React.useState<boolean>(!!checked);

  const handleChange = () => {
    setIsChecked((prev) => !prev);

    if (onChange) onChange();
  };

  return (
    <label
      htmlFor={id}
      className={`switch ${`switch-size--${switchSize}`} ${`switch-variant--${variant}`} ${`switch-align-label--${alignLabel}`} ${disabled ? 'switch--disabled' : ''} ${className}`}
      style={style}
    >
      <input id={id} type="checkbox" disabled={disabled} checked={isChecked} onChange={handleChange} />
      <span className="switch__track">
        {trackIcon && trackIcon.checked && (
          <span className={`switch__track-icon ${'switch__track-icon--checked'}`}>
            {trackIcon.checked.component({
              size: trackIcon.checked.size,
              color: trackIcon.checked.color,
            })}
          </span>
        )}
        <span className={'switch__thumb'}>
          {thumbIcon && (
            <span className={'switch__thumb-icon'}>
              {thumbIcon.component({
                size: thumbIcon.size,
                color: thumbIcon.color,
              })}
            </span>
          )}
        </span>
        {trackIcon && trackIcon.unchecked && (
          <span className={`${'switch__track-icon'} ${'switch__track-icon--unchecked'}`}>
            {trackIcon.unchecked.component({
              size: trackIcon.unchecked.size,
              color: trackIcon.unchecked.color,
            })}
          </span>
        )}
      </span>
      {label && <span className={'switch__label'}>{label}</span>}
    </label>
  );
};
