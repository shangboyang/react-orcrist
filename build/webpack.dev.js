const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const path = require('path');
const basePath = path.resolve(__dirname, '../');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // 
  devServer: {
    host: '0.0.0.0', // 支持ip访问
    port: 7799,
    hot: true,
    inline: true, // ???
    compress: true, // gzip
    contentBase: path.resolve(basePath, '/dist/')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'development'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: basePath
    }),
    new HtmlWebpackPlugin({
      title: 'react-orcrist',
      inject: true,
      filename: './index.html', // string name
      template: 'index.html', // url
    })
  ]
})