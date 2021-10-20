module.exports = {
  globals: {
    // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  modulePathIgnorePatterns: ['/node_modules/', 'dist'],
  testEnvironment: 'jsdom',
  transform: {
    // Doesn't support jsx/tsx since sucrase doesn't support Vue JSX
    '\\.(j|t)s$': '@sucrase/jest-plugin',
    '^.+\\js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'ts', 'node'],
  roots: ['<rootDir>'],
}
