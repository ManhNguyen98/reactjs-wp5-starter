/* eslint import/no-extraneous-dependencies: "off" */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: (info) => path
      .relative(path.resolve(__dirname, './src'), info.absoluteResourcePath)
      .replace(/\\/g, '/'),
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!public/css/*'],
    }),
  ],
});
