const CryptoJS = require("crypto-js");
window = global;


function $_DJG(e) {
    // undefined = e || [];
    this["$_BAEp"] = e || [];
}

$_DJG.prototype = {
    "$_EHU": function (e) {
        var t = this['$_BAEp'];
        if (t['indexOf'])
            return t['indexOf'](e);
        for (var n = 0, r = t['length']; n < r; n += 1)
            if (t[n] === e)
                return n;
        return -1;
    },
   "$_EBJ": function (e) {
        var t = this['$_BAEp'];
        if (t['map'])
            return new $_DJG(t['map'](e));
        for (var n = [], r = 0, o = t['length']; r < o; r += 1)
            n[r] = e(t[r], r, this);
        return new $_DJG(n);
    },

}


function $_BHJx(e) {
    var t = ''
        , n = 0;
    (e || [])['length'];
    while (!t && e[n])
        t = e[n] && e[n][4],
            n++;
    if (!t)
        return e;
    for (var r = '', o = ['mouse', 'touch', 'pointer', 'MSPointer'], i = 0, s = o['length']; i < s; i++)
        0 === t['indexOf'](o[i]) && (r = o[i]);
    for (var a = e['slice'](), _ = a['length'] - 1; 0 <= _; _--) {
        var c = a[_]
            , l = c[0];
        if (-1 < new $_DJG(['move', 'down', 'up'])['$_EHU'](l))
        // if (-1 < 2)
            0 !== (c[4] || '')['indexOf'](r) && a['splice'](_, 1);
    }
    return a;
}
function $_BHHd(e) {
    var t = 32767;
    return 'number' != typeof e ? e : (t < e ? e = t : e < -t && (e = -t),
        Math['round'](e));
}



function $_BHIz(e) {
    var t = 0
        , n = 0
        , r = []
        , o = this
        , i = o['lastTime'];
    if (e['length'] <= 0)
        return [];
    for (var s = null, a = null, _ = $_BHJx(e), c = _['length'], l = c < 300 ? 0 : c - 300; l < c; l += 1) {
        var u = _[l]
            , p = u[0];
        -1 < new $_DJG(['down', 'move', 'up', 'scroll'])['$_EHU'](p) ? (s || (s = u),
            a = u,
            r['push']([p, [u[1] - t, u[2] - n], $_BHHd(i ? u[3] - i : i)]),
            t = u[1],
            n = u[2],
            i = u[3]) : -1 < new $_DJG(['blur', 'focus', 'unload'])['$_EHU'](p) && (r['push']([p, $_BHHd(i ? u[1] - i : i)]),
            i = u[1]);
    }
    return r;
}


