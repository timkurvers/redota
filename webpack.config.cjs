/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/ui/bootstrap.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'redota-[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js'],
    fallback: {
      buffer: require.resolve('buffer/'),
    },
  },
  devtool: 'source-map',
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
