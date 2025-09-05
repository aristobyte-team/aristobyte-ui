import { IconPropsType } from "./type";

export const Link = ({ size = 24, color = "currentColor" }: IconPropsType) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
    <path
      d="M6.5 0.5H9.5V3.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6L9.5 0.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 5.5V8.5C8 8.76522 7.89464 9.01957 7.70711 9.20711C7.51957 9.39464 7.26522 9.5 7 9.5H1.5C1.23478 9.5 0.98043 9.39464 0.792893 9.20711C0.605357 9.01957 0.5 8.76522 0.5 8.5V3C0.5 2.73478 0.605357 2.48043 0.792893 2.29289C0.98043 2.10536 1.23478 2 1.5 2H4.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
