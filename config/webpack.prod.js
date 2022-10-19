const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.js");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production", // 会开启tree-shaking和压缩代码等优化
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"), // 将public下文件
          to: path.resolve(__dirname, "../dist"), // 复制到dist目录
          filter: (source) => !source.includes("index.html"), // 忽略index.html
        },
      ],
    }),
  ],
});
