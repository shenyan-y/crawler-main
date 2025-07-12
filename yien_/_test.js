
// 1.
// 1 == (e = "{" == e[0] ? JSON.parse(e) : JSON.parse(webInstace.shell(e))).Status || 200 == e.Code ? r(e.Data) : 200 == e.code ? r(e.data) : a(e.Msg)
// 1 == (
//   e = "{" == e[0]
//     ? JSON.parse(e)
//     : JSON.parse(webInstace.shell(e))
// ).Status
// || 200 == e.Code
//   ? r(e.Data)
//   : 200 == e.code
//     ? r(e.data)
//     : a(e.Msg)


// 2.
let str = '{"name": "YF", "age": 24}';  // 字符串
let obj = JSON.parse(str);             // 变成 JS 对象
console.log(obj.name);  // 输出 "YF"
console.log(obj.age);   // 输出 24


// 3.
// window['location']['href'] 与 window.location.href 一样




// 4.
function Person() {
    this.eat = function () {
    }
}
var p = new Person();
p.eat()





// // 5.
// "abcdefg".substr(3)  -> 'defg'
// "abcdefg".substr(2,3)  -> 'cde'






















