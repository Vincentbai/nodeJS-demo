/**
 * buffer 缓冲区
 *      - buffer 的结构和数组很像，操作的方法和数组类似
 *      - 数组中不能存储二级制的数据，而buffer就是专门用来存储二进制数据的，显示时使用16进制
 * 
 */

var str = "hello buffer!"

var buf = Buffer.from(str)

console.log(buf.length); // 13 buf.length 表示的是内存地址
console.log(str.length); // 13 str.length 标识的是字符串的长度，当有中文的时候就一样

var cstr = "hello 你好"

var cbuf = Buffer.from(cstr)

console.log(cbuf.length); // 12 一个中文占用3个byte
console.log(cstr.length); // 8


var buf2 = new Buffer.alloc(10) // 创建一个10字节的buffer

console.log(buf2.length);

console.log(buf2);

buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[3] = 556 // 最大只能保存8位，取的是后八位 556： 1000101100

console.log(buf2);

// 在控制台输出都是10进制，不会显示 0xaa
console.log(buf2[2]);

console.log(buf2[2].toString(16)); // 显示16进制