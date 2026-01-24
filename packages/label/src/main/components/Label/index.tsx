'use client';

import * as React from 'react';

export interface ILabel {
  text: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  appearance?: 'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing';
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const Label: React.FC<ILabel> = ({
  text,
  variant = 'default',
  appearance = 'solid',
  size = 'md',
  radius = 'md',
  className,
  color,
  backgroundColor,
  borderColor,
}) => {
  return (
    <label
      className={['label', `label-${variant}-${appearance}`, `label-${size}`, `label-radius-${radius}`, className]
        .filter(Boolean)
        .join(' ')}
      style={{
        color,
        backgroundColor,
        borderColor,
      }}
    >
      {text}
    </label>
  );
};
