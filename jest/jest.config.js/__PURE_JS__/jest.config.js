module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {},
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/test-configs/setup-test.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};
