/**
 * npm -v
 * npm version
 * npm search xxx （在npm库中搜索相关的包）
 * npm install / i xxx 
 * npm remove / r xxx 
 * npm install / i xxx --save 安装包并添加到依赖中 *** ( 现在版本好像不用加 --save 就可以添加到依赖中)
 * npm install (安装依赖中的包，一般使用在刚下载的node项目中，使用该命令安装依赖包)
 * npm install xxx -g 全局安装包 （全局安装一般都是工具，编译文件等，项目包不安装在全局）
 * 
 * 通过npm下载包会放到 node_modules 文件夹中，通过包名引入即可
 *  如果在所在 node_modules 里没有找到，就去上级目录找，没有，再去上级找，直到找到磁盘根目录，就不找了
 */

var math = require("math")

// console.log(math);

console.log(math.add(123,456));