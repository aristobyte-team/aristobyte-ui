import { IconPropsType } from "./type";

export const Eye = ({ size = 24, color = "currentColor" }: IconPropsType) => (
  <svg width={size} height={size} viewBox="0 0 16 12" fill="none">
    <path
      d="M1.37468 6.232C1.31912 6.08232 1.31912 5.91767 1.37468 5.768C1.91581 4.4559 2.83435 3.33402 4.01386 2.5446C5.19336 1.75517 6.58071 1.33374 8.00001 1.33374C9.41932 1.33374 10.8067 1.75517 11.9862 2.5446C13.1657 3.33402 14.0842 4.4559 14.6253 5.768C14.6809 5.91767 14.6809 6.08232 14.6253 6.232C14.0842 7.54409 13.1657 8.66597 11.9862 9.4554C10.8067 10.2448 9.41932 10.6663 8.00001 10.6663C6.58071 10.6663 5.19336 10.2448 4.01386 9.4554C2.83435 8.66597 1.91581 7.54409 1.37468 6.232Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
