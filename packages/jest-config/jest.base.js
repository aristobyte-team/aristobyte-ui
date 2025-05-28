export const config = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": [
      "babel-jest",
      {
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleDirectories: ["node_modules", "src"],
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**", "!**/dist/**"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  globals: {},
};