function $_HDj(e) {
    var p = {
        "\u006d\u006f\u0076\u0065": 0,
        "\u0064\u006f\u0077\u006e": 1,
        "\u0075\u0070": 2,
        "\u0073\u0063\u0072\u006f\u006c\u006c": 3,
        "\u0066\u006f\u0063\u0075\u0073": 4,
        "\u0062\u006c\u0075\u0072": 5,
        "\u0075\u006e\u006c\u006f\u0061\u0064": 6,
        "\u0075\u006e\u006b\u006e\u006f\u0077\u006e": 7
    };

    function h(e, t) {
        for (var n = e['toString'](2), r = '', o = n['length'] + 1; o <= t; o += 1)
            r += '0';
        return n = r + n;
    }

    function f(e) {
        var t = []
            , n = e['length']
            , r = 0;
        while (r < n) {
            var o = e[r]
                , i = 0;
            while (1) {
                if (16 <= i)
                    break;
                var s = r + i + 1;
                if (n <= s)
                    break;
                if (e[s] !== o)
                    break;
                i += 1;
            }
            r = r + 1 + i;
            var a = p[o];
            0 != i ? (t['push'](8 | a),
                t['push'](i - 1)) : t['push'](a);
        }
        for (var _ = h(32768 | n, 16), c = '', l = 0, u = t['length']; l < u; l += 1)
            c += h(t[l], 4);
        return _ + c;
    }

    function c(e, t) {
        for (var n = [], r = 0, o = e['length']; r < o; r += 1)
            n['push'](t(e[r]));
        return n;
    }

    function d(e, t) {
        e = function _(e) {
            var t = 32767
                , n = (e = c(e, function (e) {
                return t < e ? t : e < -t ? -t : e;
            }))['length']
                , r = 0
                , o = [];
            while (r < n) {
                var i = 1
                    , s = e[r]
                    , a = Math['abs'](s);
                while (1) {
                    if (n <= r + i)
                        break;
                    if (e[r + i] !== s)
                        break;
                    if (127 <= a || 127 <= i)
                        break;
                    i += 1;
                }
                1 < i ? o['push']((s < 0 ? 49152 : 32768) | i << 7 | a) : o['push'](s),
                    r += i;
            }
            return o;
        }(e);
        var n, r = [], o = [];
        c(e, function (e) {
            var t = Math['ceil'](function n(e, t) {
                return 0 === e ? 0 : Math['log'](e) / Math['log'](t);
            }(Math['abs'](e) + 1, 16));
            0 === t && (t = 1),
                r['push'](h(t - 1, 2)),
                o['push'](h(Math['abs'](e), 4 * t));
        });
        var i = r['join']('')
            , s = o['join']('');
        return n = t ? c(function a(e, t) {
            var n = [];
            return c(e, function (e) {
                t(e) && n['push'](e);
            }),
                n;
        }(e, function (e) {
            return 0 != e && e >> 15 != 1;
        }), function (e) {
            return e < 0 ? '1' : '0';
        })['join']('') : '',
        h(32768 | e['length'], 16) + i + s + n;
        
    }
    
    return function (e) {
        for (var t = [], n = [], r = [], o = [], i = 0, s = e['length']; i < s; i += 1) {
            var a = e[i]
                , _ = a['length'];
            t['push'](a[0]),
                n['push'](2 === _ ? a[1] : a[2]),
            3 === _ && (r['push'](a[1][0]),
                o['push'](a[1][1]));
        }
        var c = f(t) + d(n, !1) + d(r, !0) + d(o, !0)
            , l = c['length'];
        return l % 6 != 0 && (c += h(0, 6 - l % 6)),
            function u(e) {
                for (var t = '', n = e['length'] / 6, r = 0; r < n; r += 1)
                    t +='()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~'['charAt'](parseInt(e['slice'](6 * r, 6 * (r + 1)), 2));
                return t;
            }(c);
    }(e);
}




