import * as React from 'react';
import { IconPropsType } from './type';

export const Plug = ({ size = 24 }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-plug`;
  const primaryGradientId = `${uid}-plug-primary-gradient`;

  return (
    <svg
      id={svgId}
      data-name="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <defs>
        <linearGradient
          id={primaryGradientId}
          data-name="Orange, yellow"
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff23a" />
          <stop offset="0" stopColor="#fee52c" />
          <stop offset=".1" stopColor="#fdd41a" />
          <stop offset=".2" stopColor="#fdc90e" />
          <stop offset=".3" stopColor="#fdc60b" />
          <stop offset=".7" stopColor="#f28f3f" />
          <stop offset=".9" stopColor="#ed693c" />
          <stop offset="1" stopColor="#e83e39" />
        </linearGradient>
      </defs>
      <path
        d="M18,7h-2V2c0-.6-.4-1-1-1s-1,.4-1,1v5h-4V2c0-.6-.4-1-1-1s-1,.4-1,1v5h-2c-.6,0-1,.4-1,1v5c0,2.8,2.2,5,5,5h1v4c0,.6.4,1,1,1s1-.4,1-1v-4h1c2.8,0,5-2.2,5-5v-5c0-.6-.4-1-1-1ZM17,13c0,1.7-1.3,3-3,3h-4c-1.7,0-3-1.3-3-3v-4h10v4Z"
        fill={`url(#${primaryGradientId})`}
      />
    </svg>
  );
};
