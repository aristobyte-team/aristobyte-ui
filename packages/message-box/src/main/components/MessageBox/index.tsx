import * as React from 'react';
import { type IconPropsType, Icons } from '@aristobyte-ui/utils';

import './MessageBox.scss';

type MessageBoxVariant = 'default' | 'info' | 'warning' | 'success' | 'error';

export interface IMessageBox {
  variant?: MessageBoxVariant;
  children?: React.ReactElement | React.ReactNode | string;
  withIcon?: boolean;
  customIcon?: {
    component: (props: IconPropsType) => React.JSX.Element;
    size?: number;
    color?: string;
  };
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  type?: 'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing';
  className?: string;
  style?: React.CSSProperties;
}

const renderIcon = (variant: MessageBoxVariant) => {
  switch (variant) {
    case 'warning':
      return Icons.Warning;
    case 'success':
      return Icons.Success;
    case 'error':
      return Icons.Error;
    case 'info':
    default:
      return Icons.Info;
  }
};

export const MessageBox: React.FC<IMessageBox> = ({
  children,
  variant = 'default',
  withIcon = false,
  customIcon = null,
  radius = 'md',
  type = 'outline',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`message-box ${`message-box-type--${type}`} ${`message-box-radius--${radius}`} ${`message-box--${variant}`} ${className}`}
      style={style}
    >
      {withIcon && (
        <span className={`message-box__icon ${`message-box__icon--${variant}`}`}>
          {customIcon?.component({
            size: customIcon.size,
            color: customIcon.color,
          }) || renderIcon(variant)({})}
        </span>
      )}
      <p className="message-box__content" dangerouslySetInnerHTML={{ __html: children || '' }} />
    </div>
  );
};
