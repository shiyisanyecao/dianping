const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'app/index.jsx'),
  output: {
    path: path.resolve(__dirname,'build'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    rules: [
        { test: /\.(js|jsx)$/,exclude:/node_modules/,loader:'babel-loader',query:{presets:['react']} },
        { test:/\.less$/,exclude:/node_modules/,loader:'style!css!postcss!less' },
        { test:/\.css$/,exclude:/node_modules/,loader:'style!css!postcss-loader' },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/,loader:'url-loader' },
        { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/,loader:'url-loader' }
    ]
  },
  plugins: [
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      template: __dirname = __dirname+'/app/index.tmpl.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
        url: 'http://localhost:8080'
    }),
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ],
  devServer: {
      colors: true,
      historyApiFallback: true,
      inline: true,
      hot: true
  }
};