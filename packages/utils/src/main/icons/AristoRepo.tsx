import * as React from 'react';
import type { IconPropsType } from './type';

export const AristoRepo = ({ size: size = 24 }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-aristo-repo`;
  const repoPrimaryGradientId = `${uid}-aristo-repo-primary-gradient`;
  const repoPrimaryFilterId = `${uid}-aristo-repo-primary-filter`;
  const repoTopGradientId = `${uid}-aristo-repo-top-gradient`;
  const repoMainGradientId = `${uid}-aristo-repo-main-gradient`;
  const repoMainFilterId = `${uid}-aristo-repo-main-filter`;
  const repoBottomGradientId = `${uid}-aristo-repo-bottom-gradient`;
  const repoBottomFilterId = `${uid}-aristo-repo-bottom-filter`;

  return (
    <svg
    id={svgId}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 460 460"
    width={size}
    height={size}
  >
    <defs>
      <linearGradient
        id={repoPrimaryGradientId}
        x1="43.18"
        y1="303.47"
        x2="405.92"
        y2="160.82"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f0513e" />
        <stop offset=".23" stopColor="#f26438" />
        <stop offset=".27" stopColor="#f26736" />
        <stop offset=".53" stopColor="#f47930" />
        <stop offset=".57" stopColor="#f47c2f" />
        <stop offset=".78" stopColor="#f6862e" />
        <stop offset=".8" stopColor="#f68a2d" />
        <stop offset=".91" stopColor="#f89a2a" />
        <stop offset="1" stopColor="#f9a129" />
      </linearGradient>
      <filter
        id={repoPrimaryFilterId}
        x="51.08"
        y="58.64"
        width="371.76"
        height="356.88"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="7" dy="7" />
        <feGaussianBlur result="uuid-6caabca1-2018-4235-b47e-1ce92b4dafe7" stdDeviation="5" />
        <feFlood floodColor="#231f20" floodOpacity=".35" />
        <feComposite in2="uuid-6caabca1-2018-4235-b47e-1ce92b4dafe7" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id={repoTopGradientId}
        x1="58.37"
        y1="211.46"
        x2="376.21"
        y2="86.47"
        xlinkHref={`#${repoPrimaryGradientId}`}
      />
      <linearGradient
        id={repoMainGradientId}
        x1="230.48"
        y1="373.98"
        x2="229.36"
        y2="161.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#f1603b" />
        <stop offset=".23" stopColor="#f47932" />
        <stop offset=".53" stopColor="#f4802f" />
        <stop offset=".78" stopColor="#f68631" />
        <stop offset=".84" stopColor="#f7942b" />
        <stop offset=".93" stopColor="#faa425" />
        <stop offset="1" stopColor="#fbab23" />
      </linearGradient>
      <filter
        id={repoMainFilterId}
        x="44.12"
        y="153.44"
        width="371.76"
        height="252"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="0" dy="-3" />
        <feGaussianBlur result="uuid-b0c1b7e3-d04f-4d3a-910c-5d2cc7f96b37" stdDeviation="5" />
        <feFlood floodColor="#231f20" floodOpacity=".35" />
        <feComposite in2="uuid-b0c1b7e3-d04f-4d3a-910c-5d2cc7f96b37" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient
        id={repoBottomGradientId}
        x1="194.87"
        y1="387.72"
        x2="194.53"
        y2="322.66"
        xlinkHref={`#${repoMainGradientId}`}
      />
      <filter
        id={repoBottomFilterId}
        x="44.12"
        y="308"
        width="301.2"
        height="97.44"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="0" dy="-3" />
        <feGaussianBlur result="uuid-a749f198-dd9a-44a8-8c2f-55415151003e" stdDeviation="5" />
        <feFlood floodColor="#231f20" floodOpacity=".3" />
        <feComposite in2="uuid-a749f198-dd9a-44a8-8c2f-55415151003e" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g>
      <path
        d="M400.77,164.55c0-20.82-16.88-37.7-37.7-37.7h-97.43c-62.91,0-38.71-60.2-102.37-60.2h-66.33c-20.82,0-37.7,16.88-37.7,37.7v125.54h0v125.76c0,20.82,16.88,37.7,37.7,37.7h266.13c20.82,0,37.7-16.88,37.7-37.7v-191.1ZM301.72,292.72l-60.27,60.7c-5.82,4.97-11.81,6.93-18.91,2.95-22.06-20.34-42.68-42.43-64.18-63.44-4.95-6.15-4.95-14.25,0-20.39l44.32-44.3,15.97,15.51c-.07,1.91-1.03,3.52-1.14,5.51-.31,5.48,2.51,11.08,7.79,13.07l.22,43.14c-6.62,2.5-8.76,8.34-7.94,15.09,1.08,8.95,12.01,13.22,19.58,9.05,9.13-5.04,8.87-20.56-1.5-24.08-.6-.37.03-.74.03-.87v-41.87l14.86,14.2c-.08,2.43-.86,4.28-.69,6.87,1.11,16.87,27.68,16.34,26.17-3.14-.46-5.9-5.35-11.32-11.38-11.68-2.2-.13-3.82.81-5.9.64l-15.45-14.94c2.6-10.59-4.78-20.55-16.05-17.44l-16.81-16.82c5.27-4.46,9.75-12.76,17.17-13.84,4.89-.72,8.14.36,11.86,3.42l62.03,62.04c4.94,5.82,5.29,14.78.23,20.62Z"
        fill={`url(#${repoPrimaryGradientId})`}
        filter={`url(#${repoPrimaryFilterId})`}
      />
      <path
        d="M59.23,209.27c0-20.82,16.88-37.7,37.7-37.7h266.13c20.82,0,37.7,16.88,37.7,37.7v-44.72c0-20.82-16.88-37.7-37.7-37.7h-97.43c-62.91,0-38.71-60.2-102.37-60.2h-66.33c-20.82,0-37.7,16.88-37.7,37.7v125.54h0v-20.62Z"
        fill={`url(#${repoTopGradientId})`}
      />
      <path
        d="M363.07,171.57H96.93c-20.82,0-37.7,16.88-37.7,37.7v146.37c0,20.82,16.88,37.7,37.7,37.7h266.13c20.82,0,37.7-16.88,37.7-37.7v-146.37c0-20.82-16.88-37.7-37.7-37.7ZM301.72,292.72l-60.27,60.7c-5.82,4.97-11.81,6.93-18.91,2.95-22.06-20.34-42.68-42.43-64.18-63.44-4.95-6.15-4.95-14.25,0-20.39l44.32-44.3,15.97,15.51c-.07,1.91-1.03,3.52-1.14,5.51-.31,5.48,2.51,11.08,7.79,13.07l.22,43.14c-6.62,2.5-8.76,8.34-7.94,15.09,1.08,8.95,12.01,13.22,19.58,9.05,9.13-5.04,8.87-20.56-1.5-24.08-.6-.37.03-.74.03-.87v-41.87l14.86,14.2c-.08,2.43-.86,4.28-.69,6.87,1.11,16.87,27.68,16.34,26.17-3.14-.46-5.9-5.35-11.32-11.38-11.68-2.2-.13-3.82.81-5.9.64l-15.45-14.94c2.6-10.59-4.78-20.55-16.05-17.44l-16.81-16.82c5.27-4.46,9.75-12.76,17.17-13.84,4.89-.72,8.14.36,11.86,3.42l62.03,62.04c4.94,5.82,5.29,14.78.23,20.62Z"
        fill={`url(#${repoMainGradientId})`}
        filter={`url(#${repoMainFilterId})`}
      />
      <path
        d="M172.53,356.53c-46.52-30.93-84.93-34.66-113.3-27.19v26.31c0,20.82,16.88,37.7,37.7,37.7h197.72c15.9-15.17,31.04-29.85,35.49-34.23,2.26-2.23-83.38,46.77-157.62-2.58Z"
        fill={`url(#${repoBottomGradientId})`}
        filter={`url(#${repoBottomFilterId})`}
      />
    </g>
  </svg>
  );
};
