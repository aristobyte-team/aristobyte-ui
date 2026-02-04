'use strict';

const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../..');
const { pathsToModuleNameMapper } = require('./pathsToModuleNameMapper');

module.exports = {
  preset: 'ts-jest',
  rootDir: ROOT_DIR,
  roots: ['packages'],
  globalSetup: '<rootDir>/config/jest/globalSetup.js',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupFilesAfterEnv.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node', 'css'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/config/jest/fileMock.js',
    '\\.(css|scss|sass)$': '<rootDir>/config/jest/styleMock.js',
    ...pathsToModuleNameMapper(),
  },
  transformIgnorePatterns: ['/node_modules/', '<rootDir>/(dist|node_modules)/(?!lodash-es)'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: path.join(ROOT_DIR, 'tsconfig.jest.json'),
      },
    ],
  },
  modulePathIgnorePatterns: [],
  snapshotSerializers: [],

  collectCoverageFrom: [
    'packages/**/*.{ts,tsx,js}',
    '!packages/**/__tests__/**',
    '!packages/**/dist/**/*.js',
    '!packages/**/src/main/index.js',
    '!packages/**/src/test/**',
    '!packages/**/types.{ts,tsx,js}',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 73,
      functions: 80,
      lines: 80,
    },
  },
};
