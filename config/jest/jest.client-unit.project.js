'use strict';

module.exports = {
  ...require('./jest.common'),
  displayName: 'dom unit',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.unit.test.{ts,tsx,js}'],
};
