const webpack = require('webpack');
const path = require('path');
const {version} = require('../../package');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CreateFilePlugin = require('webpack-create-file-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const parentDir = path.join(__dirname, '../../');
const APP_DIR = path.resolve(parentDir, 'src');
const BUILD_DIR = path.resolve(parentDir, 'public');
const GIT_REV = process.env.GIT_REV || 'unknown';
const VERSION_NUMBER = version || '0.0.0';

console.log('Starting App ... \n================\n');

module.exports = {
  entry: [
    'babel-polyfill',
    APP_DIR + '/index.js'
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.css$/,
        // loaders: ['style-loader', 'css-loader', 'postcss-loader']
        use: [
          {loader: 'style-loader', options: { sourceMap: true }},
          {loader: 'css-loader', options: { sourceMap: true }},
          {
            loader: 'postcss-loader',
            options: {
              config: { path: './webpack/dev/' },
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(BUILD_DIR, '/'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(BUILD_DIR, '/'),
    historyApiFallback: true
  },
  plugins: [
    // Copy files from /src to /public
    // new CopyWebpackPlugin([
    //   { from: APP_DIR + '/index.html', to: BUILD_DIR + '/index.html' }
    // ]),
    // Create blank files to avoid errors in the browser console
    new CreateFilePlugin({
      files: [
        'app.css',
        'bundle.js'
      ]
    }),
    new HtmlWebpackPlugin({
      filename: BUILD_DIR + '/index.html',
      template: APP_DIR + '/index.template.html'
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.DefinePlugin({
      'GIT_REV': JSON.stringify(GIT_REV),
      'VERSION_NUMBER': JSON.stringify(VERSION_NUMBER),
    }),
  ]
}
