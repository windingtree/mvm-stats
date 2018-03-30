const webpack = require('webpack');
const path = require('path');

const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const parentDir = path.join(__dirname, '../../');
const APP_DIR = path.resolve(parentDir, 'src');
const BUILD_DIR = path.resolve(parentDir, 'public');

console.log('Building App ... \n================\n');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './webpack/prod/'
                }
              }
            }
          ]
        })
      }
    ]
  },
  output: {
    path: path.join(BUILD_DIR, '/'),
    publicPath: path.join(BUILD_DIR, '/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(BUILD_DIR, '/'),
    historyApiFallback: true
  },
  plugins: [
    // Clean assets (remove unused files)
    new WebpackCleanupPlugin({exclude: ["styleguide/**/*"]}),

    // Copy files from /src to /public
    new CopyWebpackPlugin([
      { from: APP_DIR + '/index.html', to: BUILD_DIR + '/index.html' },
      { from: APP_DIR + '/manifest.json', to: BUILD_DIR + '/manifest.json' },
      { from: APP_DIR + '/service-worker.js', to: BUILD_DIR + '/service-worker.js' },
      { from: APP_DIR + '/img/', to: BUILD_DIR + '/img/' }
    ]),

    // Optimize the images
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

    // Minify JavaScript files
    new UglifyJsPlugin({ test: /\.js($|\?)/i }),

    // Extract the CSS to an external minified file
    new ExtractTextPlugin('app.css'),
  ]
}
