/**
 * 简单文件写入
 *  fs.writeFile(file,data[,options], callback)
 *  fs.writeFileSync(file,data[,options])
 * 
 *      options 一般都是个对象
 *          encoding 默认 uft-8
 *          mode 默认 
 *          flag 默认 w 查看docs里面的 打开状态
 * 
 */

var fs = require("fs")

fs.writeFile("hello3.txt", "这个通过writeFile写入的内容", function(err){

    if(!err){
        console.log("写入成功！");
    } 

})