module.exports = {
  linters: {
    'src/**/*.js': [
      'eslint --debug src/**/*.js',
      'stylelint src/**/*.{js,css,scss}',
      'jest',
      'jest --coverage --colors',
      'git add',
    ],
  },
};
