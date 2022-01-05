var fs = require("fs")

/**
 * 验证路径是否存在
 *  fs.existsSync(path)
 */

var isExists = fs.existsSync("a.mp3")
console.log(isExists);

/**
 * 获取文件信息
 *  fs.stat(path, callback)
 *  fs.stat(path)
 */

fs.stat("copiedFile.png", function(err, stat){
    console.log(stat);
    // 获取文件大小
    console.log(stat.size);

    console.log(stat.isFile());

    console.log(stat.isDirectory());
})

/**
 * 删除文件
 *  fs.unlink(path, callback)
 *  fs.unlinkSync(path)
 */

/**
 * 读取一个目录结构
 *  fs.readdir(path[, options], callback)
 *  fs.readdir(path[, options])
 *  
 */

fs.readdir(".", function(err, files){
    if(!err){
        console.log(files);
    }
})

/**
 * 截断文件
 *  fs.truncate(path, len, callback)
 *  fs.truncateSync(path, len)
 */

// 截取前10字节
fs.truncateSync("hello2.txt", 10)

/**
 * 创建目录
 *  fs.mkdir(path[, options], callback)
 *  fs.mkdirSync(path[, options])
 * 
 * 删除目录
 *  fs.rmdir(path[, options], callback)
 *  fs.rmdirSync(path[, options])
 */

// fs.mkdirSync("Hello")
// fs.rmdirSync("Hello")

/**
 * 对文件进行重命名或者剪切
 *  fs.rename(oldpath, newpath, callback)
 *  fs.renameSync(oldpath, newpath)
 */

// fs.renameSync("hello.txt", "hellorn.txt")

/**
 * 监视文件的修改
 *  fs.watchFile(filename[, options], listener)
 */

// curr, prev 两个都是 stat 对象
fs.watchFile("hello2.txt",{interval:1000}, function(curr, prev){
    console.log("修改前： " + prev.size);
    console.log("修改后： " + curr.size);
})

