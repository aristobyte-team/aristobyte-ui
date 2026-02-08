import * as React from 'react';
import type { IconPropsType } from './type';

export const AristoBadges = ({ size: size = 24 }: IconPropsType) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="uuid-25b8aaa7-f33d-490d-b053-ec28f3448de7"
    viewBox="0 0 400 460"
  >
    <defs>
      <linearGradient
        id="uuid-2d965f72-06af-49f8-bd2d-8886d0de7fae"
        x1="197.19"
        y1="307.66"
        x2="201.32"
        y2="14.72"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#f0513c" />
        <stop offset=".28" stop-color="#f47732" />
        <stop offset=".7" stop-color="#f7912c" />
        <stop offset="1" stop-color="#fcb31b" />
      </linearGradient>
      <filter
        id="uuid-050331cf-6f99-4e53-ac63-13763f75edbd"
        x="38.98"
        y="39.03"
        width="330"
        height="390"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="3.96" dy="3.96" />
        <feGaussianBlur result="uuid-aede8ff6-4d4a-4b25-b089-2d278d09947e" stdDeviation="4.95" />
        <feFlood flood-color="#231f20" flood-opacity=".32" />
        <feComposite in2="uuid-aede8ff6-4d4a-4b25-b089-2d278d09947e" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id="uuid-9e0e008f-536a-4fd8-a941-cfe539fa3cae"
        x1="251.05"
        y1="411.14"
        x2="247.1"
        y2="209.26"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fdef28" />
        <stop offset="0" stop-color="#fde819" />
        <stop offset="0" stop-color="#f0503d" />
        <stop offset=".3" stop-color="#f37433" />
        <stop offset=".7" stop-color="#f68830" />
        <stop offset="1" stop-color="#fbaa20" />
      </linearGradient>
      <filter
        id="uuid-d72f3e7f-715f-4b5e-aa1c-b1254b052aae"
        x="136.5"
        y="118.79"
        width="126.96"
        height="126.96"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="0" dy="0" />
        <feGaussianBlur result="uuid-b04c353c-c25d-4722-8920-1fbe3f6fadad" stdDeviation="5" />
        <feFlood flood-color="#231f20" flood-opacity=".34" />
        <feComposite in2="uuid-b04c353c-c25d-4722-8920-1fbe3f6fadad" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="uuid-c5dd55a1-3aca-414e-842b-6a0b754486ef">
      <path
        id="uuid-0b680c89-739a-4da3-8f02-f3b22264deea"
        d="M340.56,90.51l-131.49-39.2c-2.96-.88-6.02-1.32-9.07-1.31-3.06,0-6.12.43-9.07,1.31L59.44,90.51c-5.64,1.68-9.48,6.78-9.44,12.53.25,35.43,1.5,140.68,3.99,153.26,12.22,61.57,45.04,79.33,76.03,103.25,22.36,16.92,41.54,35.36,60.26,47.59,2.94,1.92,6.33,2.87,9.72,2.85,3.39.01,6.78-.94,9.72-2.85,18.72-12.24,37.9-30.67,60.26-47.59,30.98-23.92,63.81-41.68,76.03-103.25,2.5-12.58,3.75-117.83,3.99-153.26.04-5.76-3.8-10.85-9.44-12.53Z"
        fill="url(#uuid-2d965f72-06af-49f8-bd2d-8886d0de7fae)"
        filter="url(#uuid-050331cf-6f99-4e53-ac63-13763f75edbd)"
      />
      <path
        id="uuid-bfef042f-a99e-4f5e-9127-5dfd118e62b2"
        d="M155.52,380.16c7.87,5.96,22.63,19.06,34.75,26.99,2.94,1.92,6.33,2.87,9.72,2.85,3.39.01,6.78-.94,9.72-2.85,18.72-12.24,37.9-30.67,60.26-47.59,30.98-23.92,63.81-41.68,76.03-103.25,1.63-8.22,2.94-84.56,3.03-96.85.02-2.85-23.23,82.57-101.64,98.36-113.51,22.86-107.53,110.25-91.87,122.34Z"
        fill="url(#uuid-9e0e008f-536a-4fd8-a941-cfe539fa3cae)"
      />
      <ellipse
        id="uuid-d6b8eb2a-65c8-4bf3-bee3-aeeae1e7edc6"
        cx="200"
        cy="182.22"
        rx="48.37"
        ry="48.29"
        fill="#fff"
        filter="url(#uuid-d72f3e7f-715f-4b5e-aa1c-b1254b052aae)"
      />
    </g>
  </svg>
);
