/**
 * 流式文件写入
 *  之前的简单写入，需要一次性的将文件内容写入到文件中，对内存不是很友好，性能差，容易内存溢出
 *  所以需要stream，通过管子来进行写入和读取，管子中通过buffer来部分读取和写入文件
 *  
 * 
 */

var fs = require("fs")

/**
 * 创建一个可写流
 * fs.createWriteStream(path[, options])
 */

var ws = fs.createWriteStream("hello3.txt");

// 通过监听流的open和close事件监听流的打开和关闭
// ws.on("open", function(){
//     console.log("流打开了");
// })

// 监听一次open事件，发生一次后监听关闭
ws.once("open", function(){
    console.log("流打开了！");
})

ws.once("close", function(){
    console.log("流关闭了！");
})


// 通过流向文件中输出内容
ws.write("通过写入流写入文件的内容")
ws.write("哈哈哈哈")
ws.write("啦啦啦啦")

// 关闭流
ws.close()
// ws.end()

