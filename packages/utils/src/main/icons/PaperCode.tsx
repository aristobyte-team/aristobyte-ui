import * as React from 'react';
import { IconPropsType } from './type';

export const PaperCode = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-PaperCode`;

  return (
  <svg
    id={svgId} width={size} height={size} viewBox="0 0 12 16" fill="none">
    <path
      d="M4.66665 8.33337L3.33331 10L4.66665 11.6667"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33331 8.33337L8.66665 10L7.33331 11.6667"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33331 1.33337V4.00004C7.33331 4.35366 7.47379 4.6928 7.72384 4.94285C7.97389 5.1929 8.31302 5.33337 8.66665 5.33337H11.3333"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00002 1.33337H2.00002C1.6464 1.33337 1.30726 1.47385 1.05721 1.7239C0.807163 1.97395 0.666687 2.31309 0.666687 2.66671V13.3334C0.666687 13.687 0.807163 14.0261 1.05721 14.2762C1.30726 14.5262 1.6464 14.6667 2.00002 14.6667H10C10.3536 14.6667 10.6928 14.5262 10.9428 14.2762C11.1929 14.0261 11.3334 13.687 11.3334 13.3334V4.66671L8.00002 1.33337Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};
