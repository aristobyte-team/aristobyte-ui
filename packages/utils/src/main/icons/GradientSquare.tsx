import * as React from 'react';
import { IconPropsType } from './type';

export const GradientSquare = ({ size = 24, colors = ['currentColor'] }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-gradient-square`;
  const squareGradientId = `${uid}-gradient-square-fill`;

  return (
    <svg id={svgId} width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="0.5" y="0.5" width={size} height={size} rx="4" fill={`url(#${squareGradientId})`} />
      <defs>
        <linearGradient id={squareGradientId} x1="0.5" y1="8.5" x2="16.5" y2="8.5" gradientUnits="userSpaceOnUse">
          <stop stopColor={colors[0]} />
          <stop offset="1" stopColor={colors[1]} />
        </linearGradient>
      </defs>
    </svg>
  );
};
