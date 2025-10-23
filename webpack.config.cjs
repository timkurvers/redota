/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  entry: './src/ui/bootstrap.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'redota-[name]-[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js'],
    fallback: {
      buffer: require.resolve('buffer/'),
    },
  },
  devtool: env === 'development' ? 'inline-cheap-source-map' : false,
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        dotaconstants: {
          name: 'dotaconstants',
          test: /[\\/]node_modules[\\/]dotaconstants[\\/]/,
        },
        protobuf: {
          name: 'protobuf',
          test: /[\\/]dota[\\/]compiled.cjs|[\\/]node_modules[\\/]@?protobufjs/,
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/](?!dotaconstants|(?:@?protobufjs))/,
        },
      },
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: './src/ui/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.json?$/,
        type: 'json',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!dotaconstants).*/,
        loader: 'babel-loader',
      },
      {
        test: /\.worker\.js$/,
        loader: 'worker-loader',
        options: {
          filename: (pathData) => {
            let { name } = pathData.chunk;
            name = name.replace('.worker', '');
            name = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
            return `redota-${name}-[chunkhash:8].worker.js`;
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
};
