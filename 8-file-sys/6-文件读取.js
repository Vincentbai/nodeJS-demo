/**
 * 1. 同步文件读取
 * 2. 异步问价读取
 * 3. 简单文件读取
 *      fs.readFile(path[, options], callback)
 *      fs.readFileSync(path[, options])
 * 4. 流式文件读取
 * 
 */

var fs = require("fs")

// 可以读取任何文件格式的文件
fs.readFile("../docs/openState.png", function(err, data){

    if(!err){
        fs.writeFile("copyImage.png", data, function(err){
            if(!err){
                console.log("文件复制成功！！！");
            }
        })
    }
    
})


