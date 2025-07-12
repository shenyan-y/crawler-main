const {RSAKey} = require("node-jsencrypt");
const CryptoJS = require("crypto-js");
window = global;


function $_CCC_() {
    var now = new Date().getTime();
    return {
        "v": "7.9.3",
        "$_BIT": false,
        "me": true,
        "tm": {
            "a": now - 864,
            "b": now - 864 + 53,
            "c": now - 864 + 53,
            "d": 0,
            "e": 0,
            "f": now - 864 + 53 - 52,
            "g": now - 864 + 53 - 52,
            "h": now - 864 + 53 - 52,
            "i": now - 864 + 53 - 52,
            "j": now - 864 + 53 - 52,
            "k": 0,
            "l": now - 864 + 53 - 52 + 7,  // now - 864 + 53 - 52 + 7
            "m": now - 864 + 53 - 52 + 7 + 42, // now - 864 + 53 - 52 + 7 + 42
            "n": now - 864 + 53 - 52 + 7 + 42 + 1, // now - 864 + 53 - 52 + 7 + 42 + 1
            "o": now - 864 + 53 - 52 + 7 + 42 + 1 + 6,// now - 864 + 53 - 52 + 7 + 42 + 1 + 6
            "p": now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284,// now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284
            "q": now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284,// now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284
            "r": now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2,// now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2
            "s": now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2 + 417, // now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2 + 417
            "t": now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2 + 417 + 1,// now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2 + 417 + 1
            "u": now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2 + 417 + 1// now - 864 + 53 - 52 + 7 + 42 + 1 + 6 + 284 + 2 + 417 + 1
        },
        "td": -1
    }
}

function H(t, e) {

    for (var n = e['slice'](-2), r = [], i = 0; i < n['length']; i++) {
        var o = n['charCodeAt'](i);
        r[i] = 57 < o ? o - 87 : o - 48;
    }
    n = 36 * r[0] + r[1];
    var s, a = Math['round'](t) + n, _ = [[], [], [], [], []], c = {}, u = 0;
    i = 0;
    for (var l = (e = e['slice'](0, -2))['length']; i < l; i++)
        c[s = e['charAt'](i)] || (c[s] = 1,
            _[u]['push'](s),
            u = 5 == ++u ? 0 : u);
    var h, f = a, d = 4, p = '', g = [1, 2, 5, 10, 50];
    while (0 < f)
        0 <= f - g[d] ? (h = parseInt(Math['random']() * _[d]['length'], 10),
            p += _[d][h],
            f -= g[d]) : (_['splice'](d, 1),
            g['splice'](d, 1),
            d -= 1);
    return p;

}


