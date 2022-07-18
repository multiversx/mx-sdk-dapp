module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|```eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/utils/testing/fileTransform.ts',
    '\\.(css|less|scss)$': '<rootDir>/src/utils/testing/fileTransform.ts'
  },
  moduleNameMapper: {
    uint8arrays: '<rootDir>/node_modules/uint8arrays/cjs/src',
    multiformats: '<rootDir>/node_modules/multiformats/cjs/src',
    base16: '<rootDir>/node_modules/multiformats/cjs/src/bases/base16.js'
  }
};