function curl_i_e() {
    var e = [
    [
        "move",
        661,
        224,
        1749645605800,
        "pointermove"
    ],
    [
        "move",
        659,
        225,
        1749645605802,
        "pointermove"
    ],
    [
        "move",
        658,
        225,
        1749645605811,
        "pointermove"
    ],
    [
        "move",
        657,
        225,
        1749645605818,
        "pointermove"
    ],
    [
        "move",
        656,
        225,
        1749645605819,
        "mousemove"
    ],
    [
        "move",
        655,
        225,
        1749645605827,
        "pointermove"
    ],
    [
        "move",
        654,
        225,
        1749645605834,
        "pointermove"
    ],
    [
        "move",
        652,
        225,
        1749645605842,
        "pointermove"
    ],
    [
        "move",
        651,
        225,
        1749645605850,
        "pointermove"
    ],
    [
        "move",
        650,
        225,
        1749645605858,
        "pointermove"
    ],
    [
        "move",
        649,
        225,
        1749645605867,
        "pointermove"
    ],
    [
        "move",
        647,
        225,
        1749645605875,
        "pointermove"
    ],
    [
        "move",
        646,
        225,
        1749645605883,
        "pointermove"
    ],
    [
        "move",
        645,
        224,
        1749645605890,
        "pointermove"
    ],
    [
        "move",
        644,
        224,
        1749645605891,
        "mousemove"
    ],
    [
        "move",
        643,
        223,
        1749645605899,
        "pointermove"
    ],
    [
        "move",
        642,
        223,
        1749645605907,
        "pointermove"
    ],
    [
        "move",
        641,
        221,
        1749645605914,
        "pointermove"
    ],
    [
        "move",
        640,
        220,
        1749645605922,
        "pointermove"
    ],
    [
        "move",
        639,
        219,
        1749645605931,
        "pointermove"
    ],
    [
        "move",
        638,
        218,
        1749645605938,
        "pointermove"
    ],
    [
        "move",
        637,
        217,
        1749645605946,
        "pointermove"
    ],
    [
        "move",
        636,
        216,
        1749645605957,
        "pointermove"
    ],
    [
        "move",
        635,
        216,
        1749645605964,
        "pointermove"
    ],
    [
        "move",
        633,
        213,
        1749645605994,
        "pointermove"
    ],
    [
        "move",
        631,
        211,
        1749645606025,
        "pointermove"
    ],
    [
        "move",
        631,
        210,
        1749645606029,
        "pointermove"
    ],
    [
        "move",
        630,
        209,
        1749645606039,
        "pointermove"
    ],
    [
        "move",
        630,
        208,
        1749645606042,
        "pointermove"
    ],
    [
        "move",
        629,
        207,
        1749645606050,
        "pointermove"
    ],
    [
        "move",
        629,
        205,
        1749645606058,
        "pointermove"
    ],
    [
        "move",
        629,
        203,
        1749645606066,
        "pointermove"
    ],
    [
        "move",
        629,
        202,
        1749645606074,
        "pointermove"
    ],
    [
        "move",
        628,
        200,
        1749645606082,
        "pointermove"
    ],
    [
        "move",
        628,
        199,
        1749645606090,
        "pointermove"
    ],
    [
        "move",
        628,
        198,
        1749645606098,
        "pointermove"
    ],
    [
        "move",
        628,
        196,
        1749645606106,
        "pointermove"
    ],
    [
        "move",
        628,
        194,
        1749645606114,
        "pointermove"
    ],
    [
        "move",
        628,
        192,
        1749645606122,
        "pointermove"
    ],
    [
        "move",
        628,
        192,
        1749645606130,
        "pointermove"
    ],
    [
        "move",
        628,
        190,
        1749645606138,
        "pointermove"
    ],
    [
        "move",
        628,
        188,
        1749645606146,
        "pointermove"
    ],
    [
        "move",
        629,
        187,
        1749645606154,
        "pointermove"
    ],
    [
        "move",
        629,
        185,
        1749645606162,
        "pointermove"
    ],
    [
        "move",
        630,
        183,
        1749645606170,
        "pointermove"
    ],
    [
        "move",
        631,
        182,
        1749645606178,
        "pointermove"
    ],
    [
        "move",
        633,
        181,
        1749645606186,
        "pointermove"
    ],
    [
        "move",
        634,
        179,
        1749645606194,
        "pointermove"
    ],
    [
        "move",
        635,
        178,
        1749645606203,
        "pointermove"
    ],
    [
        "move",
        636,
        176,
        1749645606212,
        "pointermove"
    ],
    [
        "move",
        637,
        175,
        1749645606218,
        "pointermove"
    ],
    [
        "move",
        638,
        174,
        1749645606226,
        "pointermove"
    ],
    [
        "move",
        639,
        173,
        1749645606242,
        "pointermove"
    ],
    [
        "move",
        638,
        173,
        1749645606243,
        "mousemove"
    ],
    [
        "move",
        639,
        173,
        1749645606250,
        "pointermove"
    ],
    [
        "move",
        640,
        173,
        1749645606258,
        "pointermove"
    ],
    [
        "move",
        641,
        173,
        1749645606306,
        "pointermove"
    ],
    [
        "move",
        642,
        173,
        1749645606322,
        "pointermove"
    ],
    [
        "move",
        643,
        172,
        1749645606346,
        "pointermove"
    ],
    [
        "move",
        643,
        171,
        1749645606354,
        "pointermove"
    ],
    [
        "move",
        644,
        171,
        1749645606362,
        "pointermove"
    ],
    [
        "move",
        644,
        170,
        1749645606370,
        "pointermove"
    ],
    [
        "move",
        645,
        170,
        1749645606378,
        "pointermove"
    ],
    [
        "move",
        645,
        169,
        1749645606386,
        "pointermove"
    ],
    [
        "move",
        645,
        168,
        1749645606410,
        "pointermove"
    ],
    [
        "move",
        646,
        168,
        1749645606419,
        "pointermove"
    ],
    [
        "down",
        646,
        168,
        1749645606450,
        "pointerdown"
    ],
    [
        "focus",
        1749645606451
    ],
    [
        "up",
        646,
        168,
        1749645606514,
        "pointerup"
    ]
]; // 用户左侧滑动的轨迹
    // console.log($_BHIz(e))
    return $_HDj($_BHIz(e));
}
// console.log(curl_i_e())

