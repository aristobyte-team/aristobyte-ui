import * as React from 'react';
import { IconPropsType } from './type';

export const Disabled = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-Disabled`;

  return (
  <svg
    id={svgId} width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      d="M4.10748 4.10742L15.8916 15.8924"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 18.3334C14.6024 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6024 1.66675 10 1.66675C5.39765 1.66675 1.66669 5.39771 1.66669 10.0001C1.66669 14.6025 5.39765 18.3334 10 18.3334Z"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};