function X(t) {

    function _(t, e) {
        return t << e | t >>> 32 - e;
    }

    function c(t, e) {
        var n, r, i, o, s;
        return i = 2147483648 & t,
            o = 2147483648 & e,
            s = (1073741823 & t) + (1073741823 & e),
            (n = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ s ^ i ^ o : n | r ? 1073741824 & s ? 3221225472 ^ s ^ i ^ o : 1073741824 ^ s ^ i ^ o : s ^ i ^ o;
    }

    function e(t, e, n, r, i, o, s) {
        return c(_(t = c(t, c(c(function a(t, e, n) {
            return t & e | ~t & n;
        }(e, n, r), i), s)), o), e);
    }

    function n(t, e, n, r, i, o, s) {
        return c(_(t = c(t, c(c(function a(t, e, n) {
            return t & n | e & ~n;
        }(e, n, r), i), s)), o), e);
    }

    function r(t, e, n, r, i, o, s) {
        return c(_(t = c(t, c(c(function a(t, e, n) {
            return t ^ e ^ n;
        }(e, n, r), i), s)), o), e);
    }

    function i(t, e, n, r, i, o, s) {
        return c(_(t = c(t, c(c(function a(t, e, n) {
            return e ^ (t | ~n);
        }(e, n, r), i), s)), o), e);
    }

    function o(t) {
        var e, n = '', r = '';
        for (e = 0; e <= 3; e++)
            n += (r = '0' + (t >>> 8 * e & 255)['toString'](16))['substr'](r['length'] - 2, 2);
        return n;
    }

    var s, a, u, l, h, f, d, p, g, v;
    for (s = function m(t) {
        var e, n = t['length'], r = n + 8, i = 16 * (1 + (r - r % 64) / 64), o = Array(i - 1), s = 0,
            a = 0;
        while (a < n)
            s = a % 4 * 8,
                o[e = (a - a % 4) / 4] = o[e] | t['charCodeAt'](a) << s,
                a++;
        return s = a % 4 * 8,
            o[e = (a - a % 4) / 4] = o[e] | 128 << s,
            o[i - 2] = n << 3,
            o[i - 1] = n >>> 29,
            o;
    }(t = function y(t) {
        t = t['replace'](/\r\n/g, '\n');
        for (var e = '', n = 0; n < t['length']; n++) {
            var r = t['charCodeAt'](n);
            r < 128 ? e += String['fromCharCode'](r) : (127 < r && r < 2048 ? e += String['fromCharCode'](r >> 6 | 192) : (e += String['fromCharCode'](r >> 12 | 224),
                e += String['fromCharCode'](r >> 6 & 63 | 128)),
                e += String['fromCharCode'](63 & r | 128));
        }
        return e;
    }(t)),
             d = 1732584193,
             p = 4023233417,
             g = 2562383102,
             v = 271733878,
             a = 0; a < s['length']; a += 16)
        p = i(p = i(p = i(p = i(p = r(p = r(p = r(p = r(p = n(p = n(p = n(p = n(p = e(p = e(p = e(p = e(l = p, g = e(h = g, v = e(f = v, d = e(u = d, p, g, v, s[a + 0], 7, 3614090360), p, g, s[a + 1], 12, 3905402710), d, p, s[a + 2], 17, 606105819), v, d, s[a + 3], 22, 3250441966), g = e(g, v = e(v, d = e(d, p, g, v, s[a + 4], 7, 4118548399), p, g, s[a + 5], 12, 1200080426), d, p, s[a + 6], 17, 2821735955), v, d, s[a + 7], 22, 4249261313), g = e(g, v = e(v, d = e(d, p, g, v, s[a + 8], 7, 1770035416), p, g, s[a + 9], 12, 2336552879), d, p, s[a + 10], 17, 4294925233), v, d, s[a + 11], 22, 2304563134), g = e(g, v = e(v, d = e(d, p, g, v, s[a + 12], 7, 1804603682), p, g, s[a + 13], 12, 4254626195), d, p, s[a + 14], 17, 2792965006), v, d, s[a + 15], 22, 1236535329), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 1], 5, 4129170786), p, g, s[a + 6], 9, 3225465664), d, p, s[a + 11], 14, 643717713), v, d, s[a + 0], 20, 3921069994), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 5], 5, 3593408605), p, g, s[a + 10], 9, 38016083), d, p, s[a + 15], 14, 3634488961), v, d, s[a + 4], 20, 3889429448), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 9], 5, 568446438), p, g, s[a + 14], 9, 3275163606), d, p, s[a + 3], 14, 4107603335), v, d, s[a + 8], 20, 1163531501), g = n(g, v = n(v, d = n(d, p, g, v, s[a + 13], 5, 2850285829), p, g, s[a + 2], 9, 4243563512), d, p, s[a + 7], 14, 1735328473), v, d, s[a + 12], 20, 2368359562), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 5], 4, 4294588738), p, g, s[a + 8], 11, 2272392833), d, p, s[a + 11], 16, 1839030562), v, d, s[a + 14], 23, 4259657740), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 1], 4, 2763975236), p, g, s[a + 4], 11, 1272893353), d, p, s[a + 7], 16, 4139469664), v, d, s[a + 10], 23, 3200236656), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 13], 4, 681279174), p, g, s[a + 0], 11, 3936430074), d, p, s[a + 3], 16, 3572445317), v, d, s[a + 6], 23, 76029189), g = r(g, v = r(v, d = r(d, p, g, v, s[a + 9], 4, 3654602809), p, g, s[a + 12], 11, 3873151461), d, p, s[a + 15], 16, 530742520), v, d, s[a + 2], 23, 3299628645), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 0], 6, 4096336452), p, g, s[a + 7], 10, 1126891415), d, p, s[a + 14], 15, 2878612391), v, d, s[a + 5], 21, 4237533241), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 12], 6, 1700485571), p, g, s[a + 3], 10, 2399980690), d, p, s[a + 10], 15, 4293915773), v, d, s[a + 1], 21, 2240044497), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 8], 6, 1873313359), p, g, s[a + 15], 10, 4264355552), d, p, s[a + 6], 15, 2734768916), v, d, s[a + 13], 21, 1309151649), g = i(g, v = i(v, d = i(d, p, g, v, s[a + 4], 6, 4149444226), p, g, s[a + 11], 10, 3174756917), d, p, s[a + 2], 15, 718787259), v, d, s[a + 9], 21, 3951481745),
            d = c(d, u),
            p = c(p, l),
            g = c(g, h),
            v = c(v, f);
    return (o(d) + o(p) + o(g) + o(v))['toLowerCase']();
}


