/**
 * 流式文件读取适合大文件，可以分多次将文件读取到内存中
 */

var fs = require("fs")

var rs = fs.createReadStream("../docs/openState.png")

var ws = fs.createWriteStream("7-copy.png")

// 监听流的开启和关闭
rs.once("open", function (){
    console.log("可读流打开了！");
})

rs.once("close", function(){
    
    console.log("可读流关闭了！");

    ws.end()

})

ws.once("open", function (){
    console.log("可写流打开了！");
})

ws.once("close", function(){
    console.log("可写流关闭了！");
})

// 如果要读取一个可读流中的数据，必须要绑定一个data事件，data事件绑定完毕，会自动开始读取数据
rs.on("data", function(data){

    console.log(data);
    console.log(data.length);

    // 读取到的数据写入到可写流中
    ws.write(data)

    // 在可读流自动关闭的监听事件中关闭可写流

})