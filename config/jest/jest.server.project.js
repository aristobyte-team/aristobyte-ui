'use strict';

module.exports = {
  ...require('./jest.common'),
  displayName: 'server',
  testEnvironment: 'node',
  testMatch: ['**/*.server.test.{ts,tsx,js}'],
};
