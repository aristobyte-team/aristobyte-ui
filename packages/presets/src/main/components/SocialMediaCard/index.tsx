'use client';

import * as React from 'react';

import { Anchor, type IAnchor } from '@aristobyte-ui/anchor';
import { Button, type IButton } from '@aristobyte-ui/button';
import { Icons, type IconPropsType } from '@aristobyte-ui/utils';

import './SocialMediaCard.scss';

export interface ISocialMediaCard {
  variant?: 'default' | 'compact' | 'highlight';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  // @TODO: create a "Avatar" component which will be reused everywhere - this should be stored in separate package (probably something like @aristobyte-ui/primitives or @aristobyte-ui/content-elements)
  avatar?: {
    onClick?: () => void;
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    image?: string;
    imageAltText?: string;
    icon?: (props: IconPropsType) => React.JSX.Element;
    background?: string;
  };
  title?: string;
  subtitle?: string;
  // @TODO: create a separate prop 'text' which will have more priority over the 'children' prop and will do the same except it will be string (if possible remove the 'string' from 'children' type)
  button?: IButton;
  content?: React.ReactElement | React.ReactNode | string;
  tags?: IAnchor[];
  // @TODO: create a "Unit" component which will be reused everywhere - this should be stored in separate package (probably something like @aristobyte-ui/primitives or @aristobyte-ui/content-elements)
  metrics?: {
    onClick?: () => void;
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    icon?: (props: IconPropsType) => React.JSX.Element;
    label?: string;
    value?: string;
  }[];
  disabled?: boolean;
  className?: string;
}

const renderAvatar = (avatar: ISocialMediaCard['avatar']) => {
  if (avatar?.image) {
    return <img className={'social-media-card__avatar-img'} src={avatar.image} alt={avatar.imageAltText} />;
  }

  return <div className={'social-media-card__avatar-icon'}>{(avatar?.icon || Icons.User)({ size: 24 })}</div>;
};

export const SocialMediaCard: React.FC<ISocialMediaCard> = ({
  variant = 'default',
  radius = 'full',
  avatar,
  title,
  subtitle,
  button,
  content,
  tags,
  className,
  metrics,
}) => {
  const uniqId = React.useId();

  return (
    <div
      key={uniqId}
      className={`social-media-card social-media-card-radius--${radius} social-media-radius-variant--${variant} social-media-card ${className}`}
    >
      <div className={'social-media-card__header'}>
        {avatar && (
          <Button
            className={'social-media-card__avatar'}
            style={{ background: avatar?.background }}
            href={avatar?.href}
            target={avatar?.target}
          >
            {renderAvatar(avatar)}
          </Button>
        )}
        {title && subtitle && (
          <div className={'social-media-card__text'}>
            <h3 className={'social-media-card__title'}>{title}</h3>
            <h4 className={'social-media-card__subtitle'}>{subtitle}</h4>
          </div>
        )}
        {button && (
          <Button
            {...button}
            variant={button?.variant || 'primary'}
            radius={button?.radius || 'full'}
            className={'social-media-card__button'}
          />
        )}
      </div>
      <div className={'social-media-card__content'}>{content}</div>
      {tags && tags.length > 0 && (
        <ul className={'social-media-card__tags'}>
          {tags.map(({ variant: tagVariant, ...rest }, i) => (
            <li key={i} className={'social-media-card__tag'}>
              <Anchor {...rest} className={'social-media-card__tag-anchor'} variant={tagVariant || 'white'} />
            </li>
          ))}
        </ul>
      )}

      {metrics && metrics.length > 0 && (
        <ul className={'social-media-card__metrics'}>
          {metrics.map(({ icon, label, value, ...rest }, i) => (
            <li key={i} className={'social-media-card__metric'}>
              <Button {...rest} transparent>
                <p className={'social-media-card__metric-par'}>
                  {icon && <span className={'social-media-card__metric-icon'}>{icon({ size: 22 })}</span>}
                  {value && <span className={'social-media-card__metric-value'}>{value}</span>}
                </p>
                {label && <p className={'social-media-card__metrics-label'}>{label}</p>}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
