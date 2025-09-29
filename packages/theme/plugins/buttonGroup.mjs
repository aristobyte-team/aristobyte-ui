export function buttonGroup({ addComponents }) {
  const groupBase = {
    ".button-group": {
      "@apply flex items-center overflow-hidden max-w-max": {},
    },
    ".button-group-horizontal": {
      "@apply flex-row": {},
    },
    ".button-group-vertical": {
      "@apply flex-col": {},
    },
  };

  const radiusMap = {
    ".button-group-radius-none": { "@apply rounded-none": {} },
    ".button-group-radius-sm": { "@apply rounded-sm": {} },
    ".button-group-radius-md": { "@apply rounded-md": {} },
    ".button-group-radius-lg": { "@apply rounded-lg": {} },
    ".button-group-radius-full": { "@apply rounded-full": {} },
  };

  const variantsMap = {
    ".buttonGroup-default-solid": {
      "@apply bg-[#1f2937]": {},
    },
    ".buttonGroup-default-solid:hover": {
      "@apply bg-[#1f2937]": {},
    },
    ".buttonGroup-default-solid:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-default-outline": {
      "@apply bg-[#1f2937] border border-[#1f2937]": {},
    },
    ".buttonGroup-default-outline:hover": {
      "@apply bg-[#1f2937] border border-[#1f2937]": {},
    },
    ".buttonGroup-default-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-default-outline-dashed": {
      "@apply bg-[#1f2937] border border-dashed border-[#1f2937]": {},
    },
    ".buttonGroup-default-outline-dashed:hover": {
      "@apply bg-[#1f2937] border border-dashed border-[#1f2937]": {},
    },
    ".buttonGroup-default-outline-dashed:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-dashed border-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-default-no-outline": {
      "@apply bg-[#1f2937]": {},
    },
    ".buttonGroup-default-no-outline:hover": {
      "@apply bg-[#1f2937]": {},
    },
    ".buttonGroup-default-no-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-default-glowing": {
      "@apply bg-[#1f2937] shadow-[0_0_6px_#1f293780]": {},
    },
    ".buttonGroup-default-glowing:hover": {
      "@apply bg-[#111827] shadow-[0_0_8px_#11182780]": {},
    },
    ".buttonGroup-default-glowing:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-primary-solid": {
      "@apply bg-[#2563eb]": {},
    },
    ".buttonGroup-primary-solid:hover": {
      "@apply bg-[#2563eb]": {},
    },
    ".buttonGroup-primary-solid:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-primary-outline": {
      "@apply bg-[#2563eb] border border-[#2563eb]": {},
    },
    ".buttonGroup-primary-outline:hover": {
      "@apply bg-[#2563eb] border border-[#2563eb]": {},
    },
    ".buttonGroup-primary-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-primary-outline-dashed": {
      "@apply bg-[#2563eb] border border-dashed border-[#2563eb]": {},
    },
    ".buttonGroup-primary-outline-dashed:hover": {
      "@apply bg-[#2563eb] border border-dashed border-[#2563eb]": {},
    },
    ".buttonGroup-primary-outline-dashed:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-dashed border-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-primary-no-outline": {
      "@apply bg-[#2563eb]": {},
    },
    ".buttonGroup-primary-no-outline:hover": {
      "@apply bg-[#2563eb]": {},
    },
    ".buttonGroup-primary-no-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-primary-glowing": {
      "@apply bg-[#2563eb] shadow-[0_0_6px_#2563eb80]": {},
    },
    ".buttonGroup-primary-glowing:hover": {
      "@apply bg-[#1d4ed8] shadow-[0_0_8px_#1d4ed880]": {},
    },
    ".buttonGroup-primary-glowing:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-secondary-solid": {
      "@apply bg-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-solid:hover": {
      "@apply bg-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-solid:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-secondary-outline": {
      "@apply bg-[#4f46e5] border border-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-outline:hover": {
      "@apply bg-[#4f46e5] border border-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-secondary-outline-dashed": {
      "@apply bg-[#4f46e5] border border-dashed border-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-outline-dashed:hover": {
      "@apply bg-[#4f46e5] border border-dashed border-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-outline-dashed:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-dashed border-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-secondary-no-outline": {
      "@apply bg-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-no-outline:hover": {
      "@apply bg-[#4f46e5]": {},
    },
    ".buttonGroup-secondary-no-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-secondary-glowing": {
      "@apply bg-[#4f46e5] shadow-[0_0_6px_#4f46e580]": {},
    },
    ".buttonGroup-secondary-glowing:hover": {
      "@apply bg-[#4338ca] shadow-[0_0_8px_#4338ca80]": {},
    },
    ".buttonGroup-secondary-glowing:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-success-solid": {
      "@apply bg-[#16a34a]": {},
    },
    ".buttonGroup-success-solid:hover": {
      "@apply bg-[#16a34a]": {},
    },
    ".buttonGroup-success-solid:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-success-outline": {
      "@apply bg-[#16a34a] border border-[#16a34a]": {},
    },
    ".buttonGroup-success-outline:hover": {
      "@apply bg-[#16a34a] border border-[#16a34a]": {},
    },
    ".buttonGroup-success-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-success-outline-dashed": {
      "@apply bg-[#16a34a] border border-dashed border-[#16a34a]": {},
    },
    ".buttonGroup-success-outline-dashed:hover": {
      "@apply bg-[#16a34a] border border-dashed border-[#16a34a]": {},
    },
    ".buttonGroup-success-outline-dashed:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-dashed border-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-success-no-outline": {
      "@apply bg-[#16a34a]": {},
    },
    ".buttonGroup-success-no-outline:hover": {
      "@apply bg-[#16a34a]": {},
    },
    ".buttonGroup-success-no-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-success-glowing": {
      "@apply bg-[#16a34a] shadow-[0_0_6px_#16a34a80]": {},
    },
    ".buttonGroup-success-glowing:hover": {
      "@apply bg-[#15803d] shadow-[0_0_8px_#15803d80]": {},
    },
    ".buttonGroup-success-glowing:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-warning-solid": {
      "@apply bg-[#d97706]": {},
    },
    ".buttonGroup-warning-solid:hover": {
      "@apply bg-[#d97706]": {},
    },
    ".buttonGroup-warning-solid:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-warning-outline": {
      "@apply bg-[#d97706] border border-[#d97706]": {},
    },
    ".buttonGroup-warning-outline:hover": {
      "@apply bg-[#d97706] border border-[#d97706]": {},
    },
    ".buttonGroup-warning-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-warning-outline-dashed": {
      "@apply bg-[#d97706] border border-dashed border-[#d97706]": {},
    },
    ".buttonGroup-warning-outline-dashed:hover": {
      "@apply bg-[#d97706] border border-dashed border-[#d97706]": {},
    },
    ".buttonGroup-warning-outline-dashed:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-dashed border-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-warning-no-outline": {
      "@apply bg-[#d97706]": {},
    },
    ".buttonGroup-warning-no-outline:hover": {
      "@apply bg-[#d97706]": {},
    },
    ".buttonGroup-warning-no-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-warning-glowing": {
      "@apply bg-[#d97706] shadow-[0_0_6px_#d9770680]": {},
    },
    ".buttonGroup-warning-glowing:hover": {
      "@apply bg-[#b45309] shadow-[0_0_8px_#b4530980]": {},
    },
    ".buttonGroup-warning-glowing:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-error-solid": {
      "@apply bg-[#dc2626]": {},
    },
    ".buttonGroup-error-solid:hover": {
      "@apply bg-[#dc2626]": {},
    },
    ".buttonGroup-error-solid:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-error-outline": {
      "@apply bg-[#dc2626] border border-[#dc2626]": {},
    },
    ".buttonGroup-error-outline:hover": {
      "@apply bg-[#dc2626] border border-[#dc2626]": {},
    },
    ".buttonGroup-error-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-error-outline-dashed": {
      "@apply bg-[#dc2626] border border-dashed border-[#dc2626]": {},
    },
    ".buttonGroup-error-outline-dashed:hover": {
      "@apply bg-[#dc2626] border border-dashed border-[#dc2626]": {},
    },
    ".buttonGroup-error-outline-dashed:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-dashed border-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".buttonGroup-error-no-outline": {
      "@apply bg-[#dc2626]": {},
    },
    ".buttonGroup-error-no-outline:hover": {
      "@apply bg-[#dc2626]": {},
    },
    ".buttonGroup-error-no-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".buttonGroup-error-glowing": {
      "@apply bg-[#dc2626] shadow-[0_0_6px_#dc262680]": {},
    },
    ".buttonGroup-error-glowing:hover": {
      "@apply bg-[#b91c1c] shadow-[0_0_8px_#b91c1c80]": {},
    },
    ".buttonGroup-error-glowing:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
  };

  const childRules = {
    ".button-group .button": {
      "@apply rounded-none": {},
    },
    ".button-group-horizontal .button:first-child": {
      "@apply rounded-l-md": {},
    },
    ".button-group-horizontal .button:last-child": {
      "@apply rounded-r-md": {},
    },
    ".button-group-vertical .button:first-child": {
      "@apply rounded-t-md": {},
    },
    ".button-group-vertical .button:last-child": {
      "@apply rounded-b-md": {},
    },
  };

  addComponents({
    ...groupBase,
    ...radiusMap,
    ...variantsMap,
    ...childRules,
  });
}
