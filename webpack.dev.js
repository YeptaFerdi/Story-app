const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
    compress: true,
    port: 9000,
    hot: true,
    https: true,
    historyApiFallback: true,
    devMiddleware: {
      publicPath: '/',
    },
    proxy: {
      '/api': {
        target: 'https://story-api.dicoding.dev',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
