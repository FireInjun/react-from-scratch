const HTMLWebPackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
      emitErrors: true,
    }),
  ],
};
