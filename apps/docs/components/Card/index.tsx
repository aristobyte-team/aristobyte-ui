import * as React from "react";
import { type IconPropsType } from "@aristobyte-ui/utils";

import "./Card.scss";
import { Label } from "../Label";

export interface ICard {
  title?: string;
  description?: string;
  label?: {
    text: string;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
  };
  icon?: {
    component: (
      props: IconPropsType
    ) => React.JSX.Element | React.ReactNode | React.ReactElement;
    size?: number;
    color?: string;
    colors?: string[];
  };
  children?: React.ReactNode | React.ReactElement | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<ICard> = ({
  title,
  description,
  label,
  icon,
  children,
  className = "",
  style = {},
}) => (
  <div className={`card ${className}`} style={style}>
    {(title || icon || label) && (
      <h3 className="card__title">
        {icon && (
          <div className="card__icon">
            {icon.component({
              size: icon.size || 8,
              color: icon.color,
              colors: icon.colors,
            })}
          </div>
        )}
        {title && <span dangerouslySetInnerHTML={{ __html: title }} />}
        {label && (
          <Label
            text={label.text}
            backgroundColor={label.backgroundColor}
            borderColor={label.borderColor}
            color={label.color}
          />
        )}
      </h3>
    )}
    {description && (
      <p
        className="card__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
    {children && <div className="card__content">{children}</div>}
  </div>
);
