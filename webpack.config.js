/**
 * Created by zhoupeng on 2017/12/7.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:  [
        'react-hot-loader/patch',
        /*'webpack-dev-server/client?http://localhost:3000',*/
        'webpack/hot/only-dev-server',
        __dirname + "/app/index.js"
    ],
    output:{
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        /*new HtmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),*/
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [ 'react-hot-loader/webpack','babel-loader?presets[]=react,presets[]=es2015']
                /*query: {
                    presets: ['react', 'es2015'],

                },*/
                /*options:{
                    cacheDirectory: true,
                    plugins:[
                        'react-hot-loader/babel'
                    ]
                }*/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}