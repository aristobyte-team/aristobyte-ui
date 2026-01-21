import * as React from 'react';
import { IconPropsType } from './type';

export const GalleryVertical = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2h18" />
    <rect width="18" height="12" x="3" y="6" rx="2" />
    <path d="M3 22h18" />
  </svg>
);
