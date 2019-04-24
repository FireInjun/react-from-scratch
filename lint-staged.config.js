module.exports = {
  linters: {
    'src/**/*.js': ['npm run lint', 'npm run style', 'npm run test', 'npm run coverage', 'git add'],
  },
};