function $_CCDh(e) {
    // var xxx = new JSEncrypt() // 第三方库给的rsa加密
    // xxx.setPublicKey(base64) // PEM
    // xxx.encrypt()
    // 知道它用的是rsa，并且，知道它用的是JSEncrypt  但是，JSEncrypt没有给两个数字的功能

    var rsa = new RSAKey(); // 如果受不了这个方案，可以选择使用python来完成该算法
    rsa.setPublic('00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81', '10001');

    var t = rsa['encrypt']($_CCHU(e)); // 对aeskey进行加密
    while (!t || 256 !== t['length'])
        t = rsa['encrypt']($_CCHU(!0));
    return t;
}

var quanju = {
    $_EIC: {
        "$_CAAq": 1749490467278,
        "protocol": "https://",
        // "gt": "019924a82c70bb123aae90d483087f94",
        // "challenge": "a429e3c15f76df55cb249390a977f96b",
        "offline": false,
        "new_captcha": true,
        "product": "popup",
        "width": "300px",
        "https": true,
        "api_server": "apiv6.geetest.com",
        "type": "fullpage",
        "static_servers": [
            "static.geetest.com/",
            "static.geevisit.com/"
        ],
        "beeline": "/static/js/beeline.1.0.1.js",
        "voice": "/static/js/voice.1.2.6.js",
        "click": "/static/js/click.3.1.2.js",
        "fullpage": "/static/js/fullpage.9.2.0-cf92nc.js",
        "slide": "/static/js/slide.7.9.3.js",
        "geetest": "/static/js/geetest.6.0.9.js",
        "aspect_radio": {
            "slide": 103,
            "click": 128,
            "voice": 128,
            "beeline": 50
        },
        "cc": 20,
        "supportWorker": true,
        "$_FFi": {
            "pt": 0
        }
    },
}

function $_CCHU(e) {
    return quanju['$_EIC']['aeskey'] && !e || (quanju['$_EIC']['aeskey'] = te()),
        quanju['$_EIC']['aeskey']; // 返回aeskey
}

function te() {
    return e() + e() + e() + e();
}

function e() {
    return (65536 * (1 + Math['random']()) | 0)['toString'](16)['substring'](1);
}


