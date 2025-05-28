import * as React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.classList.add(styles["button__ripple"]);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;

    button.appendChild(circle);

    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`${styles["button"]} ${styles[`button--${variant}`]} ${className}`}
      onClick={(e) => {
        createRipple(e);
        props.onClick?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
};
