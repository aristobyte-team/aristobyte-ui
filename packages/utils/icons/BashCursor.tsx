import { IconPropsType } from "./type";

export const BashCursor = ({
  size = 24,
  color = "currentColor",
}: IconPropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12.8334H14.6667"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.33331 11.1666L6.33331 6.16663L1.33331 1.16663"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
