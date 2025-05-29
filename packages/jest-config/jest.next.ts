import { config as reactConfig } from "./jest.react";

export const config = {
  ...reactConfig,
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
