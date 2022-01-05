/**
 * 异步文件写入
 */

var fs = require("fs")

 fs.open("hello2.txt", "w", function(err, fd){

    if(!err){
        
        console.log("打开文件！ fd: " + fd);

        fs.write(fd, "这是异步写入的内容！！", function(err){
            if(!err){
                console.log("写入成功！");
            }

            fs.close(fd, function(err){
                if(!err){
                    console.log("文件已关闭！");
                }
            })
        })

    }else{
        console.log(err);
    }
})

console.log("程序向下执行！");
