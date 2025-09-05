import { IconPropsType } from "./type";

export const Code = ({ size = 24, color = "currentColor" }: IconPropsType) => (
  <svg width={size} height={size} viewBox="0 0 16 12" fill="none">
    <path
      d="M12 8.66659L14.6667 5.99992L12 3.33325"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.99998 3.33325L1.33331 5.99992L3.99998 8.66659"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.66665 0.666748L6.33331 11.3334"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
