/** @type {import('eslint').Linter.Config} */
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  extends: [
    'eslint:recommended',
    'airbnb-base', // Include Airbnb's base config
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Customize your rules here
    'no-console': 'warn',
    'indent': ['error', 2],
    // Add more rules as needed
  },
});
