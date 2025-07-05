type RippleParamRef = HTMLButtonElement | HTMLAnchorElement;

export type RippleParam<HTMLElementType extends RippleParamRef> = {
  ref: React.RefObject<HTMLElementType | null>;
  clientX: number;
  clientY: number;
};

export const renderRipple = <HTMLElementType extends RippleParamRef>({
  ref,
  clientX,
  clientY,
}: RippleParam<HTMLElementType>) => {
  const button = ref.current;
  if (!button) return;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.id = "ripple";

  const style = document.createElement("style");
  style.innerHTML = `
      #ripple {
        animation: ripple 300ms linear;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        height: ${diameter}px;
        left: ${clientX - button.getBoundingClientRect().left - radius}px;
        pointer-events: none;
        position: absolute;
        top: ${clientY - button.getBoundingClientRect().top - radius}px;
        transform: scale(0);
        width: ${diameter}px;
        z-index: 0;
      }
      
      @keyframes ripple {
        to {
          opacity: 0;
          transform: scale(2);
        }
      }
    `;

  button.appendChild(style);
  button.appendChild(circle);

  circle.addEventListener("animationend", () => {
    circle.remove();
    style.remove();
  });
};
