import { IconPropsType } from "./type";

export const Package = ({
  size = 24,
  color = "currentColor",
}: IconPropsType) => (
  <svg width={size} height={size} viewBox="0 0 14 16" fill="none">
    <path
      d="M6.33333 14.4867C6.53603 14.6037 6.76595 14.6653 7 14.6653C7.23405 14.6653 7.46397 14.6037 7.66667 14.4867L12.3333 11.82C12.5358 11.7031 12.704 11.535 12.821 11.3325C12.938 11.1301 12.9998 10.9005 13 10.6667V5.33332C12.9998 5.0995 12.938 4.86986 12.821 4.66743C12.704 4.465 12.5358 4.29689 12.3333 4.17999L7.66667 1.51332C7.46397 1.39629 7.23405 1.33469 7 1.33469C6.76595 1.33469 6.53603 1.39629 6.33333 1.51332L1.66667 4.17999C1.46418 4.29689 1.29599 4.465 1.17897 4.66743C1.06196 4.86986 1.00024 5.0995 1 5.33332V10.6667C1.00024 10.9005 1.06196 11.1301 1.17897 11.3325C1.29599 11.535 1.46418 11.7031 1.66667 11.82L6.33333 14.4867Z"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 14.6667V8"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.19336 4.66666L7.00003 7.99999L12.8067 4.66666"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 2.84668L10 6.28001"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
