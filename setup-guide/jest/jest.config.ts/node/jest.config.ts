import type {Config} from '@jest/types';

const jestConfig: Config.InitialOptions = {
  displayName: '<PACKAGE_NAME>', // Replace <PACKAGE_NAME> with the name of your package
  extensionsToTreatAsEsm: ['.ts'],
  moduleDirectories: ['node_modules', 'test-configs', __dirname],
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  moduleNameMapper: {
    '^@unit-testing(.*)$': '<rootDir>/test-configs/utils',
  },
  modulePaths: ['<rootDir>'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/test-configs/setup-test.ts'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/?(*.)test.{ts,js}'],
  testPathIgnorePatterns: ['<rootDir>/(dist|node_modules)/'],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [],
  verbose: true,
};

export default jestConfig;
