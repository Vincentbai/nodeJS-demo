/**
 * 在node中有一个全局对象 global，作用和网页中window 类型
 * 
 * 在模块中代码当运行在一个函数中时，node给这个函数传入了五个实参
 * exports: 对象，该对象将模块中的变量或者函数暴露到外部
 * require：函数，引入外部的模块
 * module：代表的是模块的本身，exports就是module的属性
 * __filename
 * __dirname
 * 
 * 
 */

// 局部变量
var a = 10;

// 全局变量，不推荐使用
b = 20;

console.log(global.a);
console.log(global.b);

// 如果能输出arguments就能证明该代码运行在一个函数中
// 在全局里不可能有arguments
console.log(arguments);

console.log(arguments.length);

// function (exports, require, module, __filename, __dirname) {}
console.log(arguments.callee + "");

// 为了证明 module就是该模块本身
console.log(exports == module.exports);

// 两种暴露是一样的效果
module.exports.a = "hello node"

exports.b = "hello exports"

// __filename 当前模块的完整路径
console.log(__filename);

// __dirname 当前模块所在的完整目录
console.log(__dirname)