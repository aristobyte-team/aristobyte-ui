import plugin from "tailwindcss/plugin";

export const card = plugin(function ({ addComponents /* theme */ }) {
  // const colors = theme("colors") as Record<string, string>;

  const radiusMap = {
    ".card-radius-none": { "@apply rounded-none": {} },
    ".card-radius-sm": { "@apply rounded-sm": {} },
    ".card-radius-md": { "@apply rounded-md": {} },
    ".card-radius-lg": { "@apply rounded-lg": {} },
    ".card-radius-full": { "@apply rounded-full": {} },
  };

  const cardBase = {
    ".card": {
      "@apply flex flex-col p-[17px_17px_30px] w-[calc(100%-34px)] transition-all duration-150 ease-out border border-gray-700 bg-gray-900/30":
        {},
      "&__icon": {
        "@apply flex items-center justify-center": {},
      },
      "&__title": {
        "@apply flex items-center gap-3 text-[20px] font-medium leading-[20px] text-gray-200":
          {},
        b: {
          "@apply rounded-md bg-gray-800/40 border border-gray-600 px-1.5 py-0.5 text-white":
            {},
        },
      },
      "&__description": {
        "@apply text-gray-400 text-[16px] font-normal leading-[22px] mt-3.5":
          {},
        b: {
          "@apply rounded-md bg-gray-800/40 border border-gray-600 px-1.5 py-0.5 text-white":
            {},
        },
      },
      "&__content": {
        "@apply flex flex-col mt-6 w-full": {},
      },
    },
  };

  addComponents({
    ...cardBase,
    ...radiusMap,
  });
});
