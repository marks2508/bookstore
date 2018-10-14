const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpack = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpack = new CopyWebpackPlugin([
  { from: './src/assets', to: 'assets' }
]);

const HotModuleReplcement = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('public'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  },
  plugins: [HotModuleReplcement, HtmlWebpack, CopyWebpack]
};