import * as React from 'react';
import { IconPropsType } from './type';

export const Pnpm = ({ size = 24 }: IconPropsType) => {
  const uid = React.useId();
  const svgId = `${uid}-icon-pnpm`;
  const baseShapeId = `${uid}-pnpm-base`;
  const topRightShapeId = `${uid}-pnpm-top-right`;
  const topMidShapeId = `${uid}-pnpm-top-mid`;
  const topLeftShapeId = `${uid}-pnpm-top-left`;
  const midRightShapeId = `${uid}-pnpm-mid-right`;
  const midMidShapeId = `${uid}-pnpm-mid-mid`;
  const bottomMidShapeId = `${uid}-pnpm-bottom-mid`;
  const bottomRightShapeId = `${uid}-pnpm-bottom-right`;
  const bottomLeftShapeId = `${uid}-pnpm-bottom-left`;

  return (
    <svg
      id={svgId}
      preserveAspectRatio="xMidYMid meet"
      viewBox="66.09157809474142 33.5 184.5 184.49999999999997"
      width={size}
      height={size}
    >
      <defs>
        <path d="M67.59 35L247.59 35L247.59 215L67.59 215L67.59 35Z" id={baseShapeId} />
        <path d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z" id={topRightShapeId} />
        <path d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z" id={topMidShapeId} />
        <path d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z" id={topLeftShapeId} />
        <path d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z" id={midRightShapeId} />
        <path d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z" id={midMidShapeId} />
        <path d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z" id={bottomMidShapeId} />
        <path d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z" id={bottomRightShapeId} />
        <path d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z" id={bottomLeftShapeId} />
      </defs>
      <g>
        <g>
          <use xlinkHref={`#${baseShapeId}`} opacity="1" fill="#ffffff" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${topRightShapeId}`} opacity="1" fill="#f9ad00" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${topMidShapeId}`} opacity="1" fill="#f9ad00" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${topLeftShapeId}`} opacity="1" fill="#f9ad00" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${midRightShapeId}`} opacity="1" fill="#f9ad00" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${midMidShapeId}`} opacity="1" fill="#4e4e4e" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${bottomMidShapeId}`} opacity="1" fill="#4e4e4e" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${bottomRightShapeId}`} opacity="1" fill="#4e4e4e" fillOpacity="1" />
        </g>
        <g>
          <use xlinkHref={`#${bottomLeftShapeId}`} opacity="1" fill="#4e4e4e" fillOpacity="1" />
        </g>
      </g>
    </svg>
  );
};
