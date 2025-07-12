
var {RSAKey} = require("node-jsencrypt")
const CryptoJS = require("crypto-js");


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
    $_EJt: {
        // "gt": "019924a82c70bb123aae90d483087f94",
        // "challenge": "a429e3c15f76df55cb249390a977f96b",
        "offline": false,
        "new_captcha": true,
        "product": "popup",
        "width": "300px",
        "https": true,
        "api_server": "apiv6.geetest.com",
        "protocol": "https://",
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
        }
    }
}


function cul_first_w(gt, challenge) {
    // var sy = ABbDz.$_CP
    //     , $_CEEHe = ['$_CEFBT'].concat(sy)
    //     , sy = $_CEEHe[1];
    // $_CEEHe.shift();
    // var $_CEFAQ = $_CEEHe[0];

    // var t = this
    var t = quanju
        , n = t['$_EIC'];
    t['$_EIC']['gt'] = gt;
    t['$_EJt']['gt'] = gt;
    t['$_EIC']['challenge'] = challenge;
    t['$_EJt']['challenge'] = challenge;
    // if (!n['gt'] || !n['challenge'])
    //     return G(I('config_lack', t));
    var e = $_BIBc(); // 拿到了一个很像浏览器指纹的 一段字符串(预期)
    t['$_CCFM'] = e,
    t['$_EJt']['cc'] = n['cc'],
    t['$_EJt']['ww'] = n['supportWorker'],
    t['$_EJt']['i'] = e; // JSON.stringify({}) => ""
    var r = $_CCGX() // 这一步完事了 -> 生成一个aeskey，然后用rsa进行加密
        // de['stringify'](t['$_EJt']) === JSON.stringify(t['$_EJt'])  true
        , o = encrypt1(JSON['stringify'](t['$_EJt']), $_CCHU())  // encrypt(带有指纹相关信息的字符串, aeskey)
        , i = $_HEz(o)
        , s = {
        "\u0067\u0074": t['$_EJt']['gt'],
        "\u0063\u0068\u0061\u006c\u006c\u0065\u006e\u0067\u0065": t['$_EJt']['challenge'],
        "\u006c\u0061\u006e\u0067": "zh-cn",
        "\u0070\u0074": 0,
        "\u0063\u006c\u0069\u0065\u006e\u0074\u005f\u0074\u0079\u0070\u0065": "web",
        "\u0077": i + r
    };

    return {
        "msg": s,
        "aeskey": $_CCHU(),
        "finger_print": e
    };

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




function $_CCGX(e) {
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

// function X() {
//
//     this['n'] = null,
//     this['e'] = 0,
//     this['d'] = null,
//     this['p'] = null,
//     this['q'] = null,
//     this['dmp1'] = null,
//     this['dmq1'] = null,
//     this['coeff'] = null;
//     this['setPublic']('00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81', '10001');
//
// }



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



function $_BIBc() {
    // var n = this;
    var r = {};
    var o = [];
    var arr = [
    "textLength",
    "HTMLLength",
    "documentMode",
    "A",
    "ARTICLE",
    "ASIDE",
    "AUDIO",
    "BASE",
    "BUTTON",
    "CANVAS",
    "CODE",
    "IFRAME",
    "IMG",
    "INPUT",
    "LABEL",
    "LINK",
    "NAV",
    "OBJECT",
    "OL",
    "PICTURE",
    "PRE",
    "SECTION",
    "SELECT",
    "SOURCE",
    "SPAN",
    "STYLE",
    "TABLE",
    "TEXTAREA",
    "VIDEO",
    "screenLeft",
    "screenTop",
    "screenAvailLeft",
    "screenAvailTop",
    "innerWidth",
    "innerHeight",
    "outerWidth",
    "outerHeight",
    "browserLanguage",
    "browserLanguages",
    "systemLanguage",
    "devicePixelRatio",
    "colorDepth",
    "userAgent",
    "cookieEnabled",
    "netEnabled",
    "screenWidth",
    "screenHeight",
    "screenAvailWidth",
    "screenAvailHeight",
    "localStorageEnabled",
    "sessionStorageEnabled",
    "indexedDBEnabled",
    "CPUClass",
    "platform",
    "doNotTrack",
    "timezone",
    "canvas2DFP",
    "canvas3DFP",
    "plugins",
    "maxTouchPoints",
    "flashEnabled",
    "javaEnabled",
    "hardwareConcurrency",
    "jsFonts",
    "timestamp",
    "performanceTiming",
    "internalip",
    "mediaDevices",
    "DIV",
    "P",
    "UL",
    "LI",
    "SCRIPT",
    "touchEvent"
];
    return new $_DJG(arr)['$_EBJ'](function (e) {
        var t = r[e];
        o['push']((void 0 === t) ? -1 : t);
         }),
        o['join']('!!');
}

function $_DJG(e) {
    this['$_BAEp'] = e || [];
}

$_DJG['prototype'] = {
    // "\u0024\u005f\u0048\u004a\u0049": function (e) {
    //     return this['$_BAEp'][e];
    // },
    // "\u0024\u005f\u0042\u0041\u0047\u0047": function () {
    //     return this['$_BAEp']['length'];
    // },
    // "\u0024\u005f\u0045\u0041\u0045": function (e, t) {
    //     return new $_DJG(J(t) ? this['$_BAEp']['slice'](e, t) : this['$_BAEp']['slice'](e));
    // },
    // "\u0024\u005f\u0042\u0041\u0048\u0044": function (e) {
    //     return this['$_BAEp']['push'](e),
    //         this;
    // },
    // "\u0024\u005f\u0042\u0041\u0049\u0061": function (e, t) {
    //     return this['$_BAEp']['splice'](e, t || 1);
    // },
    // "\u0024\u005f\u0045\u0043\u006f": function (e) {
    //     return this['$_BAEp']['join'](e);
    // },
    // "\u0024\u005f\u0042\u0041\u004a\u0052": function (e) {
    //     return new $_DJG(this['$_BAEp']['concat'](e));
    // },

    "\u0024\u005f\u0045\u0042\u004a": function (e) {
        var t = this['$_BAEp'];
        if (t['map'])
            return new $_DJG(t['map'](e));
        for (var n = [], r = 0, o = t['length']; r < o; r += 1)
            n[r] = e(t[r], r, this);
        return new $_DJG(n);
    },

    // "\u0024\u005f\u0042\u0042\u0041\u0067": function (e) {
    //     var t = this['$_BAEp'];
    //     if (t['filter'])
    //         return new $_DJG(t['filter'](e));
    //     for (var n = [], r = 0, o = t['length']; r < o; r += 1)
    //         e(t[r], r, this) && n['push'](t[r]);
    //     return new $_DJG(n);
    // },
    // "\u0024\u005f\u0045\u0048\u0055": function (e) {
    //     var t = this['$_BAEp'];
    //     if (t['indexOf'])
    //         return t['indexOf'](e);
    //     for (var n = 0, r = t['length']; n < r; n += 1)
    //         if (t[n] === e)
    //             return n;
    //     return -1;
    // },
    // "\u0024\u005f\u0042\u0042\u0042\u0070": function (e) {
    //     var t = this['$_BAEp'];
    //     if (!t['forEach'])
    //         for (var n = arguments[1], r = 0; r < t['length']; r++)
    //             r in t && e['call'](n, t[r], r, this);
    //     return t['forEach'](e);
    // }

};


// console.log($_BIBc())
// // console.log($_CCHU())
// console.log($_CCGX())
// console.log(quanju.$_EIC)
// console.log(encrypt1('{"gt":"019924a82c70bb123aae90d483087f94","challenge":"553737eb8bf17224c879e24c48ae41ac","offline":false,"new_captcha":true,"product":"popup","width":"300px","https":true,"api_server":"apiv6.geetest.com","protocol":"https://","type":"fullpage","static_servers":["static.geetest.com/","static.geevisit.com/"],"beeline":"/static/js/beeline.1.0.1.js","voice":"/static/js/voice.1.2.6.js","click":"/static/js/click.3.1.2.js","fullpage":"/static/js/fullpage.9.2.0-cf92nc.js","slide":"/static/js/slide.7.9.3.js","geetest":"/static/js/geetest.6.0.9.js","aspect_radio":{"slide":103,"click":128,"voice":128,"beeline":50},"cc":20,"ww":true,"i":"-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1"}', "b46aa7d653765f98"))

console.log(cul_first_w("019924a82c70bb123aae90d483087f94", "a429e3c15f76df55cb249390a977f96b"))