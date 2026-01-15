import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module?.rules.push({
      test: /\.svg$/,
      use: "raw-loader",
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        canvas: false,
        "pdfjs-dist": path.join(__dirname, "node_modules/pdfjs-dist"),
      },
    };

    return config;
  },
  transpilePackages: [
    "@aristobyte-ui/anchor",
    "@aristobyte-ui/button",
    "@aristobyte-ui/dropdown",
    "@aristobyte-ui/message-box",
    "@aristobyte-ui/presets",
    "@aristobyte-ui/radio",
    "@aristobyte-ui/spinner",
    "@aristobyte-ui/switch",
    "@aristobyte-ui/theme",
    "@aristobyte-ui/utils",
  ],
};

export default nextConfig;
