const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');

// 定义了一些路径
const APP_PATH = path.resolve(__dirname, 'public/app.js');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    // 入口，分为app 入口和提取插件库的入口
    entry: {
        app: APP_PATH,
    },

    // 输出文件路径和名字
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body',
            minify: false
        }),

        //自动启动浏览器
        new OpenBrowserPlugin({url: 'http://localhost:8081'})
    ],

    //dev 服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./build", // dev server的根路径
        port: 8081
    },

    // 加载器
    module: {
        "loaders": [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 50000,   //小于50K的 都打包
                            name: "[hash:8].[name].[ext]",
                            publicPath: "img/",  //替换CSS引用的图片路径 可以替换成爱拍云上的路径
                            outputPath: "../img/"        //生成之后存放的路径
                        }
                    }
                ]
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
};