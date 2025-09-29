export function label({ addComponents }: any) {
  // Base label styles
  const labelBase = {
    ".label": {
      "@apply inline-flex items-center font-medium select-none": {},
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "0.625rem", // 10px default
      padding: "0.25rem 0.6875rem", // 4px 11px
      fontSize: "0.875rem", // 14px
      lineHeight: "1rem",
    },
  };

  // Sizes
  const sizeMap = {
    ".label-xsm": { "@apply text-xs px-2 py-0.5": {} },
    ".label-sm": { "@apply text-sm px-2.5 py-1": {} },
    ".label-md": { "@apply text-base px-3 py-1.5": {} },
    ".label-lg": { "@apply text-lg px-4 py-2": {} },
    ".label-xlg": { "@apply text-xl px-5 py-2.5": {} },
  };

  // Radius
  const radiusMap = {
    ".label-radius-none": { "@apply rounded-none": {} },
    ".label-radius-sm": { "@apply rounded-sm": {} },
    ".label-radius-md": { "@apply rounded-md": {} },
    ".label-radius-lg": { "@apply rounded-lg": {} },
    ".label-radius-full": { "@apply rounded-full": {} },
  };

  const variantsMap = {
    ".label-default-solid": {
      "@apply bg-[#1f293733] border border-[#1f2937] text-[#1f2937]": {},
    },
    ".label-default-solid:hover": {
      "@apply bg-[#1f293744] border border-[#1f2937] text-[#1f2937]": {},
    },
    ".label-default-solid:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-default-outline": {
      "@apply bg-transparent border border-[#1f2937] text-[#1f2937]": {},
    },
    ".label-default-outline:hover": {
      "@apply bg-[#1f293711] border border-[#1f2937] text-[#1f2937]": {},
    },
    ".label-default-outline:disabled": {
      "@apply bg-transparent border border-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-default-outline-dashed": {
      "@apply bg-transparent border border-dashed border-[#1f2937] text-[#1f2937]":
        {},
    },
    ".label-default-outline-dashed:hover": {
      "@apply bg-[#1f293711] border border-dashed border-[#1f2937] text-[#1f2937]":
        {},
    },
    ".label-default-outline-dashed:disabled": {
      "@apply bg-transparent border border-dashed border-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-default-no-outline": {
      "@apply bg-[#1f293733] text-[#1f2937]": {},
    },
    ".label-default-no-outline:hover": {
      "@apply bg-[#1f293744] text-[#1f2937]": {},
    },
    ".label-default-no-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-default-glowing": {
      "@apply bg-[#1f293733] shadow-[0_0_6px_#1f293780] text-[#1f2937]": {},
    },
    ".label-default-glowing:hover": {
      "@apply bg-[#11182744] shadow-[0_0_8px_#11182780] text-[#111827]": {},
    },
    ".label-default-glowing:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] shadow-[0_0_6px_rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-primary-solid": {
      "@apply bg-[#2563eb33] border border-[#2563eb] text-[#2563eb]": {},
    },
    ".label-primary-solid:hover": {
      "@apply bg-[#2563eb44] border border-[#2563eb] text-[#2563eb]": {},
    },
    ".label-primary-solid:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-primary-outline": {
      "@apply bg-transparent border border-[#2563eb] text-[#2563eb]": {},
    },
    ".label-primary-outline:hover": {
      "@apply bg-[#2563eb11] border border-[#2563eb] text-[#2563eb]": {},
    },
    ".label-primary-outline:disabled": {
      "@apply bg-transparent border border-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-primary-outline-dashed": {
      "@apply bg-transparent border border-dashed border-[#2563eb] text-[#2563eb]":
        {},
    },
    ".label-primary-outline-dashed:hover": {
      "@apply bg-[#2563eb11] border border-dashed border-[#2563eb] text-[#2563eb]":
        {},
    },
    ".label-primary-outline-dashed:disabled": {
      "@apply bg-transparent border border-dashed border-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-primary-no-outline": {
      "@apply bg-[#2563eb33] text-[#2563eb]": {},
    },
    ".label-primary-no-outline:hover": {
      "@apply bg-[#2563eb44] text-[#2563eb]": {},
    },
    ".label-primary-no-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-primary-glowing": {
      "@apply bg-[#2563eb33] shadow-[0_0_6px_#2563eb80] text-[#2563eb]": {},
    },
    ".label-primary-glowing:hover": {
      "@apply bg-[#1d4ed844] shadow-[0_0_8px_#1d4ed880] text-[#1d4ed8]": {},
    },
    ".label-primary-glowing:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] shadow-[0_0_6px_rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-secondary-solid": {
      "@apply bg-[#4f46e533] border border-[#4f46e5] text-[#4f46e5]": {},
    },
    ".label-secondary-solid:hover": {
      "@apply bg-[#4f46e544] border border-[#4f46e5] text-[#4f46e5]": {},
    },
    ".label-secondary-solid:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-secondary-outline": {
      "@apply bg-transparent border border-[#4f46e5] text-[#4f46e5]": {},
    },
    ".label-secondary-outline:hover": {
      "@apply bg-[#4f46e511] border border-[#4f46e5] text-[#4f46e5]": {},
    },
    ".label-secondary-outline:disabled": {
      "@apply bg-transparent border border-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-secondary-outline-dashed": {
      "@apply bg-transparent border border-dashed border-[#4f46e5] text-[#4f46e5]":
        {},
    },
    ".label-secondary-outline-dashed:hover": {
      "@apply bg-[#4f46e511] border border-dashed border-[#4f46e5] text-[#4f46e5]":
        {},
    },
    ".label-secondary-outline-dashed:disabled": {
      "@apply bg-transparent border border-dashed border-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-secondary-no-outline": {
      "@apply bg-[#4f46e533] text-[#4f46e5]": {},
    },
    ".label-secondary-no-outline:hover": {
      "@apply bg-[#4f46e544] text-[#4f46e5]": {},
    },
    ".label-secondary-no-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-secondary-glowing": {
      "@apply bg-[#4f46e533] shadow-[0_0_6px_#4f46e580] text-[#4f46e5]": {},
    },
    ".label-secondary-glowing:hover": {
      "@apply bg-[#4338ca44] shadow-[0_0_8px_#4338ca80] text-[#4338ca]": {},
    },
    ".label-secondary-glowing:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] shadow-[0_0_6px_rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-success-solid": {
      "@apply bg-[#16a34a33] border border-[#16a34a] text-[#16a34a]": {},
    },
    ".label-success-solid:hover": {
      "@apply bg-[#16a34a44] border border-[#16a34a] text-[#16a34a]": {},
    },
    ".label-success-solid:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-success-outline": {
      "@apply bg-transparent border border-[#16a34a] text-[#16a34a]": {},
    },
    ".label-success-outline:hover": {
      "@apply bg-[#16a34a11] border border-[#16a34a] text-[#16a34a]": {},
    },
    ".label-success-outline:disabled": {
      "@apply bg-transparent border border-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-success-outline-dashed": {
      "@apply bg-transparent border border-dashed border-[#16a34a] text-[#16a34a]":
        {},
    },
    ".label-success-outline-dashed:hover": {
      "@apply bg-[#16a34a11] border border-dashed border-[#16a34a] text-[#16a34a]":
        {},
    },
    ".label-success-outline-dashed:disabled": {
      "@apply bg-transparent border border-dashed border-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-success-no-outline": {
      "@apply bg-[#16a34a33] text-[#16a34a]": {},
    },
    ".label-success-no-outline:hover": {
      "@apply bg-[#16a34a44] text-[#16a34a]": {},
    },
    ".label-success-no-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-success-glowing": {
      "@apply bg-[#16a34a33] shadow-[0_0_6px_#16a34a80] text-[#16a34a]": {},
    },
    ".label-success-glowing:hover": {
      "@apply bg-[#15803d44] shadow-[0_0_8px_#15803d80] text-[#15803d]": {},
    },
    ".label-success-glowing:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] shadow-[0_0_6px_rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-warning-solid": {
      "@apply bg-[#d9770633] border border-[#d97706] text-[#d97706]": {},
    },
    ".label-warning-solid:hover": {
      "@apply bg-[#d9770644] border border-[#d97706] text-[#d97706]": {},
    },
    ".label-warning-solid:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-warning-outline": {
      "@apply bg-transparent border border-[#d97706] text-[#d97706]": {},
    },
    ".label-warning-outline:hover": {
      "@apply bg-[#d9770611] border border-[#d97706] text-[#d97706]": {},
    },
    ".label-warning-outline:disabled": {
      "@apply bg-transparent border border-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-warning-outline-dashed": {
      "@apply bg-transparent border border-dashed border-[#d97706] text-[#d97706]":
        {},
    },
    ".label-warning-outline-dashed:hover": {
      "@apply bg-[#d9770611] border border-dashed border-[#d97706] text-[#d97706]":
        {},
    },
    ".label-warning-outline-dashed:disabled": {
      "@apply bg-transparent border border-dashed border-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-warning-no-outline": {
      "@apply bg-[#d9770633] text-[#d97706]": {},
    },
    ".label-warning-no-outline:hover": {
      "@apply bg-[#d9770644] text-[#d97706]": {},
    },
    ".label-warning-no-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-warning-glowing": {
      "@apply bg-[#d9770633] shadow-[0_0_6px_#d9770680] text-[#d97706]": {},
    },
    ".label-warning-glowing:hover": {
      "@apply bg-[#b4530944] shadow-[0_0_8px_#b4530980] text-[#b45309]": {},
    },
    ".label-warning-glowing:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] shadow-[0_0_6px_rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-error-solid": {
      "@apply bg-[#dc262633] border border-[#dc2626] text-[#dc2626]": {},
    },
    ".label-error-solid:hover": {
      "@apply bg-[#dc262644] border border-[#dc2626] text-[#dc2626]": {},
    },
    ".label-error-solid:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-error-outline": {
      "@apply bg-transparent border border-[#dc2626] text-[#dc2626]": {},
    },
    ".label-error-outline:hover": {
      "@apply bg-[#dc262611] border border-[#dc2626] text-[#dc2626]": {},
    },
    ".label-error-outline:disabled": {
      "@apply bg-transparent border border-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-error-outline-dashed": {
      "@apply bg-transparent border border-dashed border-[#dc2626] text-[#dc2626]":
        {},
    },
    ".label-error-outline-dashed:hover": {
      "@apply bg-[#dc262611] border border-dashed border-[#dc2626] text-[#dc2626]":
        {},
    },
    ".label-error-outline-dashed:disabled": {
      "@apply bg-transparent border border-dashed border-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-error-no-outline": {
      "@apply bg-[#dc262633] text-[#dc2626]": {},
    },
    ".label-error-no-outline:hover": {
      "@apply bg-[#dc262644] text-[#dc2626]": {},
    },
    ".label-error-no-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".label-error-glowing": {
      "@apply bg-[#dc262633] shadow-[0_0_6px_#dc262680] text-[#dc2626]": {},
    },
    ".label-error-glowing:hover": {
      "@apply bg-[#b91c1c44] shadow-[0_0_8px_#b91c1c80] text-[#b91c1c]": {},
    },
    ".label-error-glowing:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] shadow-[0_0_6px_rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
  };

  addComponents({
    ...labelBase,
    ...sizeMap,
    ...radiusMap,
    ...variantsMap,
  });
}
