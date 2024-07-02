const jestConfig = {
  displayName: '<PACKAGE_NAME>', // Replace <PACKAGE_NAME> with the name of your package
  moduleDirectories: ['node_modules', 'test-configs', __dirname],
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {},
  modulePaths: ['<rootDir>'],
  preset: 'babel-jest',
  setupFilesAfterEnv: ['<rootDir>/test-configs/setup-test.js'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: ['<rootDir>/(dist|node_modules)/'],
  transform: {
    '^.+\\.ts?$': [
      'babel-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [],
  verbose: true,
};

export default jestConfig;
