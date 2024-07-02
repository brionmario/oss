module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['turbo', 'plugin:@brionmario/internal', 'plugin:@brionmario/prettier'],
  plugins: ['@brionmario'],
};
