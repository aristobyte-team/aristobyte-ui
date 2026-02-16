import * as React from 'react';
import { IconPropsType } from './type';

export const LinkedIn = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-LinkedIn`;

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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
  );
};
