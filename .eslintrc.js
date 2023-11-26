module.exports = {
  extends: ['plugin:@next/next/recommended', 'plugin:cypress/recommended'],
  ignorePatterns: ['**/build/**/*'],
  rules: {
    'no-console': 'off',
  },
};
