import { reactJsConfig } from './jest.react';

export const nextJsConfig = {
  ...reactJsConfig,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
