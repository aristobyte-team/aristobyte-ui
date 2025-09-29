export function radioGroup({ addComponents }) {
  const base = {
    ".radio-group": { "@apply flex flex-wrap gap-2": {} },
  };

  const variantsMap = {
    ".radioGroup-default-solid": {
      "@apply bg-[#1f2937]": {},
    },
    ".radioGroup-default-solid:hover": {
      "@apply bg-[#111827]": {},
    },
    ".radioGroup-default-solid:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".radioGroup-default-outline": {
      "@apply bg-[#1f293733] border border-[#1f2937]": {},
    },
    ".radioGroup-default-outline:hover": {
      "@apply bg-[#11182744] border border-[#111827]": {},
    },
    ".radioGroup-default-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-default-outline-dashed": {
      "@apply bg-[#1f293733] border-dashed border-[#1f2937]": {},
    },
    ".radioGroup-default-outline-dashed:hover": {
      "@apply bg-[#11182744] border-dashed border-[#111827]": {},
    },
    ".radioGroup-default-outline-dashed:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border-dashed border-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-default-no-outline": {
      "@apply bg-[#1f293733] border-transparent": {},
    },
    ".radioGroup-default-no-outline:hover": {
      "@apply bg-[#11182744] border-transparent": {},
    },
    ".radioGroup-default-no-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-default-glowing": {
      "@apply bg-[#1f293733] border border-[#1f2937] shadow-[0_0_8px_#1f293780]":
        {},
    },
    ".radioGroup-default-glowing:hover": {
      "@apply bg-[#11182744] border border-[#111827] shadow-[0_0_12px_#11182780]":
        {},
    },
    ".radioGroup-default-glowing:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] shadow-[0_0_8px_rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-primary-solid": {
      "@apply bg-[#2563eb]": {},
    },
    ".radioGroup-primary-solid:hover": {
      "@apply bg-[#1d4ed8]": {},
    },
    ".radioGroup-primary-solid:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".radioGroup-primary-outline": {
      "@apply bg-[#2563eb33] border border-[#2563eb]": {},
    },
    ".radioGroup-primary-outline:hover": {
      "@apply bg-[#1d4ed844] border border-[#1d4ed8]": {},
    },
    ".radioGroup-primary-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-primary-outline-dashed": {
      "@apply bg-[#2563eb33] border-dashed border-[#2563eb]": {},
    },
    ".radioGroup-primary-outline-dashed:hover": {
      "@apply bg-[#1d4ed844] border-dashed border-[#1d4ed8]": {},
    },
    ".radioGroup-primary-outline-dashed:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border-dashed border-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-primary-no-outline": {
      "@apply bg-[#2563eb33] border-transparent": {},
    },
    ".radioGroup-primary-no-outline:hover": {
      "@apply bg-[#1d4ed844] border-transparent": {},
    },
    ".radioGroup-primary-no-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-primary-glowing": {
      "@apply bg-[#2563eb33] border border-[#2563eb] shadow-[0_0_8px_#2563eb80]":
        {},
    },
    ".radioGroup-primary-glowing:hover": {
      "@apply bg-[#1d4ed844] border border-[#1d4ed8] shadow-[0_0_12px_#1d4ed880]":
        {},
    },
    ".radioGroup-primary-glowing:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] shadow-[0_0_8px_rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-secondary-solid": {
      "@apply bg-[#4f46e5]": {},
    },
    ".radioGroup-secondary-solid:hover": {
      "@apply bg-[#4338ca]": {},
    },
    ".radioGroup-secondary-solid:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".radioGroup-secondary-outline": {
      "@apply bg-[#4f46e533] border border-[#4f46e5]": {},
    },
    ".radioGroup-secondary-outline:hover": {
      "@apply bg-[#4338ca44] border border-[#4338ca]": {},
    },
    ".radioGroup-secondary-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-secondary-outline-dashed": {
      "@apply bg-[#4f46e533] border-dashed border-[#4f46e5]": {},
    },
    ".radioGroup-secondary-outline-dashed:hover": {
      "@apply bg-[#4338ca44] border-dashed border-[#4338ca]": {},
    },
    ".radioGroup-secondary-outline-dashed:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border-dashed border-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-secondary-no-outline": {
      "@apply bg-[#4f46e533] border-transparent": {},
    },
    ".radioGroup-secondary-no-outline:hover": {
      "@apply bg-[#4338ca44] border-transparent": {},
    },
    ".radioGroup-secondary-no-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-secondary-glowing": {
      "@apply bg-[#4f46e533] border border-[#4f46e5] shadow-[0_0_8px_#4f46e580]":
        {},
    },
    ".radioGroup-secondary-glowing:hover": {
      "@apply bg-[#4338ca44] border border-[#4338ca] shadow-[0_0_12px_#4338ca80]":
        {},
    },
    ".radioGroup-secondary-glowing:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] shadow-[0_0_8px_rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-success-solid": {
      "@apply bg-[#16a34a]": {},
    },
    ".radioGroup-success-solid:hover": {
      "@apply bg-[#15803d]": {},
    },
    ".radioGroup-success-solid:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".radioGroup-success-outline": {
      "@apply bg-[#16a34a33] border border-[#16a34a]": {},
    },
    ".radioGroup-success-outline:hover": {
      "@apply bg-[#15803d44] border border-[#15803d]": {},
    },
    ".radioGroup-success-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-success-outline-dashed": {
      "@apply bg-[#16a34a33] border-dashed border-[#16a34a]": {},
    },
    ".radioGroup-success-outline-dashed:hover": {
      "@apply bg-[#15803d44] border-dashed border-[#15803d]": {},
    },
    ".radioGroup-success-outline-dashed:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border-dashed border-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-success-no-outline": {
      "@apply bg-[#16a34a33] border-transparent": {},
    },
    ".radioGroup-success-no-outline:hover": {
      "@apply bg-[#15803d44] border-transparent": {},
    },
    ".radioGroup-success-no-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-success-glowing": {
      "@apply bg-[#16a34a33] border border-[#16a34a] shadow-[0_0_8px_#16a34a80]":
        {},
    },
    ".radioGroup-success-glowing:hover": {
      "@apply bg-[#15803d44] border border-[#15803d] shadow-[0_0_12px_#15803d80]":
        {},
    },
    ".radioGroup-success-glowing:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] shadow-[0_0_8px_rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-warning-solid": {
      "@apply bg-[#d97706]": {},
    },
    ".radioGroup-warning-solid:hover": {
      "@apply bg-[#b45309]": {},
    },
    ".radioGroup-warning-solid:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".radioGroup-warning-outline": {
      "@apply bg-[#d9770633] border border-[#d97706]": {},
    },
    ".radioGroup-warning-outline:hover": {
      "@apply bg-[#b4530944] border border-[#b45309]": {},
    },
    ".radioGroup-warning-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-warning-outline-dashed": {
      "@apply bg-[#d9770633] border-dashed border-[#d97706]": {},
    },
    ".radioGroup-warning-outline-dashed:hover": {
      "@apply bg-[#b4530944] border-dashed border-[#b45309]": {},
    },
    ".radioGroup-warning-outline-dashed:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border-dashed border-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-warning-no-outline": {
      "@apply bg-[#d9770633] border-transparent": {},
    },
    ".radioGroup-warning-no-outline:hover": {
      "@apply bg-[#b4530944] border-transparent": {},
    },
    ".radioGroup-warning-no-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-warning-glowing": {
      "@apply bg-[#d9770633] border border-[#d97706] shadow-[0_0_8px_#d9770680]":
        {},
    },
    ".radioGroup-warning-glowing:hover": {
      "@apply bg-[#b4530944] border border-[#b45309] shadow-[0_0_12px_#b4530980]":
        {},
    },
    ".radioGroup-warning-glowing:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] shadow-[0_0_8px_rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-error-solid": {
      "@apply bg-[#dc2626]": {},
    },
    ".radioGroup-error-solid:hover": {
      "@apply bg-[#b91c1c]": {},
    },
    ".radioGroup-error-solid:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".radioGroup-error-outline": {
      "@apply bg-[#dc262633] border border-[#dc2626]": {},
    },
    ".radioGroup-error-outline:hover": {
      "@apply bg-[#b91c1c44] border border-[#b91c1c]": {},
    },
    ".radioGroup-error-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-error-outline-dashed": {
      "@apply bg-[#dc262633] border-dashed border-[#dc2626]": {},
    },
    ".radioGroup-error-outline-dashed:hover": {
      "@apply bg-[#b91c1c44] border-dashed border-[#b91c1c]": {},
    },
    ".radioGroup-error-outline-dashed:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border-dashed border-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-error-no-outline": {
      "@apply bg-[#dc262633] border-transparent": {},
    },
    ".radioGroup-error-no-outline:hover": {
      "@apply bg-[#b91c1c44] border-transparent": {},
    },
    ".radioGroup-error-no-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".radioGroup-error-glowing": {
      "@apply bg-[#dc262633] border border-[#dc2626] shadow-[0_0_8px_#dc262680]":
        {},
    },
    ".radioGroup-error-glowing:hover": {
      "@apply bg-[#b91c1c44] border border-[#b91c1c] shadow-[0_0_12px_#b91c1c80]":
        {},
    },
    ".radioGroup-error-glowing:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] shadow-[0_0_8px_rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
  };

  const alignmentsMap = {
    ".radio-group--horizontal": { "@apply flex-row items-center": {} },
    ".radio-group--vertical": { "@apply flex-col items-center": {} },
  };

  // Sizes
  const sizesMap = {
    ".radio-group-size--xsm": { "@apply gap-1": {} },
    ".radio-group-size--sm": { "@apply gap-1.5": {} },
    ".radio-group-size--md": { "@apply gap-2": {} },
    ".radio-group-size--lg": { "@apply gap-3": {} },
    ".radio-group-size--xlg": { "@apply gap-4": {} },
  };

  addComponents({
    ...base,
    ...variantsMap,
    ...alignmentsMap,
    ...sizesMap,
  });
}
