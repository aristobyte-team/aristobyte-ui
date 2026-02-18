import * as React from 'react';
import { IconPropsType } from './type';

export const ArrowLeft = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-arrow-left`;

  return (
    <svg
      id={svgId}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-left-icon lucide-chevron-left"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};
