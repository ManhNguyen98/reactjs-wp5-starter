/* eslint import/no-extraneous-dependencies: "off" */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify('dev'),
      },
    }),
    new CleanWebpackPlugin(),
  ],
});
