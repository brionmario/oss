const path = require('path');

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@brionmario/typescript',
    'plugin:@brionmario/strict',
    'plugin:@brionmario/internal',
    'plugin:@brionmario/jest',
    'plugin:@brionmario/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    project: [path.resolve(__dirname, 'tsconfig.eslint.json')],
  },
  plugins: ['@brionmario'],
  rules: {},
};
