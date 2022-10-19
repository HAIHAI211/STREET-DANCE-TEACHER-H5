# 环境变量按作用来分分两种

## 区分是开发模式还是打包构建模式
process.env.NODE_ENV

process.env.NODE_ENV环境变量webpack会自动根据设置的mode字段来给业务代码注入对应的development和prodction,在package.json中再次设置环境变量NODE_ENV是为了在webpack和babel的配置文件中访问到。

## 区分项目业务环境,开发/测试/预测/正式环境
自定义 process.env.BASE_ENV