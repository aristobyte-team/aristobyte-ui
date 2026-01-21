'use strict';

module.exports = {
  ...require('./jest.common'),
  displayName: 'dom comp',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.comp.test.{ts,tsx,js}'],
};
