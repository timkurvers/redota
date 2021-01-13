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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};
