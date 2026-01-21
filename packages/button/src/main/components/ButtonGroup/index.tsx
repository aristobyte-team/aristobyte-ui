'use client';

import * as React from 'react';
import { type IButton, Button } from '../Button';

import './ButtonGroup.scss';

export interface IButtonGroup {
  children: React.ReactElement<IButton, typeof Button> | React.ReactElement<IButton, typeof Button>[];
  align?: 'vertical' | 'horizontal';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonGroup: React.FC<IButtonGroup> = ({
  children,
  align = 'horizontal',
  variant = 'default',
  size = 'md',
  radius = 'md',
  disabled,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`button-group ${`button-group-variant--${variant}`} ${`button-group-size--${size}`} ${`button-group-radius--${radius}`} ${`button-group-align--${align}`} ${className}`}
      style={style}
    >
      {React.Children.toArray(children)
        .filter(
          (child): child is React.ReactElement<IButton, typeof Button> =>
            React.isValidElement(child) && child.type === Button
        )
        .map((child, index) =>
          React.cloneElement(child, {
            key: index || child.key,
            size: size || child.props.size,
            disabled: disabled || child.props.disabled,
            variant: variant || child.props.variant,
            radius: 'none',
          })
        )}
    </div>
  );
};
