// buffer是一个类似于数组的对象，用于表示固定长度的字节序列
// buffer的本质是一段内存空间，专门用来处理二进制数据
// buffer大小固定且无法调整
// buffer性能较好可以直接对计算机内存进行操作
// 每个元素的大小为1字节byte
// buffer的创建 Bufferyiding

// 1.alloc
let buf = Buffer.alloc(10)
console.log(buf);

// 2.allocunsafe 创建速度快，但是会存在旧程序的数据，没有归零。所有内存空间，这个在申请的内存空间较大时容易看到。
let buf_2 = Buffer.allocUnsafe(10)
console.log(buf_2);

// 3. from 可以把其他数据转换为2进制数（终端显示为16进制数）导入buffer中
let buf_3 = Buffer.from("hello")
let buf_4 = Buffer.from([230,12,231,4324,5435,546,56765,232,11,5435])
console.log(buf_3)
console.log(buf_4)