function encrypt1(e, t) {  // 猜测是aes加密， CryptoJS.
    // t = u['parse'](t),  // CryptoJS.enc.utf8.parse(t)
    // iv = u['parse']('0000000000000000');  // CryptoJS.enc.utf8.parse('0000000000000000')
    //
    // // n && n['iv'] || ((n = n || {})['iv'] = u['parse']('0000000000000000'));
    // var r = m['encrypt'](初始化的东西, 数据, key, iv);  // CryptoJS.AES.encrypt

    let key = CryptoJS.enc.Utf8.parse(t); // 16个字节
    let iv = CryptoJS.enc.Utf8.parse("0000000000000000");

    let text = '{"gt":"019924a82c70bb123aae90d483087f94","challenge":"553737eb8bf17224c879e24c48ae41ac","offline":false,"new_captcha":true,"product":"popup","width":"300px","https":true,"api_server":"apiv6.geetest.com","protocol":"https://","type":"fullpage","static_servers":["static.geetest.com/","static.geevisit.com/"],"beeline":"/static/js/beeline.1.0.1.js","voice":"/static/js/voice.1.2.6.js","click":"/static/js/click.3.1.2.js","fullpage":"/static/js/fullpage.9.2.0-cf92nc.js","slide":"/static/js/slide.7.9.3.js","geetest":"/static/js/geetest.6.0.9.js","aspect_radio":{"slide":103,"click":128,"voice":128,"beeline":50},"cc":20,"ww":true,"i":"-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1"}';

    let r = CryptoJS.AES.encrypt(e, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    // console.log("加密:", r);

    var o = r['ciphertext']['words'];
    var i = r['ciphertext']['sigBytes'];
    var s = [];
    var a = 0;
    for (; a < i; a++) {
        var _ = o[a >>> 2] >>> 24 - a % 4 * 8 & 255;
        s['push'](_);
    }
    return s;
}


function $_HEz(e) {
    var t = $_HCQ(e);
    return t['res'] + t['end'];
}

function $_HCQ(e, o) {
    var i = this;
    o || (o = i);
    for (var t = function (e, t) {
        for (var n = 0, r = 24 - 1; 0 <= r; r -= 1)
            1 === $_HBs(t, r) && (n = (n << 1) + $_HBs(e, r));
        return n;
    }, n = '', r = '', s = e['length'], a = 0; a < s; a += 3) {
        var _;
        if (a + 2 < s)
            _ = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2],
                n += $_GJl(t(_, 7274496)) + $_GJl(t(_, 9483264)) + $_GJl(t(_, 19220)) + $_GJl(t(_, 235));
        else {
            var c = s % 3;
            2 == c ? (_ = (e[a] << 16) + (e[a + 1] << 8),
                n += $_GJl(t(_, 7274496)) + $_GJl(t(_, 9483264)) + $_GJl(t(_, 19220)),
                r = '.') : 1 == c && (_ = e[a] << 16,
                n += $_GJl(t(_, 7274496)) + $_GJl(t(_, 9483264)),
                r = '.' + '.');
        }
    }
    return {
        "\u0072\u0065\u0073": n,
        "\u0065\u006e\u0064": r
    };
}

function $_HBs(e, t) {
    return e >> t & 1;
}

function $_GJl(e) {
    // var t = this['$_GAN'];
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";
    return e < 0 || e >= t['length'] ? '.' : t['charAt'](e);
}




// t: 横向拖动距离  e: 被加密后的轨迹  n: 滑动的时间
function cul_third_w(gt, challenge, s, c, x_juli, gui, hd_t) {
    console.log(gui)
    console.log(gt)
    var e = cul_l(gui, c, s)
    var i = {
        "gt": gt,
        "challenge": challenge,
    }
    // var r = this
    //     , i = r['$_CJQ']
    var o = {
        'lang': 'zh-cn',
        'userresponse': H(x_juli, i['challenge']),
        'passtime': hd_t,
        'imgload': 109,
        'aa': e,
        'ep': $_CCC_()
    };

    o['h9s9'] = "1816378497";  // 直接给了一个值... 经过测试之后，能发现，这个值毛用没有...

    o['rp'] = X(i['gt'] + i['challenge']['slice'](0, 32) + o['passtime']);


    var u = $_CCDh() // rsa
        , l = encrypt1(JSON['stringify'](o), $_CCHU()) // AES
        , h = $_HEz(l) // 处理成类似b64的东西
        , f = {
        'gt': i['gt'],
        'challenge': i['challenge'],
        'lang': 'zh-cn',
        '$_BCm': 0,
        'client_type': 'web',
        'w': h + u
    };
    return f

}





function ct(t) {
    this['$_BCAm'] = t || [];
}

// ct.prototype = {
//     '$_CAZ': function (t) {
//         var e = this['$_BCAm'];
//         if (e['map'])
//             return new ct(e['map'](t));
//         for (var n = [], r = 0, i = e['length']; r < i; r += 1)
//             n[r] = t(e[r], r, this);
//         return new ct(n);
//     }
// }
ct.prototype.$_CAZ = function (t) {
    var e = this['$_BCAm'];
    if (e['map'])
        return new ct(e['map'](t));
    for (var n = [], r = 0, i = e['length']; r < i; r += 1)
        n[r] = t(e[r], r, this);
    return new ct(n);

}


// let test = new ct([1, 2, 3]);
// let result = test.$_CAZ(x => x * 2);
// console.log(result);  // 应该是 new ct([2, 4, 6])


function $_BBEI(t, e, n) {
    if (!e || !n)
        return t;
    var r, i = 0, o = t, s = e[0], a = e[2], _ = e[4];
    while (r = n['substr'](i, 2)) {
        i += 2;
        var c = parseInt(r, 16)
            , u = String['fromCharCode'](c)
            , l = (s * c * c + a * c + _) % t['length'];
        o = o['substr'](0, l) + u + o['substr'](l);
    }
    return o;

}


