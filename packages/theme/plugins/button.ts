// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import plugin from "tailwindcss/plugin";
import type { PluginType } from "./types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const button: PluginType = plugin(function ({ addComponents }) {
  const btnBase = {
    ".btn": {
      "@apply relative flex items-center justify-center font-medium gap-2.5 transition duration-200 ease-in-out cursor-pointer select-none overflow-hidden text-center":
        {},
      "@apply active:scale-95 disabled:cursor-not-allowed disabled:opacity-100":
        {},
    },
    ".btn-transparent": {
      "@apply bg-transparent": {},
    },
  };

  const sizeMap = {
    ".btn-xsm": { "@apply text-xs leading-4 px-2 py-1 min-h-[28px]": {} },
    ".btn-sm": { "@apply text-sm leading-5 px-3 py-1.5 min-h-[32px]": {} },
    ".btn-md": { "@apply text-base leading-6 px-4 py-2 min-h-[40px]": {} },
    ".btn-lg": { "@apply text-lg leading-7 px-5 py-2.5 min-h-[44px]": {} },
    ".btn-xlg": { "@apply text-xl leading-7 px-6 py-3 min-h-[48px]": {} },
  };

  const radiusMap = {
    ".btn-radius-none": { "@apply rounded-none": {} },
    ".btn-radius-sm": { "@apply rounded-sm": {} },
    ".btn-radius-md": { "@apply rounded-md": {} },
    ".btn-radius-lg": { "@apply rounded-lg": {} },
    ".btn-radius-full": { "@apply rounded-full": {} },
  };

  const variantsMap = {
    ".button-default-solid": {
      "@apply text-white bg-[#1f2937]": {},
    },
    ".button-default-solid:hover": {
      "@apply bg-[#111827]": {},
    },
    ".button-default-solid:disabled": {
      "@apply bg-[rgba(31, 41, 55, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-default-outline": {
      "@apply text-white bg-[#1f293733] border border-[#1f2937]": {},
    },
    ".button-default-outline:hover": {
      "@apply bg-[#111827]": {},
    },
    ".button-default-outline:disabled": {
      "@apply bg-[rgba(31, 41, 55, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-default-outline-dashed": {
      "@apply text-white bg-[#1f293733] border border-dashed border-[#1f2937]":
        {},
    },
    ".button-default-outline-dashed:hover": {
      "@apply bg-[#111827]": {},
    },
    ".button-default-outline-dashed:disabled": {
      "@apply bg-[rgba(31, 41, 55, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-default-no-outline": {
      "@apply text-white bg-[#1f293733]": {},
    },
    ".button-default-no-outline:hover": {
      "@apply bg-[#111827]": {},
    },
    ".button-default-no-outline:disabled": {
      "@apply bg-[rgba(31, 41, 55, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-default-glowing": {
      "@apply text-white bg-[#1f293733] border border-[#1f2937] shadow-[0_0_8px_#1f293780,0_0_16px_#1f293766,0_0_24px_#1f29374d]":
        {},
    },
    ".button-default-glowing:hover": {
      "@apply bg-[#111827]": {},
    },
    ".button-default-glowing:disabled": {
      "@apply bg-[rgba(31, 41, 55, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-primary-solid": {
      "@apply text-white bg-[#2563eb]": {},
    },
    ".button-primary-solid:hover": {
      "@apply bg-[#1d4ed8]": {},
    },
    ".button-primary-solid:disabled": {
      "@apply bg-[rgba(37, 99, 235, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-primary-outline": {
      "@apply text-white bg-[#2563eb33] border border-[#2563eb]": {},
    },
    ".button-primary-outline:hover": {
      "@apply bg-[#1d4ed8]": {},
    },
    ".button-primary-outline:disabled": {
      "@apply bg-[rgba(37, 99, 235, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-primary-outline-dashed": {
      "@apply text-white bg-[#2563eb33] border border-dashed border-[#2563eb]":
        {},
    },
    ".button-primary-outline-dashed:hover": {
      "@apply bg-[#1d4ed8]": {},
    },
    ".button-primary-outline-dashed:disabled": {
      "@apply bg-[rgba(37, 99, 235, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-primary-no-outline": {
      "@apply text-white bg-[#2563eb33]": {},
    },
    ".button-primary-no-outline:hover": {
      "@apply bg-[#1d4ed8]": {},
    },
    ".button-primary-no-outline:disabled": {
      "@apply bg-[rgba(37, 99, 235, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-primary-glowing": {
      "@apply text-white bg-[#2563eb33] border border-[#2563eb] shadow-[0_0_8px_#2563eb80,0_0_16px_#2563eb66,0_0_24px_#2563eb4d]":
        {},
    },
    ".button-primary-glowing:hover": {
      "@apply bg-[#1d4ed8]": {},
    },
    ".button-primary-glowing:disabled": {
      "@apply bg-[rgba(37, 99, 235, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-secondary-solid": {
      "@apply text-white bg-[#4f46e5]": {},
    },
    ".button-secondary-solid:hover": {
      "@apply bg-[#4338ca]": {},
    },
    ".button-secondary-solid:disabled": {
      "@apply bg-[rgba(79, 70, 229, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-secondary-outline": {
      "@apply text-white bg-[#4f46e533] border border-[#4f46e5]": {},
    },
    ".button-secondary-outline:hover": {
      "@apply bg-[#4338ca]": {},
    },
    ".button-secondary-outline:disabled": {
      "@apply bg-[rgba(79, 70, 229, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-secondary-outline-dashed": {
      "@apply text-white bg-[#4f46e533] border border-dashed border-[#4f46e5]":
        {},
    },
    ".button-secondary-outline-dashed:hover": {
      "@apply bg-[#4338ca]": {},
    },
    ".button-secondary-outline-dashed:disabled": {
      "@apply bg-[rgba(79, 70, 229, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-secondary-no-outline": {
      "@apply text-white bg-[#4f46e533]": {},
    },
    ".button-secondary-no-outline:hover": {
      "@apply bg-[#4338ca]": {},
    },
    ".button-secondary-no-outline:disabled": {
      "@apply bg-[rgba(79, 70, 229, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-secondary-glowing": {
      "@apply text-white bg-[#4f46e533] border border-[#4f46e5] shadow-[0_0_8px_#4f46e580,0_0_16px_#4f46e566,0_0_24px_#4f46e54d]":
        {},
    },
    ".button-secondary-glowing:hover": {
      "@apply bg-[#4338ca]": {},
    },
    ".button-secondary-glowing:disabled": {
      "@apply bg-[rgba(79, 70, 229, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-success-solid": {
      "@apply text-white bg-[#16a34a]": {},
    },
    ".button-success-solid:hover": {
      "@apply bg-[#15803d]": {},
    },
    ".button-success-solid:disabled": {
      "@apply bg-[rgba(22, 163, 74, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-success-outline": {
      "@apply text-white bg-[#16a34a33] border border-[#16a34a]": {},
    },
    ".button-success-outline:hover": {
      "@apply bg-[#15803d]": {},
    },
    ".button-success-outline:disabled": {
      "@apply bg-[rgba(22, 163, 74, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-success-outline-dashed": {
      "@apply text-white bg-[#16a34a33] border border-dashed border-[#16a34a]":
        {},
    },
    ".button-success-outline-dashed:hover": {
      "@apply bg-[#15803d]": {},
    },
    ".button-success-outline-dashed:disabled": {
      "@apply bg-[rgba(22, 163, 74, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-success-no-outline": {
      "@apply text-white bg-[#16a34a33]": {},
    },
    ".button-success-no-outline:hover": {
      "@apply bg-[#15803d]": {},
    },
    ".button-success-no-outline:disabled": {
      "@apply bg-[rgba(22, 163, 74, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-success-glowing": {
      "@apply text-white bg-[#16a34a33] border border-[#16a34a] shadow-[0_0_8px_#16a34a80,0_0_16px_#16a34a66,0_0_24px_#16a34a4d]":
        {},
    },
    ".button-success-glowing:hover": {
      "@apply bg-[#15803d]": {},
    },
    ".button-success-glowing:disabled": {
      "@apply bg-[rgba(22, 163, 74, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-warning-solid": {
      "@apply text-white bg-[#d97706]": {},
    },
    ".button-warning-solid:hover": {
      "@apply bg-[#b45309]": {},
    },
    ".button-warning-solid:disabled": {
      "@apply bg-[rgba(217, 119, 6, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-warning-outline": {
      "@apply text-white bg-[#d9770633] border border-[#d97706]": {},
    },
    ".button-warning-outline:hover": {
      "@apply bg-[#b45309]": {},
    },
    ".button-warning-outline:disabled": {
      "@apply bg-[rgba(217, 119, 6, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-warning-outline-dashed": {
      "@apply text-white bg-[#d9770633] border border-dashed border-[#d97706]":
        {},
    },
    ".button-warning-outline-dashed:hover": {
      "@apply bg-[#b45309]": {},
    },
    ".button-warning-outline-dashed:disabled": {
      "@apply bg-[rgba(217, 119, 6, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-warning-no-outline": {
      "@apply text-white bg-[#d9770633]": {},
    },
    ".button-warning-no-outline:hover": {
      "@apply bg-[#b45309]": {},
    },
    ".button-warning-no-outline:disabled": {
      "@apply bg-[rgba(217, 119, 6, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-warning-glowing": {
      "@apply text-white bg-[#d9770633] border border-[#d97706] shadow-[0_0_8px_#d9770680,0_0_16px_#d9770666,0_0_24px_#d977064d]":
        {},
    },
    ".button-warning-glowing:hover": {
      "@apply bg-[#b45309]": {},
    },
    ".button-warning-glowing:disabled": {
      "@apply bg-[rgba(217, 119, 6, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-error-solid": {
      "@apply text-white bg-[#dc2626]": {},
    },
    ".button-error-solid:hover": {
      "@apply bg-[#b91c1c]": {},
    },
    ".button-error-solid:disabled": {
      "@apply bg-[rgba(220, 38, 38, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-error-outline": {
      "@apply text-white bg-[#dc262633] border border-[#dc2626]": {},
    },
    ".button-error-outline:hover": {
      "@apply bg-[#b91c1c]": {},
    },
    ".button-error-outline:disabled": {
      "@apply bg-[rgba(220, 38, 38, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-error-outline-dashed": {
      "@apply text-white bg-[#dc262633] border border-dashed border-[#dc2626]":
        {},
    },
    ".button-error-outline-dashed:hover": {
      "@apply bg-[#b91c1c]": {},
    },
    ".button-error-outline-dashed:disabled": {
      "@apply bg-[rgba(220, 38, 38, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-error-no-outline": {
      "@apply text-white bg-[#dc262633]": {},
    },
    ".button-error-no-outline:hover": {
      "@apply bg-[#b91c1c]": {},
    },
    ".button-error-no-outline:disabled": {
      "@apply bg-[rgba(220, 38, 38, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
    ".button-error-glowing": {
      "@apply text-white bg-[#dc262633] border border-[#dc2626] shadow-[0_0_8px_#dc262680,0_0_16px_#dc262666,0_0_24px_#dc26264d]":
        {},
    },
    ".button-error-glowing:hover": {
      "@apply bg-[#b91c1c]": {},
    },
    ".button-error-glowing:disabled": {
      "@apply bg-[rgba(220, 38, 38, 0.5)] text-[rgba(255,255,255,0.5)]": {},
    },
  };

  addComponents({
    ...btnBase,
    ...sizeMap,
    ...radiusMap,
    ...variantsMap,
    ".btn-icon": {
      "@apply flex items-center justify-center": {},
    },
    ".btn-icon-right": {
      "@apply order-5": {},
    },
    ".btn-loading": {
      "@apply pointer-events-none opacity-80": {},
    },
  });
});