function curl_i_t() {
    return $_HDj({});
}
// console.log(curl_i_t())


function $_BIHl(e) {
    return void 0 === e;
}


function curl_i_n(e, t) {
    var n = this
    var r = {}   // 指纹
    var o = [];
    var $_B = [
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
]

    return new $_DJG($_B)['$_EBJ'](function (e) {
        var t = r[e];
        o['push']($_BIHl(t) ? -1 : t);
    }),
        o['join']('magic data');
}
// console.log(curl_i_n())

function curl_i_r() {
    return 'DIV_0'
}


function $_HBs(e, t) {
    return e >> t & 1;
}


function $_GJl(e) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";
    return e < 0 || e >= t['length'] ? '.' : t['charAt'](e);
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
                r = ".") : 1 == c && (_ = e[a] << 16,
                n += $_GJl(t(_, 7274496)) + $_GJl(t(_, 9483264)),
                r = "." + ".");
        }
    }
    return {
        "\u0072\u0065\u0073": n,
        "\u0065\u006e\u0064": r
    };
}



function $_GHY(e) {
    for (var t = [], n = 0, r = e['length']; n < r; n += 1)
        t['push'](e['charCodeAt'](n));
    return t;
}


function p(e) {
    var t =  $_HCQ($_GHY(e));
    return t['res'] + t['end'];
}
// console.log(p(curl_i_t()))