// 加密两次后的轨迹
function cul_l(guiji, c, s) {

    // console.log("[DEBUG] 入参 gui =", guiji);
    // console.log("[DEBUG] 类型 =", typeof guiji);
    // console.log("[DEBUG] 是否数组 =", Array.isArray(guiji));


    // l = n[$_CJJJE(986)][$_DAAAF(1024)](n[$_DAAAF(986)][$_DAAAF(1060)](), n[$_CJJJE(75)][$_DAAAF(1080)], n[$_DAAAF(75)][$_CJJJE(385)]);
    var r = $_FDd(guiji);
    var l = $_BBEI(r, c, s);
    // console.log(l === 'W-,-(/!!Sstttyy(!)y(yyszsssssssssuss(!!(D1_11-1p11012102102020379ENM8c')
    // console.log(l)
    return l;
}


function $_FDd(guiji) {
    // console.log("[DEBUG] gui =", guiji);
    // console.log("[DEBUG] typeof gui =", typeof guiji);

    function n(t) {
        var e = '()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr'
            , n = e['length']
            , r = ''
            , i = Math['abs'](t)
            , o = parseInt(i / n);
        n <= o && (o = n - 1),
        o && (r = e['charAt'](o));
        var s = '';
        return t < 0 && (s += '!'),
        r && (s += '$'),
        s + r + e['charAt'](i %= n);
    }

    var t = function (t) {
        for (var e, n, r, i = [], o = 0, s = 0, a = t['length'] - 1; s < a; s++)
            e = Math['round'](t[s + 1][0] - t[s][0]),
                n = Math['round'](t[s + 1][1] - t[s][1]),
                r = Math['round'](t[s + 1][2] - t[s][2]),
            0 == e && 0 == n && 0 == r || (0 == e && 0 == n ? o += r : (i['push']([e, n, r + o]),
                o = 0));
        return 0 !== o && i['push']([e, n, o]),
            i;
    }(guiji)
        , r = []
        , i = []
        , o = [];
    // console.log("中间处理后的t =", t);
    return new ct(t)['$_CAZ'](function (t) {
        var e = function (t) {
            for (var e = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]], n = 0, r = e['length']; n < r; n++)
                if (t[0] == e[n][0] && t[1] == e[n][1])
                    return 'stuvwxyz~'[n];
            return 0;
        }(t);
        e ? i['push'](e) : (r['push'](n(t[0])),
            i['push'](n(t[1]))),
            o['push'](n(t[2]));
    }),
    r['join']('') + '!!' + i['join']('') + '!!' + o['join']('');

}



var gt = "019924a82c70bb123aae90d483087f94"
var challenge = "c9a565973a6f5dddf8a9636981816ff6d6"
var s = '6d746c63';
var c = [
    12,
    58,
    98,
    36,
    43,
    95,
    62,
    15,
    12
];
var x_juli = 28;  // 横向拖动距离
var guiji =  [
    [
        -39,
        -35,
        0
    ],
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        64
    ],
    [
        2,
        0,
        72
    ],
    [
        3,
        0,
        80
    ],
    [
        5,
        -1,
        88
    ],
    [
        6,
        -1,
        96
    ],
    [
        9,
        -1,
        104
    ],
    [
        11,
        -1,
        112
    ],
    [
        14,
        -1,
        120
    ],
    [
        16,
        -1,
        128
    ],
    [
        18,
        -1,
        136
    ],
    [
        20,
        -1,
        144
    ],
    [
        21,
        -1,
        152
    ],
    [
        23,
        -2,
        160
    ],
    [
        24,
        -2,
        168
    ],
    [
        25,
        -2,
        176
    ],
    [
        26,
        -2,
        184
    ],
    [
        27,
        -3,
        192
    ],
    [
        27,
        -3,
        200
    ],
    [
        28,
        -3,
        208
    ],
    [
        28,
        -3,
        216
    ],
    [
        28,
        -3,
        288
    ]
]; // 还没有加密的轨迹
var hd_t = 288 // 滑动的时间

console.log(cul_third_w(gt, challenge, s, c, x_juli, guiji, hd_t))















