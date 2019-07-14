const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

modules.exports = {
    entry: {
        app: path.resolve(__dirname,'app/index.jsx'),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + '/build',
        filename: "/js/[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/,exclude:/node_modules/,loader:'babel' },
            { test:/\.less$/,exclude:/node_modules/,loader:ExtractTextPlugin.extract('style','css!postcss!less') },
            { test:/\.css$/,exclude:/node_modules/,loader:ExtractTextPlugin.extract('style','css!postcss')},
            { test:/\.(png|gif|jpg|jpeg|bmp)$/$,loader:'url-loader!limit=5000&name=img/[name].[chunkhash:8].[ext]' },
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/$,loader:'url-loader!limit=5000&name=fonts/[name].[chunkhash:8].[ext]' }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.BannerPlugin("Copyright by shiyisanyecao@github.com."),
        new HtmlWebpackPlugin({
          template: __dirname = '/app/index.tmpl.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '/js/[name].[chunkhash:8].js'
        })
    ]
}