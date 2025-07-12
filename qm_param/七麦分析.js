// 25-0607

var window = global; // node的全局 -> 浏览器里面的window;

function o(n) {
    // t = "",
    // ['66', '72', '6f', '6d', '43', '68', '61', '72', '43', '6f', '64', '65']["forEach"](function(n) {
    //     t += window["unescape"]("%u00" + n)
    // });
    // // 上面代码运行完，t里面是fromCharCode
    // var t, e = t;
    return String["fromCharCode"](n)
}


function cv(t) {
    t = window["encodeURIComponent"](t)["replace"](/%([0-9A-F]{2})/g, function (n, t) {
        return o("0x" + t)  // 把百分号换成0x
    });
    try {
        // base64, 浏览器自带的btoa功能
        return btoa(t)
    } catch (n) {
        // base64，nodejs的base64
        var x = this;
        return x["Buffer"]["from"](t)["toString"]("base64")
    }
}

function oZ(n, t) {
    // t = t || u();
    for (var e = (n = n["split"](""))["length"], r = t["length"], a = "charCodeAt", i = 0; i < e; i++)
        n[i] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
    return n["join"]("")
}


// 规定：
// {url:"完整的url", }
//
function get_mm(url, params) {
    // 加一点自己的代码，处理成它需要的那个样子
    // var url = t['url'];
    // 分离出 baseurl, url
    // 借助URL的功能，
    var t = {};
    var u = new URL(url);
    t['baseURL'] = u['origin']; // t里面就有的baseURL了
    t['url'] = url
    t['params'] = params

    // var n, s;
    // var f = false;
    // a||b: 如果a是真, 或者有值, 那么b就不运行...
    // +new R[K]：拿时间戳   1749308017970 这样的
    // s("synct") = '1749313061.558'    synct=1749313061.558
    // synct, syncd 不知道怎么来？
    // f || $ != s || (n = i["ej"]("synct"), s = c["default"]["prototype"]["difftime"] = -i["ej"]("syncd") || +new Date().getTime() - 1000 * n);
    // f || null != s || (n = 1749313061.558, s = 2142 || +new Date().getTime() - 1000 * n);
    var s = 2142;


    var e, r = +new Date() - (s || 0) - 1661224081041, a = [];


    // void 0 === t["params"] && (t["params"] = {})
    if (void 0 === t["params"]) {
        t["params"] = {}
    }


    // Object.keys({name:"011", age:18}).forEach(function(n){console.log(n);})
    // 输出：name age
    return Object["keys"](t["params"])["forEach"](function (n) {
        if (n == "analysis")
            return false;
        t["params"]["hasOwnProperty"](n) && a["push"](t["params"][n])
    }), // 把params里面所有的值，组装到a列表

        a = a["sort"]()["join"](""), // 排序，拼接  结果就是一个字符串，装着所有的数据  如：a = "22025-06-0836allcniphone"

        a = cv(a),  // 计算了一个base64    a = "MjIwMjUtMDYtMDgzNmFsbGNuaXBob25l"

        //  a = "MjIwMjUtMDYtMDgzNmFsbGNuaXBob25l@#/xxxx/xxxx@#时间@#3"
        //  a = "MjIwMjUtMDYtMDgzNmFsbGNuaXBob25l@#/rank/indexPlus/brand_id/1@#88093349056@#3"
        a = (a += "@#" + t["url"]["replace"](t["baseURL"], "")) + ("@#" + r) + ("@#" + 3),

        // e = "ew8vECUSLA54dW4XKSVeTCsLIRsaPjRAUG8hCwMLAwkmREcKGBReHl4NAARBZgkTFEcaCxtbVWgKAE4JdkZeX1hBTUIFAwRSViEaBQ=="
        e = cv(oZ(a, "xyz517cda96efgh")),
        // return e;

    -1 == t["url"]["indexOf"]("analysis") && (t["url"] += (-1 != t["url"]["indexOf"]("?") ? "&" : "?") + "analysis" + "=" + window["encodeURIComponent"](e)),
        t.url


}

console.log(get_mm("https://api.qimai.cn/rank/indexPlus/brand_id/2", {
    "brand": "all",
    "country": "cn",
    "device": "iphone",
    "genre": "36",
    "date": "2025-06-08",
    "page": 2
}));

// console.log(get_mm({
//     "url": "https://api.qimai.cn/rank/indexPlus/brand_id/2", params: {
//         "brand": "all",
//         "country": "cn",
//         "device": "iphone",
//         "genre": "36",
//         "date": "2025-06-08",
//         "page": 2
//     }
// }));


function v(n, t) {
    // t = t || u();
    for (var e = (n = n["split"](""))["length"], r = t["length"], a = "charCodeAt", i = 0; i < e; i++)
        n[i] = o(n[i][a](0) ^ t[i % r][a](0));
    return n["join"]("")

}




function get_qm_check() {
    var n = {
        "gpu": "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "check": "0,0,0,0,0"
    }

    return cv(v(JSON.stringify(n), "xyz57209048efgh"))

}

console.log(get_qm_check());








