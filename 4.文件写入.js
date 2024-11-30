// 需求写一个文件，座右铭.txt , 写入内容，三人行必有我师
//1.导入fs模块
const fs = require("fs")

// 2.写入文件
fs.writeFile("./座右铭.txt","三人行必有我师!!",{flag:'a'},err =>{
    // err 写入失败：错误对象 写入成功 ：null
    if(err){
        console.log("写入失败")
        return
    }
    console.log("写入成功")
})
// 因为是writefile是异步写入，所以，下一语句会先执行所以先显示2再显示写入成功。因为writeFile写入内容会替换原有文档中的所有内容，所以这样的写入方式相当于替换，后续需要查看具体的写入方法方便实现IO
console.log(1+1)

//同步写入
fs.writeFileSync("./data.txt","test",err1 =>{
    if(err1){
        console.log("写入失败")
        return
    }
    console.log("success")
})
console.log(1+2)

fs.appendFileSync('./座右铭','\r\n温故而知新可以为师矣',back1 =>{
    if(back1){
      console.log("写入失败")
      return
    }
    console.log("写入成功")
  })