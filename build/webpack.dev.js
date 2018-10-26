const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');
const assets = require('./assets')

const path = require('path');
const basePath = path.resolve(__dirname, '../');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  // use cdn for umd Global React vals
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
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
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': 'development'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: basePath
    }),
    new HtmlWebpackPlugin(Object.assign({
      title: 'react-orcrist',
      inject: true,
      filename: './index.html', // string name
      template: 'index.html', // url
      favicon: path.resolve(__dirname, '../favicon.png')
    }, assets.dev.cdn))
  ],
  optimization: {
    nodeEnv: 'development' // process.env.NODE_ENV
  },
})