module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'cypress'
  ],
  rules: {
    'react/prop-types': 'off',
     'react/react-in-jsx-scope': 'off',
     'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  }
}
