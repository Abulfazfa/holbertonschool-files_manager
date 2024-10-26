module.exports = {
    env: {
        browser: false,
        node: true, // Enable Node.js global variables
        es6: true, // Enable ES6 features
        jest: true, // Enable Jest testing framework globals if you're using Jest
    },
    extends: [
        'airbnb-base', // Base configuration from Airbnb
        'plugin:jest/all', // Jest rules if you're using Jest
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module', // Use ES6 modules
    },
    plugins: ['jest'],
    rules: {
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
        ],
    },
    overrides: [
        {
            files: ['*.js'],
            excludedFiles: 'babel.config.js', // Exclude this file if you want to ignore it
        },
    ],
};
