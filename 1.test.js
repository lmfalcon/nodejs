// ctrl+J可以在vscode里快速打开，Windows中可以ctrl+L选中地址栏，输入cmd快速转到当前目录。
console.log("hello test nodejs")
// Node.js中不能使用BOM和DOM的API
// BOM 
// console.log(window)
// console.log(history)
// console.log(navigator)
// console.log(location)
// DOM
// console.log(document)
// AJAX
// let xhr = new XMLHttpRequest()
// 定时器可用
setTimeout(() => {
    console.log("hello")
}, 1000);

// global 顶级对象
// console.log(global)
// ES2020开始用于指向顶级对象
console.log(globalThis === global)
