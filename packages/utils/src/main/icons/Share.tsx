import * as React from 'react';
import { IconPropsType } from './type';

export const Share = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-Share`;

  return (
  <svg
    id={svgId} width={size} height={size} viewBox="0 0 12 13" fill="none">
    <path
      d="M9.57764 4.25024C10.5441 4.25024 11.3276 3.46674 11.3276 2.50024C11.3276 1.53375 10.5441 0.750244 9.57764 0.750244C8.61114 0.750244 7.82764 1.53375 7.82764 2.50024C7.82764 3.46674 8.61114 4.25024 9.57764 4.25024Z"
      stroke={color}
      strokeWidth="1.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.57764 8.33362C3.54413 8.33362 4.32764 7.55012 4.32764 6.58362C4.32764 5.61712 3.54413 4.83362 2.57764 4.83362C1.61114 4.83362 0.827637 5.61712 0.827637 6.58362C0.827637 7.55012 1.61114 8.33362 2.57764 8.33362Z"
      stroke={color}
      strokeWidth="1.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.57764 12.417C10.5441 12.417 11.3276 11.6335 11.3276 10.667C11.3276 9.70049 10.5441 8.91699 9.57764 8.91699C8.61114 8.91699 7.82764 9.70049 7.82764 10.667C7.82764 11.6335 8.61114 12.417 9.57764 12.417Z"
      stroke={color}
      strokeWidth="1.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.0885 7.46448L8.07267 9.78614"
      stroke={color}
      strokeWidth="1.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.06683 3.3811L4.0885 5.70277"
      stroke={color}
      strokeWidth="1.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};
