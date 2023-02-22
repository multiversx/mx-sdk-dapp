module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
    '^.+\\.scss$': 'jest-scss-transform',
    '.+\\.(svg)$': 'jest-scss-transform'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy'
  },
  moduleNameMapper: {
    uint8arrays: '<rootDir>/node_modules/uint8arrays/cjs/src',
    multiformats: '<rootDir>/node_modules/multiformats/cjs/src'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};
