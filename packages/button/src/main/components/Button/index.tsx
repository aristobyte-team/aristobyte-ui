'use client';

import * as React from 'react';
import { Spinner } from '@aristobyte-ui/spinner';
import { type IconPropsType, renderRipple } from '@aristobyte-ui/utils';

import './Button.scss';

export interface IButton {
  type?: 'button' | 'link';
  text?: string;
  children?: React.ReactElement | React.JSX.Element | React.ReactNode | string;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void | Promise<void>;
  disabled?: boolean;
  transparent?: boolean;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  appearance?: 'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing';
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  icon?: {
    component: (props: IconPropsType) => React.JSX.Element;
    color?: string;
    size?: number;
    align?: 'left' | 'right';
  };
  isLoading?: boolean;
  spinnerType?: 'default' | 'duo' | 'gradient' | 'pulse' | 'pulse-duo';
  className?: string;
  // @TODO: apply this everywhere
  style?: React.CSSProperties;
}

export const Button: React.FC<IButton> = ({
  onClick,
  text = '',
  href = '',
  target = '_self',
  children = '',
  type = 'button',
  variant = 'default',
  appearance = 'solid',
  size = 'md',
  radius = 'md',
  icon,
  spinnerType = 'default',
  transparent = false,
  isLoading = false,
  disabled = false,
  className = '',
  style = {},
}) => {
  const uniqueId = React.useId();
  const ref = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    renderRipple<HTMLButtonElement | HTMLAnchorElement>({
      ref,
      clientX,
      clientY,
    });
    if (onClick) {
      onClick(e);
    }
  };

  const getCommonProps = () => ({
    onClick: handleClick,
    disabled: disabled || isLoading,
    style,
    className: `button ${transparent ? 'button--transparent' : ''} ${`button-variant--${variant}`} ${`button-appearance--${appearance}`} ${`button-size--${size}`} ${`button-radius--${radius}`} ${isLoading ? 'button--loading' : ''} ${className}`,
  });

  const renderChildren = () => (
    <>
      {isLoading && <Spinner size={size} variant={variant} type={spinnerType} className="spinner" />}
      {icon && (
        <span className={`icon ${`icon--${icon.align ?? 'left'}`}`}>
          {icon.component({ color: icon.color, size: icon.size })}
        </span>
      )}
      {text || children}
    </>
  );

  if (type === 'link') {
    return (
      <a
        key={uniqueId}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        target={target}
        href={href}
        {...getCommonProps()}
      >
        {renderChildren()}
      </a>
    );
  }

  return (
    <button key={uniqueId} ref={ref as React.RefObject<HTMLButtonElement>} {...getCommonProps()}>
      {renderChildren()}
    </button>
  );
};
