import {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "../extend/index.mjs";

export function messageBox({ addComponents }) {
  const radiusMap = {
    ".message-box-radius-none": { borderRadius: "0px" },
    ".message-box-radius-sm": { borderRadius: "4px" },
    ".message-box-radius-md": { borderRadius: "8px" },
    ".message-box-radius-lg": { borderRadius: "10px" },
    ".message-box-radius-full": { borderRadius: "24px" },
  };

  const baseMessageBox = {
    ".message-box": {
      display: "flex",
      alignItems: "flex-start",
      padding: "1rem",
      fontFamily: fontFamily.sans.join(", "),
      fontSize: fontSize["body-sm"],
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.normal,
      color: colors.white,
    },
    ".message-box__content": {
      color: colors.white,
      flex: "1",
    },
    ".message-box__icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0.625rem",
      minWidth: "16px",
      minHeight: "16px",
      maxWidth: "16px",
      maxHeight: "16px",
      svg: { width: "100%" },
    },
  };

  const variantsMap = {
    ".message-box-default-solid": {
      "@apply bg-[#1f2937] text-white": {},
    },
    ".message-box-default-solid:hover": {
      "@apply bg-[#111827] text-white": {},
    },
    ".message-box-default-solid:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-default-outline": {
      "@apply bg-[#1f293733] border border-[#1f2937] text-[#1f2937]": {},
    },
    ".message-box-default-outline:hover": {
      "@apply bg-[#11182744] border border-[#111827] text-[#111827]": {},
    },
    ".message-box-default-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-default-outline-dashed": {
      "@apply bg-[#1f293733] border border-dashed border-[#1f2937] text-[#1f2937]":
        {},
    },
    ".message-box-default-outline-dashed:hover": {
      "@apply bg-[#11182744] border border-dashed border-[#111827] text-[#111827]":
        {},
    },
    ".message-box-default-outline-dashed:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-dashed border-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-default-no-outline": {
      "@apply bg-[#1f293733] text-[#1f2937]": {},
    },
    ".message-box-default-no-outline:hover": {
      "@apply bg-[#11182744] text-[#111827]": {},
    },
    ".message-box-default-no-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-default-glowing": {
      "@apply bg-[#1f293733] shadow-[0_0_8px_#1f293780] text-[#1f2937]": {},
    },
    ".message-box-default-glowing:hover": {
      "@apply bg-[#11182744] shadow-[0_0_12px_#11182780] text-[#111827]": {},
    },
    ".message-box-default-glowing:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] shadow-[0_0_8px_rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-primary-solid": {
      "@apply bg-[#2563eb] text-white": {},
    },
    ".message-box-primary-solid:hover": {
      "@apply bg-[#1d4ed8] text-white": {},
    },
    ".message-box-primary-solid:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-primary-outline": {
      "@apply bg-[#2563eb33] border border-[#2563eb] text-[#2563eb]": {},
    },
    ".message-box-primary-outline:hover": {
      "@apply bg-[#1d4ed844] border border-[#1d4ed8] text-[#1d4ed8]": {},
    },
    ".message-box-primary-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-primary-outline-dashed": {
      "@apply bg-[#2563eb33] border border-dashed border-[#2563eb] text-[#2563eb]":
        {},
    },
    ".message-box-primary-outline-dashed:hover": {
      "@apply bg-[#1d4ed844] border border-dashed border-[#1d4ed8] text-[#1d4ed8]":
        {},
    },
    ".message-box-primary-outline-dashed:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-dashed border-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-primary-no-outline": {
      "@apply bg-[#2563eb33] text-[#2563eb]": {},
    },
    ".message-box-primary-no-outline:hover": {
      "@apply bg-[#1d4ed844] text-[#1d4ed8]": {},
    },
    ".message-box-primary-no-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-primary-glowing": {
      "@apply bg-[#2563eb33] shadow-[0_0_8px_#2563eb80] text-[#2563eb]": {},
    },
    ".message-box-primary-glowing:hover": {
      "@apply bg-[#1d4ed844] shadow-[0_0_12px_#1d4ed880] text-[#1d4ed8]": {},
    },
    ".message-box-primary-glowing:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] shadow-[0_0_8px_rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-secondary-solid": {
      "@apply bg-[#4f46e5] text-white": {},
    },
    ".message-box-secondary-solid:hover": {
      "@apply bg-[#4338ca] text-white": {},
    },
    ".message-box-secondary-solid:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-secondary-outline": {
      "@apply bg-[#4f46e533] border border-[#4f46e5] text-[#4f46e5]": {},
    },
    ".message-box-secondary-outline:hover": {
      "@apply bg-[#4338ca44] border border-[#4338ca] text-[#4338ca]": {},
    },
    ".message-box-secondary-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-secondary-outline-dashed": {
      "@apply bg-[#4f46e533] border border-dashed border-[#4f46e5] text-[#4f46e5]":
        {},
    },
    ".message-box-secondary-outline-dashed:hover": {
      "@apply bg-[#4338ca44] border border-dashed border-[#4338ca] text-[#4338ca]":
        {},
    },
    ".message-box-secondary-outline-dashed:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-dashed border-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-secondary-no-outline": {
      "@apply bg-[#4f46e533] text-[#4f46e5]": {},
    },
    ".message-box-secondary-no-outline:hover": {
      "@apply bg-[#4338ca44] text-[#4338ca]": {},
    },
    ".message-box-secondary-no-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-secondary-glowing": {
      "@apply bg-[#4f46e533] shadow-[0_0_8px_#4f46e580] text-[#4f46e5]": {},
    },
    ".message-box-secondary-glowing:hover": {
      "@apply bg-[#4338ca44] shadow-[0_0_12px_#4338ca80] text-[#4338ca]": {},
    },
    ".message-box-secondary-glowing:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] shadow-[0_0_8px_rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-success-solid": {
      "@apply bg-[#16a34a] text-white": {},
    },
    ".message-box-success-solid:hover": {
      "@apply bg-[#15803d] text-white": {},
    },
    ".message-box-success-solid:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-success-outline": {
      "@apply bg-[#16a34a33] border border-[#16a34a] text-[#16a34a]": {},
    },
    ".message-box-success-outline:hover": {
      "@apply bg-[#15803d44] border border-[#15803d] text-[#15803d]": {},
    },
    ".message-box-success-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-success-outline-dashed": {
      "@apply bg-[#16a34a33] border border-dashed border-[#16a34a] text-[#16a34a]":
        {},
    },
    ".message-box-success-outline-dashed:hover": {
      "@apply bg-[#15803d44] border border-dashed border-[#15803d] text-[#15803d]":
        {},
    },
    ".message-box-success-outline-dashed:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-dashed border-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-success-no-outline": {
      "@apply bg-[#16a34a33] text-[#16a34a]": {},
    },
    ".message-box-success-no-outline:hover": {
      "@apply bg-[#15803d44] text-[#15803d]": {},
    },
    ".message-box-success-no-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-success-glowing": {
      "@apply bg-[#16a34a33] shadow-[0_0_8px_#16a34a80] text-[#16a34a]": {},
    },
    ".message-box-success-glowing:hover": {
      "@apply bg-[#15803d44] shadow-[0_0_12px_#15803d80] text-[#15803d]": {},
    },
    ".message-box-success-glowing:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] shadow-[0_0_8px_rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-warning-solid": {
      "@apply bg-[#d97706] text-white": {},
    },
    ".message-box-warning-solid:hover": {
      "@apply bg-[#b45309] text-white": {},
    },
    ".message-box-warning-solid:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-warning-outline": {
      "@apply bg-[#d9770633] border border-[#d97706] text-[#d97706]": {},
    },
    ".message-box-warning-outline:hover": {
      "@apply bg-[#b4530944] border border-[#b45309] text-[#b45309]": {},
    },
    ".message-box-warning-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-warning-outline-dashed": {
      "@apply bg-[#d9770633] border border-dashed border-[#d97706] text-[#d97706]":
        {},
    },
    ".message-box-warning-outline-dashed:hover": {
      "@apply bg-[#b4530944] border border-dashed border-[#b45309] text-[#b45309]":
        {},
    },
    ".message-box-warning-outline-dashed:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-dashed border-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-warning-no-outline": {
      "@apply bg-[#d9770633] text-[#d97706]": {},
    },
    ".message-box-warning-no-outline:hover": {
      "@apply bg-[#b4530944] text-[#b45309]": {},
    },
    ".message-box-warning-no-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-warning-glowing": {
      "@apply bg-[#d9770633] shadow-[0_0_8px_#d9770680] text-[#d97706]": {},
    },
    ".message-box-warning-glowing:hover": {
      "@apply bg-[#b4530944] shadow-[0_0_12px_#b4530980] text-[#b45309]": {},
    },
    ".message-box-warning-glowing:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] shadow-[0_0_8px_rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-error-solid": {
      "@apply bg-[#dc2626] text-white": {},
    },
    ".message-box-error-solid:hover": {
      "@apply bg-[#b91c1c] text-white": {},
    },
    ".message-box-error-solid:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-error-outline": {
      "@apply bg-[#dc262633] border border-[#dc2626] text-[#dc2626]": {},
    },
    ".message-box-error-outline:hover": {
      "@apply bg-[#b91c1c44] border border-[#b91c1c] text-[#b91c1c]": {},
    },
    ".message-box-error-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-error-outline-dashed": {
      "@apply bg-[#dc262633] border border-dashed border-[#dc2626] text-[#dc2626]":
        {},
    },
    ".message-box-error-outline-dashed:hover": {
      "@apply bg-[#b91c1c44] border border-dashed border-[#b91c1c] text-[#b91c1c]":
        {},
    },
    ".message-box-error-outline-dashed:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-dashed border-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-error-no-outline": {
      "@apply bg-[#dc262633] text-[#dc2626]": {},
    },
    ".message-box-error-no-outline:hover": {
      "@apply bg-[#b91c1c44] text-[#b91c1c]": {},
    },
    ".message-box-error-no-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".message-box-error-glowing": {
      "@apply bg-[#dc262633] shadow-[0_0_8px_#dc262680] text-[#dc2626]": {},
    },
    ".message-box-error-glowing:hover": {
      "@apply bg-[#b91c1c44] shadow-[0_0_12px_#b91c1c80] text-[#b91c1c]": {},
    },
    ".message-box-error-glowing:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] shadow-[0_0_8px_rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
  };

  addComponents({
    ...baseMessageBox,
    ...radiusMap,
    ...variantsMap,
  });
}
