export function anchor({ addComponents }) {
  const base = {
    ".anchor": {
      "@apply inline-flex items-center cursor-pointer font-medium text-sm leading-[1.4285714286] transition-all duration-200 ease-in-out px-4 py-2 relative overflow-hidden":
        {},
      "&:hover": {
        textDecoration: "underline",
      },
      "&:active": {
        transform: "scale(0.97)",
      },
    },
  };

  const variantsMap = {
    ".anchor-default-solid": {
      "@apply text-[#1f2937]": {},
    },
    ".anchor-default-solid:hover": {
      "@apply text-[#111827] underline": {},
    },
    ".anchor-default-solid:disabled": {
      "@apply text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-default-outline": {
      "@apply text-[#1f2937] border-b border-[#1f2937]": {},
    },
    ".anchor-default-outline:hover": {
      "@apply text-[#111827] border-b border-[#111827]": {},
    },
    ".anchor-default-outline:disabled": {
      "@apply text-[rgba(31,41,55,0.5)] opacity-50 border-b border-[rgba(31,41,55,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-default-outline-dashed": {
      "@apply text-[#1f2937] border-b border-dashed border-[#1f2937]": {},
    },
    ".anchor-default-outline-dashed:hover": {
      "@apply text-[#111827] border-b border-dashed border-[#111827]": {},
    },
    ".anchor-default-outline-dashed:disabled": {
      "@apply text-[rgba(31,41,55,0.5)] opacity-50 border-b border-dashed border-[rgba(31,41,55,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-default-no-outline": {
      "@apply text-[#1f2937]": {},
    },
    ".anchor-default-no-outline:hover": {
      "@apply text-[#111827] underline": {},
    },
    ".anchor-default-no-outline:disabled": {
      "@apply text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-default-glowing": {
      "@apply text-[#1f2937] shadow-[0_0_6px_#1f293780]": {},
    },
    ".anchor-default-glowing:hover": {
      "@apply text-[#111827] shadow-[0_0_8px_#11182780] underline": {},
    },
    ".anchor-default-glowing:disabled": {
      "@apply text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-primary-solid": {
      "@apply text-[#2563eb]": {},
    },
    ".anchor-primary-solid:hover": {
      "@apply text-[#1d4ed8] underline": {},
    },
    ".anchor-primary-solid:disabled": {
      "@apply text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-primary-outline": {
      "@apply text-[#2563eb] border-b border-[#2563eb]": {},
    },
    ".anchor-primary-outline:hover": {
      "@apply text-[#1d4ed8] border-b border-[#1d4ed8]": {},
    },
    ".anchor-primary-outline:disabled": {
      "@apply text-[rgba(37,99,235,0.5)] opacity-50 border-b border-[rgba(37,99,235,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-primary-outline-dashed": {
      "@apply text-[#2563eb] border-b border-dashed border-[#2563eb]": {},
    },
    ".anchor-primary-outline-dashed:hover": {
      "@apply text-[#1d4ed8] border-b border-dashed border-[#1d4ed8]": {},
    },
    ".anchor-primary-outline-dashed:disabled": {
      "@apply text-[rgba(37,99,235,0.5)] opacity-50 border-b border-dashed border-[rgba(37,99,235,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-primary-no-outline": {
      "@apply text-[#2563eb]": {},
    },
    ".anchor-primary-no-outline:hover": {
      "@apply text-[#1d4ed8] underline": {},
    },
    ".anchor-primary-no-outline:disabled": {
      "@apply text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-primary-glowing": {
      "@apply text-[#2563eb] shadow-[0_0_6px_#2563eb80]": {},
    },
    ".anchor-primary-glowing:hover": {
      "@apply text-[#1d4ed8] shadow-[0_0_8px_#1d4ed880] underline": {},
    },
    ".anchor-primary-glowing:disabled": {
      "@apply text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-secondary-solid": {
      "@apply text-[#4f46e5]": {},
    },
    ".anchor-secondary-solid:hover": {
      "@apply text-[#4338ca] underline": {},
    },
    ".anchor-secondary-solid:disabled": {
      "@apply text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-secondary-outline": {
      "@apply text-[#4f46e5] border-b border-[#4f46e5]": {},
    },
    ".anchor-secondary-outline:hover": {
      "@apply text-[#4338ca] border-b border-[#4338ca]": {},
    },
    ".anchor-secondary-outline:disabled": {
      "@apply text-[rgba(79,70,229,0.5)] opacity-50 border-b border-[rgba(79,70,229,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-secondary-outline-dashed": {
      "@apply text-[#4f46e5] border-b border-dashed border-[#4f46e5]": {},
    },
    ".anchor-secondary-outline-dashed:hover": {
      "@apply text-[#4338ca] border-b border-dashed border-[#4338ca]": {},
    },
    ".anchor-secondary-outline-dashed:disabled": {
      "@apply text-[rgba(79,70,229,0.5)] opacity-50 border-b border-dashed border-[rgba(79,70,229,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-secondary-no-outline": {
      "@apply text-[#4f46e5]": {},
    },
    ".anchor-secondary-no-outline:hover": {
      "@apply text-[#4338ca] underline": {},
    },
    ".anchor-secondary-no-outline:disabled": {
      "@apply text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-secondary-glowing": {
      "@apply text-[#4f46e5] shadow-[0_0_6px_#4f46e580]": {},
    },
    ".anchor-secondary-glowing:hover": {
      "@apply text-[#4338ca] shadow-[0_0_8px_#4338ca80] underline": {},
    },
    ".anchor-secondary-glowing:disabled": {
      "@apply text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-success-solid": {
      "@apply text-[#16a34a]": {},
    },
    ".anchor-success-solid:hover": {
      "@apply text-[#15803d] underline": {},
    },
    ".anchor-success-solid:disabled": {
      "@apply text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-success-outline": {
      "@apply text-[#16a34a] border-b border-[#16a34a]": {},
    },
    ".anchor-success-outline:hover": {
      "@apply text-[#15803d] border-b border-[#15803d]": {},
    },
    ".anchor-success-outline:disabled": {
      "@apply text-[rgba(22,163,74,0.5)] opacity-50 border-b border-[rgba(22,163,74,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-success-outline-dashed": {
      "@apply text-[#16a34a] border-b border-dashed border-[#16a34a]": {},
    },
    ".anchor-success-outline-dashed:hover": {
      "@apply text-[#15803d] border-b border-dashed border-[#15803d]": {},
    },
    ".anchor-success-outline-dashed:disabled": {
      "@apply text-[rgba(22,163,74,0.5)] opacity-50 border-b border-dashed border-[rgba(22,163,74,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-success-no-outline": {
      "@apply text-[#16a34a]": {},
    },
    ".anchor-success-no-outline:hover": {
      "@apply text-[#15803d] underline": {},
    },
    ".anchor-success-no-outline:disabled": {
      "@apply text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-success-glowing": {
      "@apply text-[#16a34a] shadow-[0_0_6px_#16a34a80]": {},
    },
    ".anchor-success-glowing:hover": {
      "@apply text-[#15803d] shadow-[0_0_8px_#15803d80] underline": {},
    },
    ".anchor-success-glowing:disabled": {
      "@apply text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-warning-solid": {
      "@apply text-[#d97706]": {},
    },
    ".anchor-warning-solid:hover": {
      "@apply text-[#b45309] underline": {},
    },
    ".anchor-warning-solid:disabled": {
      "@apply text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-warning-outline": {
      "@apply text-[#d97706] border-b border-[#d97706]": {},
    },
    ".anchor-warning-outline:hover": {
      "@apply text-[#b45309] border-b border-[#b45309]": {},
    },
    ".anchor-warning-outline:disabled": {
      "@apply text-[rgba(217,119,6,0.5)] opacity-50 border-b border-[rgba(217,119,6,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-warning-outline-dashed": {
      "@apply text-[#d97706] border-b border-dashed border-[#d97706]": {},
    },
    ".anchor-warning-outline-dashed:hover": {
      "@apply text-[#b45309] border-b border-dashed border-[#b45309]": {},
    },
    ".anchor-warning-outline-dashed:disabled": {
      "@apply text-[rgba(217,119,6,0.5)] opacity-50 border-b border-dashed border-[rgba(217,119,6,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-warning-no-outline": {
      "@apply text-[#d97706]": {},
    },
    ".anchor-warning-no-outline:hover": {
      "@apply text-[#b45309] underline": {},
    },
    ".anchor-warning-no-outline:disabled": {
      "@apply text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-warning-glowing": {
      "@apply text-[#d97706] shadow-[0_0_6px_#d9770680]": {},
    },
    ".anchor-warning-glowing:hover": {
      "@apply text-[#b45309] shadow-[0_0_8px_#b4530980] underline": {},
    },
    ".anchor-warning-glowing:disabled": {
      "@apply text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-error-solid": {
      "@apply text-[#dc2626]": {},
    },
    ".anchor-error-solid:hover": {
      "@apply text-[#b91c1c] underline": {},
    },
    ".anchor-error-solid:disabled": {
      "@apply text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-error-outline": {
      "@apply text-[#dc2626] border-b border-[#dc2626]": {},
    },
    ".anchor-error-outline:hover": {
      "@apply text-[#b91c1c] border-b border-[#b91c1c]": {},
    },
    ".anchor-error-outline:disabled": {
      "@apply text-[rgba(220,38,38,0.5)] opacity-50 border-b border-[rgba(220,38,38,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-error-outline-dashed": {
      "@apply text-[#dc2626] border-b border-dashed border-[#dc2626]": {},
    },
    ".anchor-error-outline-dashed:hover": {
      "@apply text-[#b91c1c] border-b border-dashed border-[#b91c1c]": {},
    },
    ".anchor-error-outline-dashed:disabled": {
      "@apply text-[rgba(220,38,38,0.5)] opacity-50 border-b border-dashed border-[rgba(220,38,38,0.5)] cursor-not-allowed":
        {},
    },
    ".anchor-error-no-outline": {
      "@apply text-[#dc2626]": {},
    },
    ".anchor-error-no-outline:hover": {
      "@apply text-[#b91c1c] underline": {},
    },
    ".anchor-error-no-outline:disabled": {
      "@apply text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".anchor-error-glowing": {
      "@apply text-[#dc2626] shadow-[0_0_6px_#dc262680]": {},
    },
    ".anchor-error-glowing:hover": {
      "@apply text-[#b91c1c] shadow-[0_0_8px_#b91c1c80] underline": {},
    },
    ".anchor-error-glowing:disabled": {
      "@apply text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
  };

  addComponents({
    ...base,
    ...variantsMap,
  });
}
