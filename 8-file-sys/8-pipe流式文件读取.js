/**
 * 流式文件读取适合大文件，可以分多次将文件读取到内存中
 */

var fs = require("fs")

var rs = fs.createReadStream("../docs/openState.png")

var ws = fs.createWriteStream("copiedFile8.png")

// 监听流的开启和关闭
rs.once("open", function (){
    console.log("可读流打开了！");
})

rs.once("close", function(){
    
    console.log("可读流关闭了！");

})

ws.once("open", function (){
    console.log("可写流打开了！");
})

ws.once("close", function(){
    console.log("可写流关闭了！");
})

// pip() 可以将可读流中的文件，直接输出到可写流中, 读取写入后流自动关闭， 服务器接收请求和发送结果都是通过流来操作
rs.pipe(ws)