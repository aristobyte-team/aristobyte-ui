export function radio({ addComponents }: any) {
  const base = {
    ".radio": {
      "@apply relative flex items-center cursor-pointer select-none": {},
    },
    ".radio--disabled": {
      "@apply cursor-not-allowed opacity-50 pointer-events-none": {},
    },
  };

  // Sizes
  const sizeMap = {
    ".radio-size--xsm": {
      gap: "3px",
      ".radio__control": {
        width: "12px",
        height: "12px",
        borderRadius: "999px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          display: "flex",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.2s ease",
        },
      },
      ".radio__label": {
        "@apply": "text-xs",
      },
    },
    ".radio-size--sm": {
      gap: "4px",
      ".radio__control": {
        width: "16px",
        height: "16px",
        borderRadius: "999px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          display: "flex",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.2s ease",
        },
      },
      ".radio__label": {
        "@apply": "text-sm",
      },
    },
    ".radio-size--md": {
      gap: "5px",
      ".radio__control": {
        width: "20px",
        height: "20px",
        borderRadius: "999px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          display: "flex",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.2s ease",
        },
      },
      ".radio__label": {
        "@apply": "text-base",
      },
    },
    ".radio-size--lg": {
      gap: "6px",
      ".radio__control": {
        width: "24px",
        height: "24px",
        borderRadius: "999px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          display: "flex",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.2s ease",
        },
      },
      ".radio__label": {
        "@apply": "text-lg",
      },
    },
    ".radio-size--xlg": {
      gap: "8px",
      ".radio__control": {
        width: "28px",
        height: "28px",
        borderRadius: "999px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          display: "flex",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.2s ease",
        },
      },
      ".radio__label": {
        "@apply": "text-xl",
      },
    },
  };

  const variantsMap = {
    ".radio-default-solid": {
      "@apply border-2 border-[#1f2937] bg-[#1f2937]": {},
    },
    ".radio-default-solid:hover": {
      "@apply border-2 border-[#111827] bg-[#111827]": {},
    },
    ".radio-default-solid:disabled": {
      "@apply border-2 border-[rgba(31,41,55,0.5)] bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-default-outline": {
      "@apply border-2 border-[#1f2937] bg-[#1f293733]": {},
    },
    ".radio-default-outline:hover": {
      "@apply border-2 border-[#111827] bg-[#11182744]": {},
    },
    ".radio-default-outline:disabled": {
      "@apply border-2 border-[rgba(31,41,55,0.5)] bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-default-outline-dashed": {
      "@apply border-2 border-dashed border-[#1f2937] bg-[#1f293733]": {},
    },
    ".radio-default-outline-dashed:hover": {
      "@apply border-2 border-dashed border-[#111827] bg-[#11182744]": {},
    },
    ".radio-default-outline-dashed:disabled": {
      "@apply border-2 border-dashed border-[rgba(31,41,55,0.5)] bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-default-no-outline": {
      "@apply border-2 border-transparent bg-[#1f293733]": {},
    },
    ".radio-default-no-outline:hover": {
      "@apply border-2 border-transparent bg-[#11182744]": {},
    },
    ".radio-default-no-outline:disabled": {
      "@apply border-2 border-transparent bg-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-default-glowing": {
      "@apply border-2 border-[#1f2937] bg-[#1f293733] shadow-[0_0_8px_#1f293780]":
        {},
    },
    ".radio-default-glowing:hover": {
      "@apply border-2 border-[#111827] bg-[#11182744] shadow-[0_0_12px_#11182780]":
        {},
    },
    ".radio-default-glowing:disabled": {
      "@apply border-2 border-[rgba(31,41,55,0.5)] bg-[rgba(31,41,55,0.5)] shadow-[0_0_8px_rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-primary-solid": {
      "@apply border-2 border-[#2563eb] bg-[#2563eb]": {},
    },
    ".radio-primary-solid:hover": {
      "@apply border-2 border-[#1d4ed8] bg-[#1d4ed8]": {},
    },
    ".radio-primary-solid:disabled": {
      "@apply border-2 border-[rgba(37,99,235,0.5)] bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-primary-outline": {
      "@apply border-2 border-[#2563eb] bg-[#2563eb33]": {},
    },
    ".radio-primary-outline:hover": {
      "@apply border-2 border-[#1d4ed8] bg-[#1d4ed844]": {},
    },
    ".radio-primary-outline:disabled": {
      "@apply border-2 border-[rgba(37,99,235,0.5)] bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-primary-outline-dashed": {
      "@apply border-2 border-dashed border-[#2563eb] bg-[#2563eb33]": {},
    },
    ".radio-primary-outline-dashed:hover": {
      "@apply border-2 border-dashed border-[#1d4ed8] bg-[#1d4ed844]": {},
    },
    ".radio-primary-outline-dashed:disabled": {
      "@apply border-2 border-dashed border-[rgba(37,99,235,0.5)] bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-primary-no-outline": {
      "@apply border-2 border-transparent bg-[#2563eb33]": {},
    },
    ".radio-primary-no-outline:hover": {
      "@apply border-2 border-transparent bg-[#1d4ed844]": {},
    },
    ".radio-primary-no-outline:disabled": {
      "@apply border-2 border-transparent bg-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-primary-glowing": {
      "@apply border-2 border-[#2563eb] bg-[#2563eb33] shadow-[0_0_8px_#2563eb80]":
        {},
    },
    ".radio-primary-glowing:hover": {
      "@apply border-2 border-[#1d4ed8] bg-[#1d4ed844] shadow-[0_0_12px_#1d4ed880]":
        {},
    },
    ".radio-primary-glowing:disabled": {
      "@apply border-2 border-[rgba(37,99,235,0.5)] bg-[rgba(37,99,235,0.5)] shadow-[0_0_8px_rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-secondary-solid": {
      "@apply border-2 border-[#4f46e5] bg-[#4f46e5]": {},
    },
    ".radio-secondary-solid:hover": {
      "@apply border-2 border-[#4338ca] bg-[#4338ca]": {},
    },
    ".radio-secondary-solid:disabled": {
      "@apply border-2 border-[rgba(79,70,229,0.5)] bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-secondary-outline": {
      "@apply border-2 border-[#4f46e5] bg-[#4f46e533]": {},
    },
    ".radio-secondary-outline:hover": {
      "@apply border-2 border-[#4338ca] bg-[#4338ca44]": {},
    },
    ".radio-secondary-outline:disabled": {
      "@apply border-2 border-[rgba(79,70,229,0.5)] bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-secondary-outline-dashed": {
      "@apply border-2 border-dashed border-[#4f46e5] bg-[#4f46e533]": {},
    },
    ".radio-secondary-outline-dashed:hover": {
      "@apply border-2 border-dashed border-[#4338ca] bg-[#4338ca44]": {},
    },
    ".radio-secondary-outline-dashed:disabled": {
      "@apply border-2 border-dashed border-[rgba(79,70,229,0.5)] bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-secondary-no-outline": {
      "@apply border-2 border-transparent bg-[#4f46e533]": {},
    },
    ".radio-secondary-no-outline:hover": {
      "@apply border-2 border-transparent bg-[#4338ca44]": {},
    },
    ".radio-secondary-no-outline:disabled": {
      "@apply border-2 border-transparent bg-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-secondary-glowing": {
      "@apply border-2 border-[#4f46e5] bg-[#4f46e533] shadow-[0_0_8px_#4f46e580]":
        {},
    },
    ".radio-secondary-glowing:hover": {
      "@apply border-2 border-[#4338ca] bg-[#4338ca44] shadow-[0_0_12px_#4338ca80]":
        {},
    },
    ".radio-secondary-glowing:disabled": {
      "@apply border-2 border-[rgba(79,70,229,0.5)] bg-[rgba(79,70,229,0.5)] shadow-[0_0_8px_rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-success-solid": {
      "@apply border-2 border-[#16a34a] bg-[#16a34a]": {},
    },
    ".radio-success-solid:hover": {
      "@apply border-2 border-[#15803d] bg-[#15803d]": {},
    },
    ".radio-success-solid:disabled": {
      "@apply border-2 border-[rgba(22,163,74,0.5)] bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-success-outline": {
      "@apply border-2 border-[#16a34a] bg-[#16a34a33]": {},
    },
    ".radio-success-outline:hover": {
      "@apply border-2 border-[#15803d] bg-[#15803d44]": {},
    },
    ".radio-success-outline:disabled": {
      "@apply border-2 border-[rgba(22,163,74,0.5)] bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-success-outline-dashed": {
      "@apply border-2 border-dashed border-[#16a34a] bg-[#16a34a33]": {},
    },
    ".radio-success-outline-dashed:hover": {
      "@apply border-2 border-dashed border-[#15803d] bg-[#15803d44]": {},
    },
    ".radio-success-outline-dashed:disabled": {
      "@apply border-2 border-dashed border-[rgba(22,163,74,0.5)] bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-success-no-outline": {
      "@apply border-2 border-transparent bg-[#16a34a33]": {},
    },
    ".radio-success-no-outline:hover": {
      "@apply border-2 border-transparent bg-[#15803d44]": {},
    },
    ".radio-success-no-outline:disabled": {
      "@apply border-2 border-transparent bg-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-success-glowing": {
      "@apply border-2 border-[#16a34a] bg-[#16a34a33] shadow-[0_0_8px_#16a34a80]":
        {},
    },
    ".radio-success-glowing:hover": {
      "@apply border-2 border-[#15803d] bg-[#15803d44] shadow-[0_0_12px_#15803d80]":
        {},
    },
    ".radio-success-glowing:disabled": {
      "@apply border-2 border-[rgba(22,163,74,0.5)] bg-[rgba(22,163,74,0.5)] shadow-[0_0_8px_rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-warning-solid": {
      "@apply border-2 border-[#d97706] bg-[#d97706]": {},
    },
    ".radio-warning-solid:hover": {
      "@apply border-2 border-[#b45309] bg-[#b45309]": {},
    },
    ".radio-warning-solid:disabled": {
      "@apply border-2 border-[rgba(217,119,6,0.5)] bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-warning-outline": {
      "@apply border-2 border-[#d97706] bg-[#d9770633]": {},
    },
    ".radio-warning-outline:hover": {
      "@apply border-2 border-[#b45309] bg-[#b4530944]": {},
    },
    ".radio-warning-outline:disabled": {
      "@apply border-2 border-[rgba(217,119,6,0.5)] bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-warning-outline-dashed": {
      "@apply border-2 border-dashed border-[#d97706] bg-[#d9770633]": {},
    },
    ".radio-warning-outline-dashed:hover": {
      "@apply border-2 border-dashed border-[#b45309] bg-[#b4530944]": {},
    },
    ".radio-warning-outline-dashed:disabled": {
      "@apply border-2 border-dashed border-[rgba(217,119,6,0.5)] bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-warning-no-outline": {
      "@apply border-2 border-transparent bg-[#d9770633]": {},
    },
    ".radio-warning-no-outline:hover": {
      "@apply border-2 border-transparent bg-[#b4530944]": {},
    },
    ".radio-warning-no-outline:disabled": {
      "@apply border-2 border-transparent bg-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-warning-glowing": {
      "@apply border-2 border-[#d97706] bg-[#d9770633] shadow-[0_0_8px_#d9770680]":
        {},
    },
    ".radio-warning-glowing:hover": {
      "@apply border-2 border-[#b45309] bg-[#b4530944] shadow-[0_0_12px_#b4530980]":
        {},
    },
    ".radio-warning-glowing:disabled": {
      "@apply border-2 border-[rgba(217,119,6,0.5)] bg-[rgba(217,119,6,0.5)] shadow-[0_0_8px_rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-error-solid": {
      "@apply border-2 border-[#dc2626] bg-[#dc2626]": {},
    },
    ".radio-error-solid:hover": {
      "@apply border-2 border-[#b91c1c] bg-[#b91c1c]": {},
    },
    ".radio-error-solid:disabled": {
      "@apply border-2 border-[rgba(220,38,38,0.5)] bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-error-outline": {
      "@apply border-2 border-[#dc2626] bg-[#dc262633]": {},
    },
    ".radio-error-outline:hover": {
      "@apply border-2 border-[#b91c1c] bg-[#b91c1c44]": {},
    },
    ".radio-error-outline:disabled": {
      "@apply border-2 border-[rgba(220,38,38,0.5)] bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-error-outline-dashed": {
      "@apply border-2 border-dashed border-[#dc2626] bg-[#dc262633]": {},
    },
    ".radio-error-outline-dashed:hover": {
      "@apply border-2 border-dashed border-[#b91c1c] bg-[#b91c1c44]": {},
    },
    ".radio-error-outline-dashed:disabled": {
      "@apply border-2 border-dashed border-[rgba(220,38,38,0.5)] bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-error-no-outline": {
      "@apply border-2 border-transparent bg-[#dc262633]": {},
    },
    ".radio-error-no-outline:hover": {
      "@apply border-2 border-transparent bg-[#b91c1c44]": {},
    },
    ".radio-error-no-outline:disabled": {
      "@apply border-2 border-transparent bg-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".radio-error-glowing": {
      "@apply border-2 border-[#dc2626] bg-[#dc262633] shadow-[0_0_8px_#dc262680]":
        {},
    },
    ".radio-error-glowing:hover": {
      "@apply border-2 border-[#b91c1c] bg-[#b91c1c44] shadow-[0_0_12px_#b91c1c80]":
        {},
    },
    ".radio-error-glowing:disabled": {
      "@apply border-2 border-[rgba(220,38,38,0.5)] bg-[rgba(220,38,38,0.5)] shadow-[0_0_8px_rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
  };

  addComponents({
    ...base,
    ...sizeMap,
    ...variantsMap,
  });
}
