const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const host = {
  dev: "http://192.168.10.21:31000",
  qa: "http://192.168.10.61:31000",
  pre: "http://192.168.10.201:31000",
  prod: "https://msapi.ailecheng.com",
};
module.exports = (env, argv) => {
  const devMode = process.env.NODE_ENV !== "prod";
  return {
    mode: "none",
    entry: ["@babel/polyfill", path.join(__dirname, "./src/app.js")],
    output: {
      filename: !devMode
        ? "[name]_bundle_[chunkhash:8].js"
        : "./[name]_bundle_[hash:8].js",
    },
    optimization: {
      minimize: false,
    },
    devtool: "source-map",
    devServer: {
      historyApiFallback: true,
      hot: true,
      contentBase: path.resolve(__dirname, "dist"),
      port: 3001, //端口号
      proxy: {
        "/api": {
          target: host[process.env.NODE_ENV],
          changeOrigin: true, // target是域名的话，需要这个参数，
          pathRewrite: { "^/api": "" },
        },
      },
    },
    performance: {
      hints: "warning", // 枚举
      maxAssetSize: 30000000, // 整数类型（以字节为单位）
      maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
      assetFilter: function (assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
      },
    },
    resolve: {
      // 设置别名
      alias: {
        "@": resolve("src"),
      },
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          include: /node_modules/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            {
              loader: "less-loader",
              options: {
                modifyVars: {
                  "@brand-primary": "#FFC000",
                  "@border-color-base": "#E6E6E6",
                },
                modules: true,
                javascriptEnabled: true,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: "[name]_[local]-[hash:base64:5]",
                },
              },
            },
            "postcss-loader",
            {
              loader: "less-loader",
              options: {
                modifyVars: {
                  "@brand-primary": "#FFC000",
                  "@border-color-base": "#E6E6E6",
                },
                modules: true,
                sourceMap: devMode,
                javascriptEnabled: true,
              },
            },
          ],
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 100,
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: "./public", to: __dirname + "/dist" }],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:7].css",
        chunkFilename: "[id].[contenthash:7].css",
      }),
    ],
  };
};
