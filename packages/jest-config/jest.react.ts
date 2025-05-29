import { config as baseConfig } from "./jest.base";

export const config = {
  ...baseConfig,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
