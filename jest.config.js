module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': ['@swc/jest'],
    '^.+\\.scss$': 'jest-scss-transform',
    '^.+\\.svg$': '<rootDir>/config/svgTransform.js'
  },
  transformIgnorePatterns: ['node_modules/(^.+\\\\.(ts|js|tsx|jsx)$)'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|bgTest).[jt]s?(x)'
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
    uint8arrays: '<rootDir>/node_modules/uint8arrays/cjs/src',
    multiformats: '<rootDir>/node_modules/multiformats/cjs/src'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'node'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
