// 引入其他的模块

/**
 * 在commonJS 中 通过require()函数引入外部模块
 *  如果使用相对路径来引入模块, 必须要使用 . 或者 .. 开头
 * 
 * 使用require()引入模块以后,该函数会返回一个对象,这个对象代表引入的模块
 * 
 * 模块的分类：
 *  核心模块
 *  文件模块，文件的标识是文件的路径（绝对路径和相对路径）
 * 
 */

var md = require("./1-module");
var math = require("./3-math")
var fs = require("fs")

console.log(md);

console.log(math.add(1,34));

console.log(fs);
