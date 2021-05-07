const webpack = require('webpack');
const { merge } = require('webpack-merge');
const apiMocker = require('connect-api-mocker');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    before(app) {
      app.use(apiMocker('/api', 'mocks/api'));
    },
  },
});
