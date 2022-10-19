const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    mode: 'production', // 会开启tree-shaking和压缩代码等优化
})