var path = require('path');

module.exports = {
    mode:'development', //开发环境
    // mode: 'production',//生产环境
    entry: './src/index.js', //入口文件
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'yeyongjie.js',
        // filename: 'yeyongjie.min.js', //生产环境压缩包
        library: 'xiaoYe', //向外暴露的对象名称
        libraryTarget: 'umd' //针对es / cms 模块化通用
    }
}