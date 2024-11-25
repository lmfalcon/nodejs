// buffer 与字符串的转换
let buf_4 = Buffer.from([100,101,103,104,105,106,107,108,109,164])
console.log(buf_4.toString()); //utf-8
let buf = Buffer.from("hello")
// [] 通过中括号形式对元素进行读取和写入
console.log(buf[0].toString(2)); //这里的toString是进行进制转换，查看
buf[0] = "B"  //因为是二进制保存输入字符串没用
console.log(buf[0])
console.log(buf.toString())

buf[0] = 98 //因为是二进制保存输入字符串没用
console.log(buf[0])
console.log(buf.toString())

//溢出
let buf_1 = Buffer.from("666")
buf_1[0] =361 //八个二进制位存储最高是255，所以会舍弃高位的数字 361转换为二进制为 0001 0110 1001 => 0110 1001
console.log(buf_1);

//中文
let buf_2 = Buffer.from("你好") //utf-8的中文占三个字节
console.log(buf_2)
