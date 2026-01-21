import * as React from 'react';
import { IconPropsType } from './type';

export const Resize = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <path d="M11.5 1.5H16.5V6.5" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M16.5 1.5L10.6667 7.33333"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.5 16.5001L7.33333 10.6667"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6.5 16.5H1.5V11.5" stroke={color} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
