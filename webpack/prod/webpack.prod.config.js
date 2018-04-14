const webpack = require('webpack');
const path = require('path');
const {version} = require('../../package');

const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlMinifier = require('html-minifier').minify
const WorkboxPlugin = require('workbox-webpack-plugin');


const parentDir = path.join(__dirname, '../../');
const APP_DIR = path.resolve(parentDir, 'src');
const BUILD_DIR = path.resolve(parentDir, 'public');
const GIT_REV = process.env.GIT_REV || 'unknown';
const VERSION_NUMBER = version || '0.0.0';
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
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: ''
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
      { from: APP_DIR + '/manifest.json', to: BUILD_DIR + '/manifest.json' },
      { from: APP_DIR + '/img/', to: BUILD_DIR + '/img/' },
      { from: APP_DIR + '/font/', to: BUILD_DIR + '/font/' },
    ]),

    // Optimize the images
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

    // Minify JavaScript files
    new UglifyJsPlugin({ test: /\.js($|\?)/i }),

    // Extract the CSS to an external minified file
    new ExtractTextPlugin('app.css'),

    // Create and minify index.html in /public
    new HtmlWebpackPlugin({
      filename: BUILD_DIR + '/index.html',
      template: APP_DIR + '/index.template.html',
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        // minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.DefinePlugin({
      'GIT_REV': JSON.stringify(GIT_REV),
      'VERSION_NUMBER': JSON.stringify(VERSION_NUMBER),
    }),

    // Generate a service worker config file
    // Ref: https://developers.google.com/web/tools/workbox/guides/get-started
    new WorkboxPlugin.GenerateSW()

  ]
}
