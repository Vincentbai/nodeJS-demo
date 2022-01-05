/**
 * 同步文件写入
 * 
 * 通过node写入和手动写入文件的步骤是一样的
 *  - 打开文件
 *  - 向文件中写入内容
 *  - 保存并关闭文件
 */
var fs = require("fs")

console.log(fs);

// fd 是 openSync 返回的文件id，w 代表的是写入权限
var fd = fs.openSync("hello.txt", "w")

fs.writeSync(fd, "今天的天气真不错！")

fs.closeSync(fd)

console.log("程序向下执行！");

