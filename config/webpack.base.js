const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BASE_ENV", process.env.BASE_ENV);

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  output: {
    filename: "static/js/[name].js", // 每个输出的js文件名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,但webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配ts和tsx
        use: 'babel-loader'
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: [
        //       [
        //         "@babel/preset-env",
        //         {
        //           // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
        //           // "targets": {
        //           //  "chrome": 35,
        //           //  "ie": 9
        //           // },
        //           "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
        //           "corejs": 3, // 配置使用core-js低版本
        //         },
        //       ],
        //       "@babel/preset-react",
        //       "@babel/preset-typescript",
        //     ],
        //   },
        // },
      },
      {
        test: /.(css|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true, // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
