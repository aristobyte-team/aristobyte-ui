import { colors } from "../extend";

export function messageBox({ addComponents, theme }: any) {
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
      fontFamily: theme("fontFamily.sans").join(", "),
      fontSize: theme("fontSize.sm")[0],
      fontWeight: theme("fontWeight.normal"),
      lineHeight: theme("lineHeight.normal"),
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
    ".messageBox-default-solid": {
      "@apply bg-[#1f2937] text-white": {},
    },
    ".messageBox-default-solid:hover": {
      "@apply bg-[#111827] text-white": {},
    },
    ".messageBox-default-solid:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-default-outline": {
      "@apply bg-[#1f293733] border border-[#1f2937] text-[#1f2937]": {},
    },
    ".messageBox-default-outline:hover": {
      "@apply bg-[#11182744] border border-[#111827] text-[#111827]": {},
    },
    ".messageBox-default-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-default-outline-dashed": {
      "@apply bg-[#1f293733] border border-dashed border-[#1f2937] text-[#1f2937]":
        {},
    },
    ".messageBox-default-outline-dashed:hover": {
      "@apply bg-[#11182744] border border-dashed border-[#111827] text-[#111827]":
        {},
    },
    ".messageBox-default-outline-dashed:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] border border-dashed border-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-default-no-outline": {
      "@apply bg-[#1f293733] text-[#1f2937]": {},
    },
    ".messageBox-default-no-outline:hover": {
      "@apply bg-[#11182744] text-[#111827]": {},
    },
    ".messageBox-default-no-outline:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-default-glowing": {
      "@apply bg-[#1f293733] shadow-[0_0_8px_#1f293780] text-[#1f2937]": {},
    },
    ".messageBox-default-glowing:hover": {
      "@apply bg-[#11182744] shadow-[0_0_12px_#11182780] text-[#111827]": {},
    },
    ".messageBox-default-glowing:disabled": {
      "@apply bg-[rgba(31,41,55,0.5)] shadow-[0_0_8px_rgba(31,41,55,0.5)] text-[rgba(31,41,55,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-primary-solid": {
      "@apply bg-[#2563eb] text-white": {},
    },
    ".messageBox-primary-solid:hover": {
      "@apply bg-[#1d4ed8] text-white": {},
    },
    ".messageBox-primary-solid:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-primary-outline": {
      "@apply bg-[#2563eb33] border border-[#2563eb] text-[#2563eb]": {},
    },
    ".messageBox-primary-outline:hover": {
      "@apply bg-[#1d4ed844] border border-[#1d4ed8] text-[#1d4ed8]": {},
    },
    ".messageBox-primary-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-primary-outline-dashed": {
      "@apply bg-[#2563eb33] border border-dashed border-[#2563eb] text-[#2563eb]":
        {},
    },
    ".messageBox-primary-outline-dashed:hover": {
      "@apply bg-[#1d4ed844] border border-dashed border-[#1d4ed8] text-[#1d4ed8]":
        {},
    },
    ".messageBox-primary-outline-dashed:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] border border-dashed border-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-primary-no-outline": {
      "@apply bg-[#2563eb33] text-[#2563eb]": {},
    },
    ".messageBox-primary-no-outline:hover": {
      "@apply bg-[#1d4ed844] text-[#1d4ed8]": {},
    },
    ".messageBox-primary-no-outline:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-primary-glowing": {
      "@apply bg-[#2563eb33] shadow-[0_0_8px_#2563eb80] text-[#2563eb]": {},
    },
    ".messageBox-primary-glowing:hover": {
      "@apply bg-[#1d4ed844] shadow-[0_0_12px_#1d4ed880] text-[#1d4ed8]": {},
    },
    ".messageBox-primary-glowing:disabled": {
      "@apply bg-[rgba(37,99,235,0.5)] shadow-[0_0_8px_rgba(37,99,235,0.5)] text-[rgba(37,99,235,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-secondary-solid": {
      "@apply bg-[#4f46e5] text-white": {},
    },
    ".messageBox-secondary-solid:hover": {
      "@apply bg-[#4338ca] text-white": {},
    },
    ".messageBox-secondary-solid:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-secondary-outline": {
      "@apply bg-[#4f46e533] border border-[#4f46e5] text-[#4f46e5]": {},
    },
    ".messageBox-secondary-outline:hover": {
      "@apply bg-[#4338ca44] border border-[#4338ca] text-[#4338ca]": {},
    },
    ".messageBox-secondary-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-secondary-outline-dashed": {
      "@apply bg-[#4f46e533] border border-dashed border-[#4f46e5] text-[#4f46e5]":
        {},
    },
    ".messageBox-secondary-outline-dashed:hover": {
      "@apply bg-[#4338ca44] border border-dashed border-[#4338ca] text-[#4338ca]":
        {},
    },
    ".messageBox-secondary-outline-dashed:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] border border-dashed border-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-secondary-no-outline": {
      "@apply bg-[#4f46e533] text-[#4f46e5]": {},
    },
    ".messageBox-secondary-no-outline:hover": {
      "@apply bg-[#4338ca44] text-[#4338ca]": {},
    },
    ".messageBox-secondary-no-outline:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-secondary-glowing": {
      "@apply bg-[#4f46e533] shadow-[0_0_8px_#4f46e580] text-[#4f46e5]": {},
    },
    ".messageBox-secondary-glowing:hover": {
      "@apply bg-[#4338ca44] shadow-[0_0_12px_#4338ca80] text-[#4338ca]": {},
    },
    ".messageBox-secondary-glowing:disabled": {
      "@apply bg-[rgba(79,70,229,0.5)] shadow-[0_0_8px_rgba(79,70,229,0.5)] text-[rgba(79,70,229,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-success-solid": {
      "@apply bg-[#16a34a] text-white": {},
    },
    ".messageBox-success-solid:hover": {
      "@apply bg-[#15803d] text-white": {},
    },
    ".messageBox-success-solid:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-success-outline": {
      "@apply bg-[#16a34a33] border border-[#16a34a] text-[#16a34a]": {},
    },
    ".messageBox-success-outline:hover": {
      "@apply bg-[#15803d44] border border-[#15803d] text-[#15803d]": {},
    },
    ".messageBox-success-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-success-outline-dashed": {
      "@apply bg-[#16a34a33] border border-dashed border-[#16a34a] text-[#16a34a]":
        {},
    },
    ".messageBox-success-outline-dashed:hover": {
      "@apply bg-[#15803d44] border border-dashed border-[#15803d] text-[#15803d]":
        {},
    },
    ".messageBox-success-outline-dashed:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] border border-dashed border-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-success-no-outline": {
      "@apply bg-[#16a34a33] text-[#16a34a]": {},
    },
    ".messageBox-success-no-outline:hover": {
      "@apply bg-[#15803d44] text-[#15803d]": {},
    },
    ".messageBox-success-no-outline:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-success-glowing": {
      "@apply bg-[#16a34a33] shadow-[0_0_8px_#16a34a80] text-[#16a34a]": {},
    },
    ".messageBox-success-glowing:hover": {
      "@apply bg-[#15803d44] shadow-[0_0_12px_#15803d80] text-[#15803d]": {},
    },
    ".messageBox-success-glowing:disabled": {
      "@apply bg-[rgba(22,163,74,0.5)] shadow-[0_0_8px_rgba(22,163,74,0.5)] text-[rgba(22,163,74,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-warning-solid": {
      "@apply bg-[#d97706] text-white": {},
    },
    ".messageBox-warning-solid:hover": {
      "@apply bg-[#b45309] text-white": {},
    },
    ".messageBox-warning-solid:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-warning-outline": {
      "@apply bg-[#d9770633] border border-[#d97706] text-[#d97706]": {},
    },
    ".messageBox-warning-outline:hover": {
      "@apply bg-[#b4530944] border border-[#b45309] text-[#b45309]": {},
    },
    ".messageBox-warning-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-warning-outline-dashed": {
      "@apply bg-[#d9770633] border border-dashed border-[#d97706] text-[#d97706]":
        {},
    },
    ".messageBox-warning-outline-dashed:hover": {
      "@apply bg-[#b4530944] border border-dashed border-[#b45309] text-[#b45309]":
        {},
    },
    ".messageBox-warning-outline-dashed:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] border border-dashed border-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-warning-no-outline": {
      "@apply bg-[#d9770633] text-[#d97706]": {},
    },
    ".messageBox-warning-no-outline:hover": {
      "@apply bg-[#b4530944] text-[#b45309]": {},
    },
    ".messageBox-warning-no-outline:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-warning-glowing": {
      "@apply bg-[#d9770633] shadow-[0_0_8px_#d9770680] text-[#d97706]": {},
    },
    ".messageBox-warning-glowing:hover": {
      "@apply bg-[#b4530944] shadow-[0_0_12px_#b4530980] text-[#b45309]": {},
    },
    ".messageBox-warning-glowing:disabled": {
      "@apply bg-[rgba(217,119,6,0.5)] shadow-[0_0_8px_rgba(217,119,6,0.5)] text-[rgba(217,119,6,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-error-solid": {
      "@apply bg-[#dc2626] text-white": {},
    },
    ".messageBox-error-solid:hover": {
      "@apply bg-[#b91c1c] text-white": {},
    },
    ".messageBox-error-solid:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] text-white opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-error-outline": {
      "@apply bg-[#dc262633] border border-[#dc2626] text-[#dc2626]": {},
    },
    ".messageBox-error-outline:hover": {
      "@apply bg-[#b91c1c44] border border-[#b91c1c] text-[#b91c1c]": {},
    },
    ".messageBox-error-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-error-outline-dashed": {
      "@apply bg-[#dc262633] border border-dashed border-[#dc2626] text-[#dc2626]":
        {},
    },
    ".messageBox-error-outline-dashed:hover": {
      "@apply bg-[#b91c1c44] border border-dashed border-[#b91c1c] text-[#b91c1c]":
        {},
    },
    ".messageBox-error-outline-dashed:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] border border-dashed border-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-error-no-outline": {
      "@apply bg-[#dc262633] text-[#dc2626]": {},
    },
    ".messageBox-error-no-outline:hover": {
      "@apply bg-[#b91c1c44] text-[#b91c1c]": {},
    },
    ".messageBox-error-no-outline:disabled": {
      "@apply bg-[rgba(220,38,38,0.5)] text-[rgba(220,38,38,0.5)] opacity-50 cursor-not-allowed":
        {},
    },
    ".messageBox-error-glowing": {
      "@apply bg-[#dc262633] shadow-[0_0_8px_#dc262680] text-[#dc2626]": {},
    },
    ".messageBox-error-glowing:hover": {
      "@apply bg-[#b91c1c44] shadow-[0_0_12px_#b91c1c80] text-[#b91c1c]": {},
    },
    ".messageBox-error-glowing:disabled": {
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
