'use client';

import * as React from 'react';

import './Spinner.scss';

export interface ISpinner {
  type?: 'default' | 'duo' | 'gradient' | 'pulse' | 'pulse-duo';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  className?: string;
}

export const Spinner: React.FC<ISpinner> = ({ type = 'default', variant = 'default', size = 'md', className = '' }) => {
  return (
    <div className={`spinner spinner-type--${type} spinner-variant--${variant} spinner-size--${size} ${className}`} />
  );
};
