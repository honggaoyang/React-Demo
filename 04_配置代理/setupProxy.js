const proxy = require("http-proxy-middleware")
module.exports = function (app) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    app.use( 
        proxy('/api1', {// 遇见/api1前缀的请求， 就会触发该代理配置
            target: 'http://poetry.apiopen.top',//请求转发给谁
            changeOrigin: true,//控制服务器收到的响应头中Host字段值（默认false）
            pathRewrite: { '^api1': '' },// 重写请求路径
        }),
        proxy('/api2', {// 遇见/api1前缀的请求， 就会触发该代理配置
            target: 'http://poetry.apiopen.top',//请求转发给谁
            changeOrigin: true,//控制服务器收到的响应头中Host字段值（默认false）
            pathRewrite: { '^api2': '' },// 重写请求路径
        })
    )
}