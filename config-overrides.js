//配置具体的修改规则
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: "css",
    }),
    // addLessLoader({
    //     lessOptions: {
    //         javascriptEnabled: true,
    //         modifyVars: { '@primary-color': 'blue' }
    //     },
    // }),

    //使用less-loader对源码重的less的变量进行设置antd自定义主题
    // addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: {
    //         "@brand-primary": '#64BFBB'
    //     }
    // }),
);