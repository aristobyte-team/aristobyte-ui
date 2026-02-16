import * as React from 'react';
import { IconPropsType } from './type';

export const Success = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-Success`;

  return (
  <svg
    id={svgId}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
  );
};
