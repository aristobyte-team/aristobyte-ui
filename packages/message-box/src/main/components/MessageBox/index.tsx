import * as React from 'react';
import { type IconPropsType, Icons } from '@aristobyte-ui/utils';

import './MessageBox.scss';

type MessageBoxVariant = 'default' | 'primary' | 'secondary' | 'warning' | 'success' | 'error';

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
  appearance?: 'solid' | 'outline' | 'outline-dashed' | 'no-outline' | 'glowing';
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
    case 'default':
    case 'primary':
    case 'secondary':
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
  appearance = 'outline',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={[
        'message-box',
        `message-box-appearance--${appearance}`,
        `message-box-radius--${radius}`,
        `message-box--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {withIcon && (
        <span className={['message-box__icon', `message-box__icon--${variant}`].filter(Boolean).join(' ')}>
          {customIcon?.component({
            size: customIcon.size,
            color: customIcon.color,
          }) || renderIcon(variant)({})}
        </span>
      )}
      <p className={'message-box__content'} dangerouslySetInnerHTML={{ __html: children || '' }} />
    </div>
  );
};
