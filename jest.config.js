const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: "jsdom", //node,jsdom
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/unit/styleMock.js'
  }
}