const path = require('path');
const basePath = path.resolve(__dirname, '../');

const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: './src/app.js', //编译的入口文件,
  },
  output: {
    path: path.resolve(basePath, './dist'), //编译到当前目录
    filename: 'static/[name].js' //编译后的文件名字
  },
  resolve: {
    extensions: ['.web.js', '.js', '.json'], //后缀名自动补全
    alias: {
      '@': path.resolve(basePath, './src')
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', "@babel/preset-react"],
          plugins: ['@babel/plugin-transform-runtime', ['import', {
             "libraryName": "antd-mobile",
             "style": "css"
          }]]
        }
      }
    }, {
      test: /\.(sa|sc|c|le)ss$/,
      // exclude: /(node_modules|bower_components)/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader',
        // 'sass-loader',
      ],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  recordsPath: path.join(basePath, 'records.json'),
  optimization: {
    // runtimeChunk: true, 
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all', // async module or not
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // ???
          enforce: true // ???
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          test: /src\/containers|src\/components|src\/config|src\/css|src\/utils/,
          priority: -20, // ???
          enforce: true // ???
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}

/*
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerHost: '127.0.0.1',
  analyzerPort: 8889,
  reportFilename: 'report.html',
  defaultSizes: 'parsed',
  generateStatsFile: false,
  statsFilename: 'stats.json',
  statsOptions: null,
  logLevel: 'info'
}),

*/