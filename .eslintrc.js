module.exports = {
  extends: ['expo', '@react-native-community'],
  plugins: ['react', 'react-native', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.expo/',
    'web-build/',
    'email-server/node_modules/'
  ]
};
