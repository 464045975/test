//  webpack enter.js bundle.js --module-bind 'css=style-loader!css-loader'
require("./style.css");
//  webpack entry.js bundle.js
document.write(require('./module.js')); // 添加模块
document.write("it works");

//  webpack --progress --colors
//  可以通过参数让编译的输出内容带有进度和颜色。

/*  
    开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，
    所以监听模式的整体速度是很快的。
*/ 
//  webpack --progress --colors --watch

/*
  使用 webpack-dev-server 开发服务是一个更好的选择。它将在 localhost:8080 
  启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack，
  在浏览器打开 http://localhost:8080/ 或 http://localhost:8080/webpack-dev-server/ 
  可以浏览项目中的页面和编译后的资源输出，并且通过一个 socket.io 服务实时监听它们的变化并自动刷新页面。
*/

//  安装：npm install webpack-dev-server -g
//  运行：webpack-dev-server --progress --colors

/*
   webpack 如果出问题，会打印一些简单的错误信息，比如模块没有找到。
   我们还可以通过参数 --display-error-details 来打印错误详情。
   webpack --display-error-details
*/

/*
   Webpack 的配置提供了 resolve 和 resolveLoader 参数来设置模块解析的处理细节，
   resolve 用来配置应用层的模块（要被打包的模块）解析，resolveLoader 用来配置 loader 模块的解析。
   Webpack 中涉及路径配置最好使用绝对路径，建议通过 
   path.resolve(__dirname, "app/folder") 或 path.join(__dirname, "app", "folder")的方式来配置，以兼容 Windows 环境。
   
*/
