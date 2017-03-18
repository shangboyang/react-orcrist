var webpack = require('webpack');
var path = require("path");
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var projectRoot = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: './app/app.js', //编译的入口文件,
        vendor: ["react", 'react-dom', 'react-redux', 'lodash'],
    },
    output: {
        // publicPath: '../dist/', //服务器根路径
        // path: path.resolve(__dirname, '../dist'), //编译到当前目录
        // filename: '[name].js' //编译后的文件名字

        path: path.resolve(__dirname, '../dist/static'),
        publicPath: './static/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'json', '.css', '.less'], //后缀名自动补全
        fallback: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../src/styles')],
        alias: {
          'src': path.resolve(__dirname, '../app')
        }
    },
    resolveLoader: {
        fallback: [
            path.join(__dirname, '../node_modules'),
            path.join(__dirname, '../app/css')
        ]
    },
    module: {
        // Different loaders are linked by exclamation mark(!)
        loaders: [
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url?limit=220000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }, {
                test: /\.js[x]?$/,
                exclude: /^node_modules$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    // es2016 polyfill (http://babeljs.io/docs/plugins/transform-class-properties/)
                    plugins: ['transform-class-properties']
                }
            }
        ]
    }
};
