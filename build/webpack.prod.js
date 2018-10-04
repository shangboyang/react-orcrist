const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common.js');
const path = require('path');
const basePath = path.resolve(__dirname, '../');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(basePath, './dist'), //编译到当前目录
    filename: 'static/[name].[chunkhash:8].js' //编译后的文件名字
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: basePath
    }),
    new HtmlWebpackPlugin({
      title: 'react-orcrist',
      inject: true,
      filename: './index.html', // string name
      template: 'index.html', // url
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
  ]
})