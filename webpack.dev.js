const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common({ production: false }), {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
    compress: true,
    port: 9000,
    hot: true,
    https: false,
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
