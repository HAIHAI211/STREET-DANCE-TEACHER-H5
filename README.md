# 环境变量按作用来分分两种

## 区分是开发模式还是打包构建模式
process.env.NODE_ENV

process.env.NODE_ENV环境变量webpack会自动根据设置的mode字段来给业务代码注入对应的development和prodction,在package.json中再次设置环境变量NODE_ENV是为了在webpack和babel的配置文件中访问到。

## 区分项目业务环境,开发/测试/预测/正式环境
自定义 process.env.BASE_ENV

# 添加measure-speed插件来分析构建的每个步骤的耗时，从而针对性优化

# webpack5除了内置了不少插件，还对持久化缓存、缓存算法做了优化
在webpack5之前做缓存是使用babel-loader缓存解决js的解析结果,cache-loader缓存css等资源的解析结果,还有模块缓存插件hard-source-webpack-plugin,配置好缓存后第二次打包,通过对文件做哈希对比来验证文件前后是否一致,如果一致则采用上一次的缓存,可以极大地节省时间。

webpack5 较于 webpack4,新增了持久化缓存、改进缓存算法等优化,通过配置 webpack 持久化缓存,来缓存生成的 webpack 模块和 chunk,改善下一次打包的构建速度,可提速 90% 左右,配置也简单，修改webpack.base.js