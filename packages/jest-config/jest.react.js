import { config as base } from "./base.js";

export const config = {
  ...base,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
