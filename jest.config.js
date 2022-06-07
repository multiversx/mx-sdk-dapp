const { defaults } = require('jest-config');

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: "jsdom"
};
