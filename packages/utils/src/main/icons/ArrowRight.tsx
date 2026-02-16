import * as React from 'react';
import { IconPropsType } from './type';

export const ArrowRight = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-ArrowRight`;

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
    <path d="m9 18 6-6-6-6" />
  </svg>
  );
};
