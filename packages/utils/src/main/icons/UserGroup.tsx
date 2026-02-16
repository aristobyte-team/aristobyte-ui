import * as React from 'react';
import { IconPropsType } from './type';

export const UserGroup = ({ size = 24, color = 'currentColor' }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-UserGroup`;

  return (
  <svg
    id={svgId} width={size} height={size} viewBox="0 0 20 18" fill="none">
    <path
      d="M13.3334 16.5V14.8333C13.3334 13.9493 12.9822 13.1014 12.357 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H5.00002C4.11597 11.5 3.26812 11.8512 2.643 12.4763C2.01788 13.1014 1.66669 13.9493 1.66669 14.8333V16.5"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 1.60669C14.0481 1.792 14.6811 2.20941 15.133 2.79341C15.585 3.37741 15.8301 4.09493 15.8301 4.83336C15.8301 5.57178 15.585 6.28931 15.133 6.8733C14.6811 7.4573 14.0481 7.87471 13.3333 8.06002"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 16.5001V14.8334C18.3328 14.0948 18.0869 13.3774 17.6345 12.7937C17.182 12.2099 16.5484 11.793 15.8333 11.6084"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.50002 8.16667C9.34097 8.16667 10.8334 6.67428 10.8334 4.83333C10.8334 2.99238 9.34097 1.5 7.50002 1.5C5.65907 1.5 4.16669 2.99238 4.16669 4.83333C4.16669 6.67428 5.65907 8.16667 7.50002 8.16667Z"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};
