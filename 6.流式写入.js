/* 
观书有感.txt
*/
// 1.导入fs
const fs = require("fs")
// 2.创建写入流对象
const ws = fs.createWriteStream('./观书有感.txt')
// 3.write
ws.write("半亩饭堂\n")
ws.write("半亩饭堂开\n")
ws.write("哈哈哈\n")
//4.关闭通道
ws.close

//这个流式写入适合写入频繁的场景，脚本完成后ws.close如果不加其实也会关闭。