const path = require('path')
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// 合并公共配置，并添加开发环境配置
module.exports = merge(baseConfig, {
    mode: 'development', // 开发模式，打包快速，省略了代码优化步骤
    devtool: 'eval-cheap-module-source-map', // 源码调试模式
    devServer: {
        port: 3000,
        compress: false,
        hot: true, // 开启热模块替换
        historyApiFallback: true, // 解决history路由404问题
        static: {
            directory: path.join(__dirname, '../public') // 托管静态资源public文件夹
        }
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
})