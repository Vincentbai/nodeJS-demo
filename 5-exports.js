/**
 * exports 和 module.exports 的区别 / 就是变量的堆栈问题 / 基本数据类型和引用数据类型
 *  1. exports 只能通过 . 的形式来向外暴露内部的变脸 exports.xxx = xxx
 *  2. module.exports 既可以同通过 . 的形式，也可以通过直接赋值的形式来暴露
 *         module.exports.xxx = xxx
 *         module.exports = {
 *              xxx: xxx,
 *              yyy: yyy,
 *         }
 * 
 * 
 * 原本 exports = module.exports, 如果通过直接复制到形式，exports就不直接指向 module.exports了，而是指向这个新对象
 * 如果给 exports 直接赋值，module.exports 相当于没有做任何的操作，还是空对象
 */

var a = 10
var b = a
a++

// 基本数据类型是独立，当运行到 b=a时，b在栈中的值是10，从a的值复制了一份，所以独立的
console.log("a = " + a); // 11
console.log("b = " + b); // 10


var obj = new Object();
obj.name = "Vincent"
var obj2 = obj
obj2.name = "Jesse"

console.log("obj = " + obj.name);
console.log("obj2 = " + obj2.name);

// 原本 exports = module.exports, 如果通过直接复制到形式，exports就不直接指向 module.exports了，而是指向这个新对象
// 如果给 exports 直接赋值，module.exports 相当于没有做任何的操作，还是空对象
exports = {
    name: "Vincent",
    age: 10,
}

// module.exports = {
//     name:"Jesse",
//     age : 20, 
// }
