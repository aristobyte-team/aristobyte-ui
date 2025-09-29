export function switchPlugin({ addComponents }) {
  const baseSwitch = {
    ".switch": {
      "@apply relative inline-flex items-center cursor-pointer select-none": {},
      "& input": {
        "@apply hidden": {},
      },
    },
    ".switch--disabled": { "@apply opacity-50 cursor-not-allowed": {} },
    ".switch__track": {
      "@apply relative rounded-full overflow-hidden transition-colors duration-300 ease-in-out":
        {},
    },
    ".switch__thumb": {
      "@apply absolute top-1/2 left-0 bg-white rounded-full transform -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center z-10":
        {},
    },
    ".switch__label": { "@apply ml-2": {} },
    ".switch__track-icon": {
      "@apply absolute top-1/2 flex items-center justify-center transition-all duration-200 ease-out z-0":
        {},
    },
  };

  const sizesMap = {
    ".switch-size-xsm": { [`@apply flex flex-row`]: {} },
    ".switch-size-xsm .switch__track": { [`@apply w-[1.8rem] h-[1rem]`]: {} },
    ".switch-size-xsm .switch__thumb": {
      [`@apply w-[0.8rem] h-[0.8rem] left-[0.16rem]`]: {},
    },
    ".switch-size-xsm .switch__label": { [`@apply text-xs`]: {} },
    ".switch-size-sm": { [`@apply flex flex-row`]: {} },
    ".switch-size-sm .switch__track": { [`@apply w-[2.6rem] h-[1.4rem]`]: {} },
    ".switch-size-sm .switch__thumb": {
      [`@apply w-[1rem] h-[1rem] left-[0.2rem]`]: {},
    },
    ".switch-size-sm .switch__label": { [`@apply text-sm`]: {} },
    ".switch-size-md": { [`@apply flex flex-row`]: {} },
    ".switch-size-md .switch__track": { [`@apply w-[3rem] h-[1.6rem]`]: {} },
    ".switch-size-md .switch__thumb": {
      [`@apply w-[1.2rem] h-[1.2rem] left-[0.2rem]`]: {},
    },
    ".switch-size-md .switch__label": { [`@apply text-base`]: {} },
    ".switch-size-lg": { [`@apply flex flex-row`]: {} },
    ".switch-size-lg .switch__track": { [`@apply w-[3.4rem] h-[1.8rem]`]: {} },
    ".switch-size-lg .switch__thumb": {
      [`@apply w-[1.4rem] h-[1.4rem] left-[0.3rem]`]: {},
    },
    ".switch-size-lg .switch__label": { [`@apply text-lg`]: {} },
    ".switch-size-xlg": { [`@apply flex flex-row`]: {} },
    ".switch-size-xlg .switch__track": { [`@apply w-[3.8rem] h-[2rem]`]: {} },
    ".switch-size-xlg .switch__thumb": {
      [`@apply w-[1.6rem] h-[1.6rem] left-[0.2rem]`]: {},
    },
    ".switch-size-xlg .switch__label": { [`@apply text-xl`]: {} },
  };

  const variantsMap = {
    ".switch-default-solid": {
      "@apply bg-[#1f2937]": {},
    },
    ".switch-default-solid:hover": {
      "@apply bg-[#111827]": {},
    },
    ".switch-default-solid:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".switch-default-outline": {
      "@apply bg-[#1f293733] border border-[#1f2937]": {},
    },
    ".switch-default-outline:hover": {
      "@apply bg-[#11182733] border border-[#111827]": {},
    },
    ".switch-default-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-default-outline-dashed": {
      "@apply bg-[#1f293733] border border-dashed border-[#1f2937]": {},
    },
    ".switch-default-outline-dashed:hover": {
      "@apply bg-[#11182733] border border-dashed border-[#111827]": {},
    },
    ".switch-default-outline-dashed:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-dashed border-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-default-no-outline": {
      "@apply bg-[#1f293733] border border-transparent": {},
    },
    ".switch-default-no-outline:hover": {
      "@apply bg-[#11182733] border border-transparent": {},
    },
    ".switch-default-no-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-default-glowing": {
      "@apply bg-[#1f293733] border border-[#1f2937] shadow-[0_0_8px_#1f293780,0_0_16px_#1f293766,0_0_24px_#1f29374d]":
        {},
    },
    ".switch-default-glowing:hover": {
      "@apply bg-[#11182733] border border-[#111827] shadow-[0_0_8px_#11182780,0_0_16px_#11182766,0_0_24px_#1118274d]":
        {},
    },
    ".switch-default-glowing:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] shadow-[0_0_8px_#1f293780,0_0_16px_#1f293766,0_0_24px_#1f29374d] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-primary-solid": {
      "@apply bg-[#2563eb]": {},
    },
    ".switch-primary-solid:hover": {
      "@apply bg-[#1d4ed8]": {},
    },
    ".switch-primary-solid:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".switch-primary-outline": {
      "@apply bg-[#2563eb33] border border-[#2563eb]": {},
    },
    ".switch-primary-outline:hover": {
      "@apply bg-[#1d4ed833] border border-[#1d4ed8]": {},
    },
    ".switch-primary-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-primary-outline-dashed": {
      "@apply bg-[#2563eb33] border border-dashed border-[#2563eb]": {},
    },
    ".switch-primary-outline-dashed:hover": {
      "@apply bg-[#1d4ed833] border border-dashed border-[#1d4ed8]": {},
    },
    ".switch-primary-outline-dashed:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-dashed border-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-primary-no-outline": {
      "@apply bg-[#2563eb33] border border-transparent": {},
    },
    ".switch-primary-no-outline:hover": {
      "@apply bg-[#1d4ed833] border border-transparent": {},
    },
    ".switch-primary-no-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-primary-glowing": {
      "@apply bg-[#2563eb33] border border-[#2563eb] shadow-[0_0_8px_#2563eb80,0_0_16px_#2563eb66,0_0_24px_#2563eb4d]":
        {},
    },
    ".switch-primary-glowing:hover": {
      "@apply bg-[#1d4ed833] border border-[#1d4ed8] shadow-[0_0_8px_#1d4ed880,0_0_16px_#1d4ed866,0_0_24px_#1d4ed84d]":
        {},
    },
    ".switch-primary-glowing:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] shadow-[0_0_8px_#2563eb80,0_0_16px_#2563eb66,0_0_24px_#2563eb4d] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-secondary-solid": {
      "@apply bg-[#4f46e5]": {},
    },
    ".switch-secondary-solid:hover": {
      "@apply bg-[#4338ca]": {},
    },
    ".switch-secondary-solid:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".switch-secondary-outline": {
      "@apply bg-[#4f46e533] border border-[#4f46e5]": {},
    },
    ".switch-secondary-outline:hover": {
      "@apply bg-[#4338ca33] border border-[#4338ca]": {},
    },
    ".switch-secondary-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-secondary-outline-dashed": {
      "@apply bg-[#4f46e533] border border-dashed border-[#4f46e5]": {},
    },
    ".switch-secondary-outline-dashed:hover": {
      "@apply bg-[#4338ca33] border border-dashed border-[#4338ca]": {},
    },
    ".switch-secondary-outline-dashed:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-dashed border-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-secondary-no-outline": {
      "@apply bg-[#4f46e533] border border-transparent": {},
    },
    ".switch-secondary-no-outline:hover": {
      "@apply bg-[#4338ca33] border border-transparent": {},
    },
    ".switch-secondary-no-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-secondary-glowing": {
      "@apply bg-[#4f46e533] border border-[#4f46e5] shadow-[0_0_8px_#4f46e580,0_0_16px_#4f46e566,0_0_24px_#4f46e54d]":
        {},
    },
    ".switch-secondary-glowing:hover": {
      "@apply bg-[#4338ca33] border border-[#4338ca] shadow-[0_0_8px_#4338ca80,0_0_16px_#4338ca66,0_0_24px_#4338ca4d]":
        {},
    },
    ".switch-secondary-glowing:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] shadow-[0_0_8px_#4f46e580,0_0_16px_#4f46e566,0_0_24px_#4f46e54d] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-success-solid": {
      "@apply bg-[#16a34a]": {},
    },
    ".switch-success-solid:hover": {
      "@apply bg-[#15803d]": {},
    },
    ".switch-success-solid:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".switch-success-outline": {
      "@apply bg-[#16a34a33] border border-[#16a34a]": {},
    },
    ".switch-success-outline:hover": {
      "@apply bg-[#15803d33] border border-[#15803d]": {},
    },
    ".switch-success-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-success-outline-dashed": {
      "@apply bg-[#16a34a33] border border-dashed border-[#16a34a]": {},
    },
    ".switch-success-outline-dashed:hover": {
      "@apply bg-[#15803d33] border border-dashed border-[#15803d]": {},
    },
    ".switch-success-outline-dashed:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-dashed border-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-success-no-outline": {
      "@apply bg-[#16a34a33] border border-transparent": {},
    },
    ".switch-success-no-outline:hover": {
      "@apply bg-[#15803d33] border border-transparent": {},
    },
    ".switch-success-no-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-success-glowing": {
      "@apply bg-[#16a34a33] border border-[#16a34a] shadow-[0_0_8px_#16a34a80,0_0_16px_#16a34a66,0_0_24px_#16a34a4d]":
        {},
    },
    ".switch-success-glowing:hover": {
      "@apply bg-[#15803d33] border border-[#15803d] shadow-[0_0_8px_#15803d80,0_0_16px_#15803d66,0_0_24px_#15803d4d]":
        {},
    },
    ".switch-success-glowing:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] shadow-[0_0_8px_#16a34a80,0_0_16px_#16a34a66,0_0_24px_#16a34a4d] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-warning-solid": {
      "@apply bg-[#d97706]": {},
    },
    ".switch-warning-solid:hover": {
      "@apply bg-[#b45309]": {},
    },
    ".switch-warning-solid:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".switch-warning-outline": {
      "@apply bg-[#d9770633] border border-[#d97706]": {},
    },
    ".switch-warning-outline:hover": {
      "@apply bg-[#b4530933] border border-[#b45309]": {},
    },
    ".switch-warning-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-warning-outline-dashed": {
      "@apply bg-[#d9770633] border border-dashed border-[#d97706]": {},
    },
    ".switch-warning-outline-dashed:hover": {
      "@apply bg-[#b4530933] border border-dashed border-[#b45309]": {},
    },
    ".switch-warning-outline-dashed:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-dashed border-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-warning-no-outline": {
      "@apply bg-[#d9770633] border border-transparent": {},
    },
    ".switch-warning-no-outline:hover": {
      "@apply bg-[#b4530933] border border-transparent": {},
    },
    ".switch-warning-no-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-warning-glowing": {
      "@apply bg-[#d9770633] border border-[#d97706] shadow-[0_0_8px_#d9770680,0_0_16px_#d9770666,0_0_24px_#d977064d]":
        {},
    },
    ".switch-warning-glowing:hover": {
      "@apply bg-[#b4530933] border border-[#b45309] shadow-[0_0_8px_#b4530980,0_0_16px_#b4530966,0_0_24px_#b453094d]":
        {},
    },
    ".switch-warning-glowing:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] shadow-[0_0_8px_#d9770680,0_0_16px_#d9770666,0_0_24px_#d977064d] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-error-solid": {
      "@apply bg-[#dc2626]": {},
    },
    ".switch-error-solid:hover": {
      "@apply bg-[#b91c1c]": {},
    },
    ".switch-error-solid:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed": {},
    },
    ".switch-error-outline": {
      "@apply bg-[#dc262633] border border-[#dc2626]": {},
    },
    ".switch-error-outline:hover": {
      "@apply bg-[#b91c1c33] border border-[#b91c1c]": {},
    },
    ".switch-error-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-error-outline-dashed": {
      "@apply bg-[#dc262633] border border-dashed border-[#dc2626]": {},
    },
    ".switch-error-outline-dashed:hover": {
      "@apply bg-[#b91c1c33] border border-dashed border-[#b91c1c]": {},
    },
    ".switch-error-outline-dashed:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-dashed border-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-error-no-outline": {
      "@apply bg-[#dc262633] border border-transparent": {},
    },
    ".switch-error-no-outline:hover": {
      "@apply bg-[#b91c1c33] border border-transparent": {},
    },
    ".switch-error-no-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-transparent opacity-50 cursor-not-allowed":
        {},
    },
    ".switch-error-glowing": {
      "@apply bg-[#dc262633] border border-[#dc2626] shadow-[0_0_8px_#dc262680,0_0_16px_#dc262666,0_0_24px_#dc26264d]":
        {},
    },
    ".switch-error-glowing:hover": {
      "@apply bg-[#b91c1c33] border border-[#b91c1c] shadow-[0_0_8px_#b91c1c80,0_0_16px_#b91c1c66,0_0_24px_#b91c1c4d]":
        {},
    },
    ".switch-error-glowing:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] shadow-[0_0_8px_#dc262680,0_0_16px_#dc262666,0_0_24px_#dc26264d] opacity-50 cursor-not-allowed":
        {},
    },
  };

  const alignmentsMap = {
    ".switch-align-label-horizontal": { "@apply flex flex-row": {} },
    ".switch-align-label-vertical": { "@apply flex flex-col": {} },
  };

  addComponents({
    ...baseSwitch,
    ...sizesMap,
    ...variantsMap,
    ...alignmentsMap,
  });
}
