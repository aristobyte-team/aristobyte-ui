import * as React from 'react';
import type { IconPropsType } from './type';

export const Branching = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-Branching`;

  return (
  <svg
    id={svgId} width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.4998 18.6667H19.8332C19.1888 18.6667 18.6665 19.1891 18.6665 19.8334V24.5001C18.6665 25.1444 19.1888 25.6667 19.8332 25.6667H24.4998C25.1442 25.6667 25.6665 25.1444 25.6665 24.5001V19.8334C25.6665 19.1891 25.1442 18.6667 24.4998 18.6667Z"
      stroke={color}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.16683 18.6667H3.50016C2.85583 18.6667 2.3335 19.1891 2.3335 19.8334V24.5001C2.3335 25.1444 2.85583 25.6667 3.50016 25.6667H8.16683C8.81116 25.6667 9.3335 25.1444 9.3335 24.5001V19.8334C9.3335 19.1891 8.81116 18.6667 8.16683 18.6667Z"
      stroke={color}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.3333 2.33325H11.6667C11.0223 2.33325 10.5 2.85559 10.5 3.49992V8.16658C10.5 8.81092 11.0223 9.33325 11.6667 9.33325H16.3333C16.9777 9.33325 17.5 8.81092 17.5 8.16658V3.49992C17.5 2.85559 16.9777 2.33325 16.3333 2.33325Z"
      stroke={color}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.8335 18.6667V15.1667C5.8335 14.8572 5.95641 14.5605 6.17521 14.3417C6.394 14.1229 6.69074 14 7.00016 14H21.0002C21.3096 14 21.6063 14.1229 21.8251 14.3417C22.0439 14.5605 22.1668 14.8572 22.1668 15.1667V18.6667"
      stroke={color}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 13.9999V9.33325" stroke={color} strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  );
};
