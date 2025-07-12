
var rt = undefined;
!function (n) {
    n.name = "alex";
}(rt || (rt = {}));
console.log(rt)



// !function (n) {
// }(window)




// 有值是 True, 没值是False
var a;
console.log(a || (a = 3)); // 如果a有值。就返回a，如果a没值，就运行a=3
console.log(a)


