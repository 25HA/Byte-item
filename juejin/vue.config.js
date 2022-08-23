const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: { //配置跨域
      '/api': {
        target: 'http://101.34.32.104:9090/WebTest', //填写请求的目标地址
        // ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '' //请求的时候使用这个api就可以
        }
      }
    }
  }
})
