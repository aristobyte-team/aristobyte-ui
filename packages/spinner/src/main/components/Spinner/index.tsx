'use client';

import * as React from 'react';

import './Spinner.scss';

export interface ISpinner {
  appearance?: 'default' | 'duo' | 'gradient' | 'pulse' | 'pulse-duo';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  className?: string;
}

export const Spinner: React.FC<ISpinner> = ({
  appearance = 'default',
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  return (
    <div
      className={`spinner spinner-appearance--${appearance} spinner-variant--${variant} spinner-size--${size} ${className}`}
    />
  );
};
