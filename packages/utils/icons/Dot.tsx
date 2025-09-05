import { IconPropsType } from "./type";

export const Dot = ({ size = 24, color = "currentColor" }: IconPropsType) => (
  <svg width={size} height={size} viewBox="0 0 8 8">
    <rect y="0.5" width={size} height={size} rx="4" fill={color} />
  </svg>
);
