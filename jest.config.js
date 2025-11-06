module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testTimeout: 10000,
  coverageProvider: 'v8',
  coverageReporters: ['json-summary', 'lcov', 'text'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': ['@swc/jest']
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transformIgnorePatterns: ['node_modules/(^.+\\\\.(ts|js|tsx|jsx)$)'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|bgTest).[jt]s?(x)'
  ],
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
  ]
};
