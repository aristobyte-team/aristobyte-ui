import * as React from 'react';
import { IconPropsType } from './type';

export const User = ({ size = 24, color = 'currentColor' }: IconPropsType) => (
  <svg width={size} height={size} viewBox="0 0 15 19" fill="none">
    <path
      d="M13.2026 17.4586V15.7086C13.2026 14.7804 12.8339 13.8901 12.1775 13.2337C11.5211 12.5774 10.6309 12.2086 9.70264 12.2086H4.45264C3.52438 12.2086 2.63414 12.5774 1.97776 13.2337C1.32139 13.8901 0.952637 14.7804 0.952637 15.7086V17.4586"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.07764 8.70862C9.01063 8.70862 10.5776 7.14161 10.5776 5.20862C10.5776 3.27562 9.01063 1.70862 7.07764 1.70862C5.14464 1.70862 3.57764 3.27562 3.57764 5.20862C3.57764 7.14161 5.14464 8.70862 7.07764 8.70862Z"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
