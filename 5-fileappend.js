const fs = require("fs")
//具体写法参见5.文件追加写入语法完全正确，但是却死活无法执行，这个文件很奇怪。
fs.appendFile('./座右铭.txt','千金散去还复来',err =>{
    if(err){
        console.log("失败啦")
        return
    }
    console.log("success")
})