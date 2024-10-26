/* eslint-env node */ // Add this line at the top

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Specify the current Node.js version
        },
      },
    ],
  ],
};
