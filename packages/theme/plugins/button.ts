import plugin from "tailwindcss/plugin";

export const button = plugin(function ({ addComponents, theme }) {
  const colors = theme("colors") as Record<
    string,
    { default: string; hover?: string; disabled?: string }
  >;

  const variants = [
    "default",
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
  ];
  const appearances = [
    "solid",
    "outline",
    "outline-dashed",
    "no-outline",
    "glowing",
  ];

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

  const variantMap: Record<string, unknown> = {};

  variants.forEach((variant) => {
    const c = colors[variant];

    appearances.forEach((appearance) => {
      const selector = `.btn-${variant}-${appearance}`;
      const base: Record<string, unknown> = {
        color: "#fff",
        "&:hover": { backgroundColor: c.hover ?? c.default },
        "&:disabled": {
          backgroundColor: `${c.disabled ?? c.default}`,
          color: "rgba(255,255,255,0.5)",
        },
      };

      switch (appearance) {
        case "solid":
        default:
          base.backgroundColor = c.default;
          break;
        case "outline":
          base.backgroundColor = `${c.default}33`; // 20% opacity
          base.border = `1px solid ${c.default}`;
          break;
        case "outline-dashed":
          base.backgroundColor = `${c.default}33`;
          base.border = `1px dashed ${c.default}`;
          break;
        case "no-outline":
          base.backgroundColor = `${c.default}33`;
          break;
        case "glowing":
          base.backgroundColor = `${c.default}33`;
          base.border = `1px solid ${c.default}`;
          base.boxShadow = `0 0 8px ${c.default}80, 0 0 16px ${c.default}66, 0 0 24px ${c.default}4d`;
          break;
      }

      variantMap[selector] = base;
    });
  });

  addComponents({
    ...btnBase,
    ...sizeMap,
    ...radiusMap,
    ...variantMap,
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
