// //1.引入fs模块
// const fs = require("fs")

// //2.调用appendFile 不知道为什么执行不了。
// fs.appendFile("座右铭.txt","择其善者而从之，其不善者而改之",(err) =>{
//     if(err){
//         console.log("追加写入失败")
//         //return停止程序运行
//         return
//     }
//     console.log("追加写入成功")
// })

// import { appendFile } from 'node:fs';

// appendFile('./message.txt', 'data to append', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
//这个删除了也执行不了
// import { appendFile } from 'node:fs';

// appendFile('./message', 'data to append');

//上面不管使用官方文档还是老师的教程都没有报错，但是都没有实现对应的功能。不知道哪里出问题了，但是其他文件的writeFile可以正常运行。
//const fs = require('fs')
//同样不能执行，但是也不会报错，换行使用\r\n执行
//奇怪的是切换后4.文件写入.js执行后，同时删除掉报错的描述，不是txt文件却能执行了，生成了一个不是txt的文本文件写入了这句话，而且一次生成很多句。
fs.appendFile('./座右铭.txt','\r\n温故而知新可以为师矣', err =>{
  if(err){
    console.log("success")
    return
  }
  console.log("失败")
})
console.log("测试")
// fs.writeFile('./座右铭.txt','love love love',{flag: "a"},err =>{
//   if(err){
//     console.log("写入失败~")
//     return
//   }
//   console.log("写入成功")
// })
//应该是这个文件有问题，就这样吧再新建一个文件看看。