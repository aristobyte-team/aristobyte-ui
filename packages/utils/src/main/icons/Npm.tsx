import * as React from 'react';
import { IconPropsType } from './type';

export const Npm = ({ size = 24 }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-Npm`;

  return (
  <svg
    id={svgId} height={size} width={size} viewBox="0 0 700 700" fill="#cb3837" aria-hidden="true">
    <polygon fill="#cb3837" points="0,700 700,700 700,0 0,0" />
    <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
  </svg>
  );
};
