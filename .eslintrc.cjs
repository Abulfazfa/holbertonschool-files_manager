module.exports = {
  env: {
      browser: false, // Set to false if your code does not run in a browser
      node: true, // Enable Node.js global variables
      es6: true, // Enable ES6 syntax
      jest: true, // If you're using Jest for testing
  },
  extends: [
      'airbnb-base', // Extend Airbnb base rules
      'plugin:jest/all', // Extend Jest rules
      'eslint:recommended', // Extend recommended ESLint rules
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
      ecmaVersion: 2018, // Set the ECMAScript version
      sourceType: 'module', // Allow ES module syntax
  },
  plugins: ['jest'], // Include the Jest plugin
  rules: {
      'max-classes-per-file': 'off', // Allow multiple classes per file
      'no-underscore-dangle': 'off', // Disable no-underscore-dangle rule
      'no-console': 'off', // Allow console statements
      'no-shadow': 'off', // Disable no-shadow rule
      'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement', // Disallow specific syntax
      ],
  },
  overrides: [
      {
          files: ['*.js'],
          excludedFiles: 'babel.config.js', // Exclude babel.config.js from this configuration
      },
  ],
};
