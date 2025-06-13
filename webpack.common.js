// ✅ webpack.common.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = (env = {}) => {
  const isProduction = env.production === true;

  const publicPath = '/'; // always use root for Netlify

  return {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        favicon: './asset/favicon.png',
        publicPath,
      }),

      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),

      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/manifest.json', to: 'manifest.json' },
          { from: 'public/offline.html', to: 'offline.html' },
          { from: 'asset', to: 'asset' },
          {
            from: path.resolve(__dirname, 'node_modules/leaflet/dist/images'),
            to: 'leaflet/images',
          },
        ],
      }),

      isProduction &&
        new WorkboxPlugin.InjectManifest({
          swSrc: './src/sw.js',
          swDest: 'sw.js',
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        '@leaflet': 'leaflet',
      },
    },
  };
};
