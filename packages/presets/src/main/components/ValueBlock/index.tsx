'use client';

import * as React from 'react';

import { type IconPropsType } from '@aristobyte-ui/utils';

import './ValueBlock.scss';

export interface IValueBlock {
  value: number | string;
  title?: string;
  subtitle?: string;
  radius?: 'none' | 'md' | 'sm' | 'lg' | 'full';
  variant?: 'default' | 'primary' | 'secondary' | 'warning' | 'success' | 'error';
  appearance?: 'solid' | 'glowing' | 'outline' | 'outline-dashed' | 'no-outline';
  icon?: (props: IconPropsType) => React.JSX.Element;
  color?: string;
  className?: string;
}

export const ValueBlock: React.FC<IValueBlock> = ({
  value,
  title = '',
  subtitle = '',
  color = '',
  icon,
  radius = 'md',
  variant = 'default',
  appearance = 'solid',
  className = '',
}) => {
  const uniqId = React.useId();

  return (
    <div
      key={uniqId}
      className={[
        'value-block',
        `value-block-radius--${radius}`,
        `value-block-variant--${variant}`,
        `value-block-appearance--${appearance}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon && <span className="value-block__icon">{icon({ color, size: 28 })}</span>}
      {title && <h4 className="value-block__title">{title}</h4>}
      <span className="value-block__value" style={{ color }}>
        {value}
      </span>
      {subtitle && <p className="value-block__subtitle">{subtitle}</p>}
    </div>
  );
};