function H(e) {

    function _(e, t) {
        return e << t | e >>> 32 - t;
    }

    function c(e, t) {
        var n, r, o, i, s;
        return o = 2147483648 & e,
            i = 2147483648 & t,
            s = (1073741823 & e) + (1073741823 & t),
            (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ s ^ o ^ i : n | r ? 1073741824 & s ? 3221225472 ^ s ^ o ^ i : 1073741824 ^ s ^ o ^ i : s ^ o ^ i;
    }

    function t(e, t, n, r, o, i, s) {
        return c(_(e = c(e, c(c(function a(e, t, n) {
            return e & t | ~e & n;
        }(t, n, r), o), s)), i), t);
    }

    function n(e, t, n, r, o, i, s) {
        return c(_(e = c(e, c(c(function a(e, t, n) {
            return e & n | t & ~n;
        }(t, n, r), o), s)), i), t);
    }

    function r(e, t, n, r, o, i, s) {
        return c(_(e = c(e, c(c(function a(e, t, n) {
            return e ^ t ^ n;
        }(t, n, r), o), s)), i), t);
    }

    function o(e, t, n, r, o, i, s) {
        return c(_(e = c(e, c(c(function a(e, t, n) {
            return t ^ (e | ~n);
        }(t, n, r), o), s)), i), t);
    }

    function i(e) {
        var t, n = '', r = '';
        for (t = 0; t <= 3; t++)
            n += (r = '0' + (e >>> 8 * t & 255)['toString'](16))['substr'](r['length'] - 2, 2);
        return n;
    }

    var s, a, l, u, p, h, f, d, g, v;
    for (s = function m(e) {
        var t, n = e['length'], r = n + 8, o = 16 * (1 + (r - r % 64) / 64), i = Array(o - 1), s = 0,
            a = 0;
        while (a < n)
            s = a % 4 * 8,
                i[t = (a - a % 4) / 4] = i[t] | e['charCodeAt'](a) << s,
                a++;
        return s = a % 4 * 8,
            i[t = (a - a % 4) / 4] = i[t] | 128 << s,
            i[o - 2] = n << 3,
            i[o - 1] = n >>> 29,
            i;
    }(e = function x(e) {
        e = e['replace'](/\r\n/g, '\n');
        for (var t = '', n = 0; n < e['length']; n++) {
            var r = e['charCodeAt'](n);
            r < 128 ? t += String['fromCharCode'](r) : (127 < r && r < 2048 ? t += String['fromCharCode'](r >> 6 | 192) : (t += String['fromCharCode'](r >> 12 | 224),
                t += String['fromCharCode'](r >> 6 & 63 | 128)),
                t += String['fromCharCode'](63 & r | 128));
        }
        return t;
    }(e)),
     f = 1732584193,
     d = 4023233417,
     g = 2562383102,
     v = 271733878,
     a = 0; a < s['length']; a += 16)
     d = o(d = o(d = o(d = o(d = r(d = r(d = r(d = r(d = n(d = n(d = n(d = n(d = t(d = t(d = t(d = t(u = d, g = t(p = g, v = t(h = v, f = t(l = f, d, g, v, s[a + 0], 7, 3614090360), d, g, s[a + 1], 12, 3905402710), f, d, s[a + 2], 17, 606105819), v, f, s[a + 3], 22, 3250441966), g = t(g, v = t(v, f = t(f, d, g, v, s[a + 4], 7, 4118548399), d, g, s[a + 5], 12, 1200080426), f, d, s[a + 6], 17, 2821735955), v, f, s[a + 7], 22, 4249261313), g = t(g, v = t(v, f = t(f, d, g, v, s[a + 8], 7, 1770035416), d, g, s[a + 9], 12, 2336552879), f, d, s[a + 10], 17, 4294925233), v, f, s[a + 11], 22, 2304563134), g = t(g, v = t(v, f = t(f, d, g, v, s[a + 12], 7, 1804603682), d, g, s[a + 13], 12, 4254626195), f, d, s[a + 14], 17, 2792965006), v, f, s[a + 15], 22, 1236535329), g = n(g, v = n(v, f = n(f, d, g, v, s[a + 1], 5, 4129170786), d, g, s[a + 6], 9, 3225465664), f, d, s[a + 11], 14, 643717713), v, f, s[a + 0], 20, 3921069994), g = n(g, v = n(v, f = n(f, d, g, v, s[a + 5], 5, 3593408605), d, g, s[a + 10], 9, 38016083), f, d, s[a + 15], 14, 3634488961), v, f, s[a + 4], 20, 3889429448), g = n(g, v = n(v, f = n(f, d, g, v, s[a + 9], 5, 568446438), d, g, s[a + 14], 9, 3275163606), f, d, s[a + 3], 14, 4107603335), v, f, s[a + 8], 20, 1163531501), g = n(g, v = n(v, f = n(f, d, g, v, s[a + 13], 5, 2850285829), d, g, s[a + 2], 9, 4243563512), f, d, s[a + 7], 14, 1735328473), v, f, s[a + 12], 20, 2368359562), g = r(g, v = r(v, f = r(f, d, g, v, s[a + 5], 4, 4294588738), d, g, s[a + 8], 11, 2272392833), f, d, s[a + 11], 16, 1839030562), v, f, s[a + 14], 23, 4259657740), g = r(g, v = r(v, f = r(f, d, g, v, s[a + 1], 4, 2763975236), d, g, s[a + 4], 11, 1272893353), f, d, s[a + 7], 16, 4139469664), v, f, s[a + 10], 23, 3200236656), g = r(g, v = r(v, f = r(f, d, g, v, s[a + 13], 4, 681279174), d, g, s[a + 0], 11, 3936430074), f, d, s[a + 3], 16, 3572445317), v, f, s[a + 6], 23, 76029189), g = r(g, v = r(v, f = r(f, d, g, v, s[a + 9], 4, 3654602809), d, g, s[a + 12], 11, 3873151461), f, d, s[a + 15], 16, 530742520), v, f, s[a + 2], 23, 3299628645), g = o(g, v = o(v, f = o(f, d, g, v, s[a + 0], 6, 4096336452), d, g, s[a + 7], 10, 1126891415), f, d, s[a + 14], 15, 2878612391), v, f, s[a + 5], 21, 4237533241), g = o(g, v = o(v, f = o(f, d, g, v, s[a + 12], 6, 1700485571), d, g, s[a + 3], 10, 2399980690), f, d, s[a + 10], 15, 4293915773), v, f, s[a + 1], 21, 2240044497), g = o(g, v = o(v, f = o(f, d, g, v, s[a + 8], 6, 1873313359), d, g, s[a + 15], 10, 4264355552), f, d, s[a + 6], 15, 2734768916), v, f, s[a + 13], 21, 1309151649), g = o(g, v = o(v, f = o(f, d, g, v, s[a + 4], 6, 4149444226), d, g, s[a + 11], 10, 3174756917), f, d, s[a + 2], 15, 718787259), v, f, s[a + 9], 21, 3951481745),
        f = c(f, l),
        d = c(d, u),
        g = c(g, p),
        v = c(v, h);
    return (i(f) + i(d) + i(g) + i(v))['toLowerCase']();


}
// console.log(H(p(curl_i_t())))



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



var $_CEDX = {
    "v": "9.2.0-cf92nc",
    "te": false,
    "$_BBT": true,
    "ven": "Google Inc. (Intel)",
    "ren": "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
    "fp": [
        "move",
        771,
        287,
        1749658758701,
        "pointermove"
    ],
    "lp": [
        "up",
        678,
        165,
        1749658759266,
        "pointerup"
    ],
    "em": {
        "ph": 0,
        "cp": 0,
        "ek": "11",
        "wd": 1,
        "nt": 0,
        "si": 0,
        "sc": 0
    },
    "tm": {
        "a": 1749658757837,
        "b": 1749658757890,
        "c": 1749658757890,
        "d": 0,
        "e": 0,
        "f": 1749658757838,
        "g": 1749658757838,
        "h": 1749658757838,
        "i": 1749658757838,
        "j": 1749658757838,
        "k": 0,
        "l": 1749658757845,
        "m": 1749658757887,
        "n": 1749658757888,
        "o": 1749658757894,
        "p": 1749658758178,
        "q": 1749658758178,
        "r": 1749658758180,
        "s": 1749658758597,
        "t": 1749658758598,
        "u": 1749658758598
    },
    "dnf": "dnf",
    "by": 0
}


function curl_i(gt, challenge, s, finger_print) {

    var now = new Date().getTime();
    var $_CEDX = {
    "v": "9.2.0-cf92nc",
    "te": false,
    "$_BBT": true,
    "ven": "Google Inc. (Intel)",
    "ren": "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
    "fp": [
        "move",
        771,
        287,
        now, // now
        "pointermove"
    ],
    "lp": [
        "up",
        678,
        165,
        now + 565, // now + diff
        "pointerup"
    ],
    "em": {
        "ph": 0,
        "cp": 0,
        "ek": "11",
        "wd": 1,
        "nt": 0,
        "si": 0,
        "sc": 0
    },
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
    "dnf": "dnf",
    "by": 0
}

    var i = this
        , e = curl_i_e()
        , t = curl_i_t()
        , n = curl_i_n()
        , r = curl_i_r()
        , o = {
                "gt": gt,  // 1
                "challenge": challenge, // 1
                "c": [
                    12,
                    58,
                    98,
                    36,
                    43,
                    95,
                    62,
                    15,
                    12
                ], // 1
                "s": s, // 1
                }
        , s = 53482; // 也可以设置成随机
    var result = "";
    for (var a = [['lang', o['lang'] || 'zh-cn'], ['type', 'fullpage'], ['tt', function (e, t, n) {

        if (!t || !n)
            return e;
        var r, o = 0, i = e, s = t[0], a = t[2], _ = t[4];
        while (r = n['substr'](o, 2)) {
            o += 2;
            var c = parseInt(r, 16)
                , l = String['fromCharCode'](c)
                , u = (s * c * c + a * c + _) % e['length'];
            i = i['substr'](0, u) + l + i['substr'](u);
        }
        return i;                                                                                       // H($_BIBc()) : 这里是一个指纹，目前是重新生成的
    }(e, o['c'], o['s']) || -1], ['light', r || -1], ['s', H(p(t))], ['h', H(p(n))], ['hh', H(n)], ['hi', H(finger_print)], ['vip_order', undefined || -1], ['ct', undefined || -1], ['ep', $_CEDX || -1], ['passtime', s || -1], ['rp', H(o['gt'] + o['challenge'] + s)]], _ = 0; _ < a['length']; _++)
        result += '"' + a[_][0] + '":' + JSON['stringify'](a[_][1]) + ',';
    return result
}
// console.log(curl_i())





function encrypt1(e, t, n) {  // 猜测是aes加密， CryptoJS.

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



function $_HBs(e, t) {
    return e >> t & 1;
}

function $_GJl(e) {
    // var t = this['$_GAN'];
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";
    return e < 0 || e >= t['length'] ? '.' : t['charAt'](e);
}



function cul_second_w(aeskey, gt, challenge, s, finger_print) { // 通过传递参数把上一次的aeskey传递过来，

    var o_code = "function o(e,t){var $_CFGDz=ABbDz.$_CP,$_CFGCq=['$_CFGGx'].concat($_CFGDz),$_CFGEX=$_CFGCq[1];$_CFGCq.shift();var $_CFGFA=$_CFGCq[0];function n(e){var $_DDHGP=ABbDz.$_De()[9][22];for(;$_DDHGP!==ABbDz.$_De()[0][21];){switch($_DDHGP){case ABbDz.$_De()[18][22]:var t=5381,n=e[$_CFGDz(12)],r=0;while(n--)t=(t<<5)+t+e[$_CFGDz(8)](r++);return t&=~(1<<31);break;}}}100<new Date()[$_CFGEX(249)]()-t[$_CFGEX(249)]()&&(e=$_CFGEX(1127)),r=$_CFGDz(745)+i[$_CFGEX(1158)]+$_CFGDz(1188)+n(o[$_CFGDz(34)]()+n(n[$_CFGEX(34)]())+n(e[$_CFGDz(34)]()))+$_CFGDz(1165);}";
    var n_code = 'function n(e){var $_DDHGP=ABbDz.$_De()[9][22];for(;$_DDHGP!==ABbDz.$_De()[0][21];){switch($_DDHGP){case ABbDz.$_De()[18][22]:var t=5381,n=e[$_CFGDz(12)],r=0;while(n--)t=(t<<5)+t+e[$_CFGDz(8)](r++);return t&=~(1<<31);break;}}}';
    var e_code = 'bbOy';

    // t['push']("bbOy");

    var r = '';
    !function o(e, t) {
        function n(e) {
            var t = 5381
                , n = e['length']
                , r = 0;
            while (n--)
                t = (t << 5) + t + e['charCodeAt'](r++);
            return t &= ~(1 << 31);
        }

        // 100 < new Date()['getTime']() - t['getTime']() && (e = 'qwe');
        // console.log(n(o_code + n(n_code) + n(e_code)))
        r = '{' + curl_i(gt, challenge, s, finger_print) + '"captcha_token":"' + n(o_code + n(n_code) + n(e_code)) + '","zc2h":"pcqkih5a"}';
    }("bbOy", new Date());
    // console.log(r)

    // var aeskey = "24daddd51aca7b33";  // 它需要是上一次的那个aeskey ??
    return $_HEz(encrypt1(r, aeskey));
}


// t['shift']() "bbOy"
//
// cul_second_w()
// console.log(cul_second_w())


// console.log(cul_second_w(""))




