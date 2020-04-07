const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: '../src/index.ts', // 输入
    output: {
        filename: 'main.js' // 输出
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: process.env.NODE_ENV === 'production'?false: 'inline-source-map', // 指定source map的配置方式
    devServer: {
        contentBase: './dist',
        stats: 'errors-only', // 显示日志，只在错误发生时输出
        compress: false,
        host: 'localhost',
        post: 8080
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: '../src/templete/index.html'
        })
    ]

}