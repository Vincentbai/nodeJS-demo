/**
 * 模块化
 *  - 在node中, 一个js文件就是一个模块
 *  - 在node中, 每一个js文件中的代码都是运行在一个函数中,而不是全局作用域,所以一个模块中的变量和函数在其他模块中无法访问
 *    可以通过exports 来向外部暴露变量和方法，只需要将要暴露的变量和方法设置成exports的属性即可
 */

console.log("I am a module!");

var x = 10;
var y = 20;

exports.x = x

exports.msg = "I'm a message from module 1"

exports.fn = ()=>{

}