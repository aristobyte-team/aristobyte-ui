// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import plugin from "tailwindcss/plugin";
import type { PluginType } from "./types";

export const spinner: PluginType = plugin(function ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  addComponents,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  addBase,
}) {
  addBase({
    "@keyframes rotation": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    "@keyframes pulse": {
      "0%": { opacity: "1", transform: "scale(0)" },
      "100%": { opacity: "0", transform: "scale(1)" },
    },
    "@keyframes pulse-duo": {
      "0%,100%": { opacity: "1", transform: "translate(-50%, -50%) scale(0)" },
      "50%": { opacity: "0", transform: "translate(-50%, -50%) scale(1)" },
    },
  });

  const sizesMap = {
    ".spinner-xsm": { "@apply w-[1rem] h-[1rem]": {} },
    ".spinner-sm": { "@apply w-[1.5rem] h-[1.5rem]": {} },
    ".spinner-md": { "@apply w-[2rem] h-[2rem]": {} },
    ".spinner-lg": { "@apply w-[2.5rem] h-[2.5rem]": {} },
    ".spinner-xlg": { "@apply w-[3rem] h-[3rem]": {} },
  };

  const typeMap: Record<string, unknown> = {
    ".spinner-default": {
      animation: "rotation 0.8s ease infinite",
      borderRadius: "50%",
    },
    ".spinner-duo": {
      animation: "rotation 0.8s ease infinite",
      border: "3px solid transparent",
      borderRadius: "50%",
    },
    ".spinner-gradient": {
      animation: "rotation 0.8s linear infinite",
      borderRight: "3px solid transparent",
      borderRadius: "50%",
    },
    ".spinner-pulse": {
      animation: "pulse 1s ease-in-out infinite",
      borderRadius: "50%",
      position: "relative",
    },
    ".spinner-pulse-duo": {
      position: "relative",
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        transform: "translate(-50%, -50%) scale(0)",
      },
      "&::before": {
        animation: "pulse-duo 2s ease-in-out infinite",
      },
      "&::after": {
        animation: "pulse-duo 2s 1s ease-in-out infinite",
      },
    },
  };

  const variantsMap = {
    ".spinner-default-default": {
      "@apply border-[3px] border-[#1f293740] border-t-[#1f2937] rounded-full animate-spin":
        {},
    },
    ".spinner-default-default:hover": {
      "@apply border-[3px] border-[#11182740] border-t-[#111827] rounded-full animate-spin":
        {},
    },
    ".spinner-default-default:disabled": {
      "@apply border-[3px] border-[rgba(31,41,55,0.5)] border-t-[rgba(31,41,55,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-default-duo": {
      "@apply border-[3px] border-transparent border-t-[#1f2937] border-b-[#1f2937] rounded-full animate-spin":
        {},
    },
    ".spinner-default-duo:hover": {
      "@apply border-[3px] border-transparent border-t-[#111827] border-b-[#111827] rounded-full animate-spin":
        {},
    },
    ".spinner-default-duo:disabled": {
      "@apply border-[3px] border-transparent border-t-[rgba(31,41,55,0.5)] border-b-[rgba(31,41,55,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-default-gradient": {
      "@apply border-[3px] border-t-[#1f2937] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-default-gradient:hover": {
      "@apply border-[3px] border-t-[#111827] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-default-gradient:disabled": {
      "@apply border-[3px] border-t-[rgba(31,41,55,0.5)] border-r-[3px] border-transparent rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-default-pulse": {
      "@apply bg-[#1f2937] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-default-pulse:hover": {
      "@apply bg-[#111827] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-default-pulse:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] rounded-full opacity-50 cursor-not-allowed w-full h-full":
        {},
    },
    ".spinner-default-pulse-duo": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-default-pulse-duo:hover": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-default-pulse-duo:disabled": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s] opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-primary-default": {
      "@apply border-[3px] border-[#2563eb40] border-t-[#2563eb] rounded-full animate-spin":
        {},
    },
    ".spinner-primary-default:hover": {
      "@apply border-[3px] border-[#1d4ed840] border-t-[#1d4ed8] rounded-full animate-spin":
        {},
    },
    ".spinner-primary-default:disabled": {
      "@apply border-[3px] border-[rgba(37,99,235,0.5)] border-t-[rgba(37,99,235,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-primary-duo": {
      "@apply border-[3px] border-transparent border-t-[#2563eb] border-b-[#2563eb] rounded-full animate-spin":
        {},
    },
    ".spinner-primary-duo:hover": {
      "@apply border-[3px] border-transparent border-t-[#1d4ed8] border-b-[#1d4ed8] rounded-full animate-spin":
        {},
    },
    ".spinner-primary-duo:disabled": {
      "@apply border-[3px] border-transparent border-t-[rgba(37,99,235,0.5)] border-b-[rgba(37,99,235,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-primary-gradient": {
      "@apply border-[3px] border-t-[#2563eb] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-primary-gradient:hover": {
      "@apply border-[3px] border-t-[#1d4ed8] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-primary-gradient:disabled": {
      "@apply border-[3px] border-t-[rgba(37,99,235,0.5)] border-r-[3px] border-transparent rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-primary-pulse": {
      "@apply bg-[#2563eb] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-primary-pulse:hover": {
      "@apply bg-[#1d4ed8] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-primary-pulse:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] rounded-full opacity-50 cursor-not-allowed w-full h-full":
        {},
    },
    ".spinner-primary-pulse-duo": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-primary-pulse-duo:hover": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-primary-pulse-duo:disabled": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s] opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-secondary-default": {
      "@apply border-[3px] border-[#4f46e540] border-t-[#4f46e5] rounded-full animate-spin":
        {},
    },
    ".spinner-secondary-default:hover": {
      "@apply border-[3px] border-[#4338ca40] border-t-[#4338ca] rounded-full animate-spin":
        {},
    },
    ".spinner-secondary-default:disabled": {
      "@apply border-[3px] border-[rgba(79,70,229,0.5)] border-t-[rgba(79,70,229,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-secondary-duo": {
      "@apply border-[3px] border-transparent border-t-[#4f46e5] border-b-[#4f46e5] rounded-full animate-spin":
        {},
    },
    ".spinner-secondary-duo:hover": {
      "@apply border-[3px] border-transparent border-t-[#4338ca] border-b-[#4338ca] rounded-full animate-spin":
        {},
    },
    ".spinner-secondary-duo:disabled": {
      "@apply border-[3px] border-transparent border-t-[rgba(79,70,229,0.5)] border-b-[rgba(79,70,229,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-secondary-gradient": {
      "@apply border-[3px] border-t-[#4f46e5] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-secondary-gradient:hover": {
      "@apply border-[3px] border-t-[#4338ca] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-secondary-gradient:disabled": {
      "@apply border-[3px] border-t-[rgba(79,70,229,0.5)] border-r-[3px] border-transparent rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-secondary-pulse": {
      "@apply bg-[#4f46e5] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-secondary-pulse:hover": {
      "@apply bg-[#4338ca] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-secondary-pulse:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] rounded-full opacity-50 cursor-not-allowed w-full h-full":
        {},
    },
    ".spinner-secondary-pulse-duo": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-secondary-pulse-duo:hover": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-secondary-pulse-duo:disabled": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s] opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-success-default": {
      "@apply border-[3px] border-[#16a34a40] border-t-[#16a34a] rounded-full animate-spin":
        {},
    },
    ".spinner-success-default:hover": {
      "@apply border-[3px] border-[#15803d40] border-t-[#15803d] rounded-full animate-spin":
        {},
    },
    ".spinner-success-default:disabled": {
      "@apply border-[3px] border-[rgba(22,163,74,0.5)] border-t-[rgba(22,163,74,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-success-duo": {
      "@apply border-[3px] border-transparent border-t-[#16a34a] border-b-[#16a34a] rounded-full animate-spin":
        {},
    },
    ".spinner-success-duo:hover": {
      "@apply border-[3px] border-transparent border-t-[#15803d] border-b-[#15803d] rounded-full animate-spin":
        {},
    },
    ".spinner-success-duo:disabled": {
      "@apply border-[3px] border-transparent border-t-[rgba(22,163,74,0.5)] border-b-[rgba(22,163,74,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-success-gradient": {
      "@apply border-[3px] border-t-[#16a34a] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-success-gradient:hover": {
      "@apply border-[3px] border-t-[#15803d] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-success-gradient:disabled": {
      "@apply border-[3px] border-t-[rgba(22,163,74,0.5)] border-r-[3px] border-transparent rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-success-pulse": {
      "@apply bg-[#16a34a] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-success-pulse:hover": {
      "@apply bg-[#15803d] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-success-pulse:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] rounded-full opacity-50 cursor-not-allowed w-full h-full":
        {},
    },
    ".spinner-success-pulse-duo": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-success-pulse-duo:hover": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-success-pulse-duo:disabled": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s] opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-warning-default": {
      "@apply border-[3px] border-[#d9770640] border-t-[#d97706] rounded-full animate-spin":
        {},
    },
    ".spinner-warning-default:hover": {
      "@apply border-[3px] border-[#b4530940] border-t-[#b45309] rounded-full animate-spin":
        {},
    },
    ".spinner-warning-default:disabled": {
      "@apply border-[3px] border-[rgba(217,119,6,0.5)] border-t-[rgba(217,119,6,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-warning-duo": {
      "@apply border-[3px] border-transparent border-t-[#d97706] border-b-[#d97706] rounded-full animate-spin":
        {},
    },
    ".spinner-warning-duo:hover": {
      "@apply border-[3px] border-transparent border-t-[#b45309] border-b-[#b45309] rounded-full animate-spin":
        {},
    },
    ".spinner-warning-duo:disabled": {
      "@apply border-[3px] border-transparent border-t-[rgba(217,119,6,0.5)] border-b-[rgba(217,119,6,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-warning-gradient": {
      "@apply border-[3px] border-t-[#d97706] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-warning-gradient:hover": {
      "@apply border-[3px] border-t-[#b45309] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-warning-gradient:disabled": {
      "@apply border-[3px] border-t-[rgba(217,119,6,0.5)] border-r-[3px] border-transparent rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-warning-pulse": {
      "@apply bg-[#d97706] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-warning-pulse:hover": {
      "@apply bg-[#b45309] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-warning-pulse:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] rounded-full opacity-50 cursor-not-allowed w-full h-full":
        {},
    },
    ".spinner-warning-pulse-duo": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-warning-pulse-duo:hover": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-warning-pulse-duo:disabled": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s] opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-error-default": {
      "@apply border-[3px] border-[#dc262640] border-t-[#dc2626] rounded-full animate-spin":
        {},
    },
    ".spinner-error-default:hover": {
      "@apply border-[3px] border-[#b91c1c40] border-t-[#b91c1c] rounded-full animate-spin":
        {},
    },
    ".spinner-error-default:disabled": {
      "@apply border-[3px] border-[rgba(220,38,38,0.5)] border-t-[rgba(220,38,38,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-error-duo": {
      "@apply border-[3px] border-transparent border-t-[#dc2626] border-b-[#dc2626] rounded-full animate-spin":
        {},
    },
    ".spinner-error-duo:hover": {
      "@apply border-[3px] border-transparent border-t-[#b91c1c] border-b-[#b91c1c] rounded-full animate-spin":
        {},
    },
    ".spinner-error-duo:disabled": {
      "@apply border-[3px] border-transparent border-t-[rgba(220,38,38,0.5)] border-b-[rgba(220,38,38,0.5)] rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-error-gradient": {
      "@apply border-[3px] border-t-[#dc2626] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-error-gradient:hover": {
      "@apply border-[3px] border-t-[#b91c1c] border-r-[3px] border-transparent rounded-full animate-spin":
        {},
    },
    ".spinner-error-gradient:disabled": {
      "@apply border-[3px] border-t-[rgba(220,38,38,0.5)] border-r-[3px] border-transparent rounded-full opacity-50 cursor-not-allowed":
        {},
    },
    ".spinner-error-pulse": {
      "@apply bg-[#dc2626] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-error-pulse:hover": {
      "@apply bg-[#b91c1c] rounded-full animate-pulse w-full h-full": {},
    },
    ".spinner-error-pulse:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] rounded-full opacity-50 cursor-not-allowed w-full h-full":
        {},
    },
    ".spinner-error-pulse-duo": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-error-pulse-duo:hover": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s]":
        {},
    },
    ".spinner-error-pulse-duo:disabled": {
      "@apply relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:animate-pulse-duo\n           after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:animate-pulse-duo after:animation-delay-[1s] opacity-50 cursor-not-allowed":
        {},
    },
  };

  addComponents({
    ".spinner": { display: "inline-block" },
    ...sizesMap,
    ...typeMap,
    ...variantsMap,
  });
});
