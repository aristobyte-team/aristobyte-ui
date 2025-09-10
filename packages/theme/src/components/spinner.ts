import { tv } from "tailwind-variants";

export const spinner = tv({
  base: "inline-block relative rounded-full",
  variants: {
    size: {
      xsm: "w-4 h-4",
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-10 h-10",
      xlg: "w-12 h-12",
    },
    type: {
      default:
        "animate-rotation border-2 border-solid border-t-current border-opacity-25",
      duo: "animate-rotation border-2 border-solid border-transparent",
      gradient:
        "animate-rotation-linear border-2 border-solid border-r-transparent",
      pulse: "animate-pulse",
      "pulse-duo": "",
    },
    color: {
      default: "text-default",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      error: "text-error",
      warning: "text-warning",
    },
  },
  defaultVariants: {
    size: "md",
    type: "default",
    color: "default",
  },
});
