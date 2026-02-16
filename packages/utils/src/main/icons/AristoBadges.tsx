import * as React from 'react';
import type { IconPropsType } from './type';

export const AristoBadges = ({ size: size = 24 }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-aristo-badges`;
  const badgesPrimaryGradientId = `${uid}-aristobadges-primary-gradient`;
  const badgesGlowFilterId = `${uid}-aristobadges-glow-filter`;
  const badgesAccentGradientId = `${uid}-aristobadges-accent-gradient`;

  return (
    <svg
      id={svgId}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 460"
    >
      <defs>
      <linearGradient
        id={badgesPrimaryGradientId}
        x1="197.19"
        y1="307.66"
        x2="201.32"
        y2="14.72"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f0513c" />
        <stop offset="0.28" stopColor="#f47732" />
        <stop offset="0.7" stopColor="#f7912c" />
        <stop offset="1" stopColor="#fcb31b" />
      </linearGradient>
      <filter
        id={badgesGlowFilterId}
        x="38.98"
        y="39.03"
        width="330"
        height="390"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="3.96" dy="3.96" />
        <feGaussianBlur result="uuid-33330b19-1183-4c89-8ab0-6a6ac59b67c8" stdDeviation="4.95" />
        <feFlood floodColor="#231f20" floodOpacity="0.32" />
        <feComposite in2="uuid-33330b19-1183-4c89-8ab0-6a6ac59b67c8" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id={badgesAccentGradientId}
        x1="251.05"
        y1="411.14"
        x2="247.1"
        y2="209.26"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fdef28" />
        <stop offset="0" stopColor="#fde819" />
        <stop offset="0" stopColor="#f0503d" />
        <stop offset="0.3" stopColor="#f37433" />
        <stop offset="0.7" stopColor="#f68830" />
        <stop offset="1" stopColor="#fbaa20" />
      </linearGradient>
      </defs>
      <g>
      <path
        d="M340.56,90.51l-131.49-39.2c-2.96-.88-6.02-1.32-9.07-1.31-3.06,0-6.12.43-9.07,1.31L59.44,90.51c-5.64,1.68-9.48,6.78-9.44,12.53.25,35.43,1.5,140.68,3.99,153.26,12.22,61.57,45.04,79.33,76.03,103.25,22.36,16.92,41.54,35.36,60.26,47.59,2.94,1.92,6.33,2.87,9.72,2.85,3.39.01,6.78-.94,9.72-2.85,18.72-12.24,37.9-30.67,60.26-47.59,30.98-23.92,63.81-41.68,76.03-103.25,2.5-12.58,3.75-117.83,3.99-153.26.04-5.76-3.8-10.85-9.44-12.53ZM200,230.51c-26.72,0-48.37-21.62-48.37-48.29s21.66-48.29,48.37-48.29,48.37,21.62,48.37,48.29-21.66,48.29-48.37,48.29Z"
        fill={`url(#${badgesPrimaryGradientId})`}
        filter={`url(#${badgesGlowFilterId})`}
      />
      <path
        d="M155.52,380.16c7.87,5.96,22.63,19.06,34.75,26.99,2.94,1.92,6.33,2.87,9.72,2.85,3.39.01,6.78-.94,9.72-2.85,18.72-12.24,37.9-30.67,60.26-47.59,30.98-23.92,63.81-41.68,76.03-103.25,1.63-8.22,2.94-84.56,3.03-96.85.02-2.85-23.23,82.57-101.64,98.36-113.51,22.86-107.53,110.25-91.87,122.34Z"
        fill={`url(#${badgesAccentGradientId})`}
      />
      </g>
    </svg>
  );
};
