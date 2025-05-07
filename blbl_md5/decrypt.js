

var crypt = require('crypto-js')

function get_md5(a) {
    console.log(crypt.MD5(a).toString());
}




var ie = Math.round(Date.now() / 1e3)
var wts = ie.toString()
console.log(wts)


var ne = "ea1db124af3c7062474693fa704f4ff8"

// se 是这样构建的：
const se = [
    "brush=8",
    "feed_version=V8",
    "fetch_row=1",
    "fresh_idx=9",
    "fresh_idx_1h=9",
    "fresh_type=3",
    "homepage_ver=1",
    "last_showlist=av_114284533124702%2Cav_114319530398589%2Cav_114367949445040%2Cav_n_114313289273024%2Cav_n_114318674823815%2Cad_n_5614_114385246818264%2Cav_n_114222541380092%2Cav_n_114283241280548%2Cav_n_114302182753295%2Cav_n_114363402818366%3Bav_114291093014266%2Cav_114267621688380%2Cav_114272889804348%2Cav_114341206561320%2Cav_114335082873965%2Cav_114230376273590%2Cad_n_5614_113597875229087%2Cav_n_114278895980147%2Cav_n_114057688385587%2Cav_n_114352413804776%3Bav_114319580729908%2Cav_114197862023206%2Cav_114074750883074%2Cav_n_114322231529100%2Cav_n_114348487934161%2Cav_n_114345233090154%2Cad_n_5614_113497480431318%2Cav_n_114308105116021%2Cav_n_114314077799891%2Cav_n_114353068051379%3Bav_114141792569503%2Cav_114086578821445%2Cav_114318909640207%2Cav_n_114335250714864%2Cav_n_114239788291033%2Cav_n_114324429412580%2Cad_n_5614_114396302935342%2Cav_n_114312332974221%2Cav_n_114348152460594%2Cav_n_114220763061824%3Bav_114194607250097%2Cav_114126709857443%2Cav_114199355202550%2Cav_n_114321342337618%2Cav_n_114263091840615%2Cad_n_5614_114295304095169%2Cav_n_114289197188122%2Cav_n_114136339975725%2Cav_n_114086176099352%2Cav_n_114370281477096%3Bav_114369643943710%2Cav_114360366142608%2Cav_114076579530205%2Cav_n_114261229573240%2Cad_n_5614_114368016553409%2Cav_n_114284382127811%2Cav_n_114319362688032%2Cav_n_114344612333172%2Cav_n_114231919772808%2Cav_n_114208515562487%3Bav_114075774222613%2Cav_114307266318074%2Cav_114113019643330%2Cav_n_114254803897176%2Cad_n_5614_114387763333708%2Cav_n_114337398129817%2Cav_n_114343253379470%2Cav_n_114322869125129%2Cav_n_114299481625952%2Cav_n_114256901182579%3Bav_114331576436197%2Cav_114075992399531%2Cav_114097349856854%2Cav_n_114312987283061%2Cad_n_5614%2Cav_n_114311192187659%2Cav_n_114114697429816%2Cav_n_114233312282772%2Cav_n_114109160885994%2Cav_n_114325033389637%3Bav_114273544046254%2Cav_114217172600475%2Cav_114206921727270%2Cav_n_114380045817646%2Cad_n_5614_113978198005469%2Cav_n_114262705965807%2Cav_n_114179105098395%2Cav_n_114375281149557%2Cav_n_114233345838616%2Cav_n_114300135934223",
    "last_y_num=5",
    "ps=10",
    "screen=2561-456",
    "seo_info=",
    "uniq_id=1310305678742",
    "web_location=1430650",
    "wts=1745583453",
    "y_num=5"
]



const ue = se.join("&");

function wordsToBytes(te) {
    for (var re = [], ne = 0; ne < te.length * 32; ne += 8)
        re.push(te[ne >>> 5] >>> 24 - ne % 32 & 255);
    return re
}

function stringToBytes1(S) {
    for (var ee = [], te = 0; te < S.length; te++)
        ee.push(S.charCodeAt(te) & 255);
    return ee
}

function stringToBytes(S) {
    return stringToBytes1(unescape(encodeURIComponent(S)))
}

function bytesToWords(te) {
    for (var re = [], ne = 0, ie = 0; ne < te.length; ne++,
        ie += 8)
        re[ie >>> 5] |= te[ne] << 24 - ie % 32;
    return re
}

function bytesToString(S) {
    for (var ee = [], te = 0; te < S.length; te++)
        ee.push(String.fromCharCode(S[te]));
    return ee.join("")
}

function bytesToHex(te) {
    for (var re = [], ne = 0; ne < te.length; ne++)
        re.push((te[ne] >>> 4).toString(16)),
            re.push((te[ne] & 15).toString(16));
    return re.join("")
}

ne = function (ie, ae) {
    ne._ff = function (ie, ae, oe, se, le, ue, fe) {
            var ce = ie + (ae & oe | ~ae & se) + (le >>> 0) + fe;
            return (ce << ue | ce >>> 32 - ue) + ae
        };
    ne._gg = function (ie, ae, oe, se, le, ue, fe) {
        var ce = ie + (ae & se | oe & ~se) + (le >>> 0) + fe;
        return (ce << ue | ce >>> 32 - ue) + ae
    };
    ne._hh = function (ie, ae, oe, se, le, ue, fe) {
        var ce = ie + (ae ^ oe ^ se) + (le >>> 0) + fe;
        return (ce << ue | ce >>> 32 - ue) + ae
    };
    ne._ii = function (ie, ae, oe, se, le, ue, fe) {
        var ce = ie + (oe ^ (ae | ~se)) + (le >>> 0) + fe;
        return (ce << ue | ce >>> 32 - ue) + ae
    };

    function rotl(te, re) {
        return te << re | te >>> 32 - re
    }

    function endian(te) {
        if (te.constructor == Number)
            return rotl(te, 8) & 16711935 | rotl(te, 24) & 4278255360;
        for (var re = 0; re < te.length; re++)
            te[re] = endian(te[re]);
        return te
    }
    ie = stringToBytes(ie) ;
    for (var oe = bytesToWords(ie), se = ie.length * 8, le = 1732584193, ue = -271733879, fe = -1732584194, ce = 271733878, he = 0; he < oe.length; he++)
        oe[he] = (oe[he] << 8 | oe[he] >>> 24) & 16711935 | (oe[he] << 24 | oe[he] >>> 8) & 4278255360;
    oe[se >>> 5] |= 128 << se % 32,
        oe[(se + 64 >>> 9 << 4) + 14] = se;
    for (var pe = ne._ff, de = ne._gg, be = ne._hh, ye = ne._ii, he = 0; he < oe.length; he += 16) {
        var ge = le
            , ve = ue
            , me = fe
            , _e = ce;
        le = pe(le, ue, fe, ce, oe[he + 0], 7, -680876936),
            ce = pe(ce, le, ue, fe, oe[he + 1], 12, -389564586),
            fe = pe(fe, ce, le, ue, oe[he + 2], 17, 606105819),
            ue = pe(ue, fe, ce, le, oe[he + 3], 22, -1044525330),
            le = pe(le, ue, fe, ce, oe[he + 4], 7, -176418897),
            ce = pe(ce, le, ue, fe, oe[he + 5], 12, 1200080426),
            fe = pe(fe, ce, le, ue, oe[he + 6], 17, -1473231341),
            ue = pe(ue, fe, ce, le, oe[he + 7], 22, -45705983),
            le = pe(le, ue, fe, ce, oe[he + 8], 7, 1770035416),
            ce = pe(ce, le, ue, fe, oe[he + 9], 12, -1958414417),
            fe = pe(fe, ce, le, ue, oe[he + 10], 17, -42063),
            ue = pe(ue, fe, ce, le, oe[he + 11], 22, -1990404162),
            le = pe(le, ue, fe, ce, oe[he + 12], 7, 1804603682),
            ce = pe(ce, le, ue, fe, oe[he + 13], 12, -40341101),
            fe = pe(fe, ce, le, ue, oe[he + 14], 17, -1502002290),
            ue = pe(ue, fe, ce, le, oe[he + 15], 22, 1236535329),
            le = de(le, ue, fe, ce, oe[he + 1], 5, -165796510),
            ce = de(ce, le, ue, fe, oe[he + 6], 9, -1069501632),
            fe = de(fe, ce, le, ue, oe[he + 11], 14, 643717713),
            ue = de(ue, fe, ce, le, oe[he + 0], 20, -373897302),
            le = de(le, ue, fe, ce, oe[he + 5], 5, -701558691),
            ce = de(ce, le, ue, fe, oe[he + 10], 9, 38016083),
            fe = de(fe, ce, le, ue, oe[he + 15], 14, -660478335),
            ue = de(ue, fe, ce, le, oe[he + 4], 20, -405537848),
            le = de(le, ue, fe, ce, oe[he + 9], 5, 568446438),
            ce = de(ce, le, ue, fe, oe[he + 14], 9, -1019803690),
            fe = de(fe, ce, le, ue, oe[he + 3], 14, -187363961),
            ue = de(ue, fe, ce, le, oe[he + 8], 20, 1163531501),
            le = de(le, ue, fe, ce, oe[he + 13], 5, -1444681467),
            ce = de(ce, le, ue, fe, oe[he + 2], 9, -51403784),
            fe = de(fe, ce, le, ue, oe[he + 7], 14, 1735328473),
            ue = de(ue, fe, ce, le, oe[he + 12], 20, -1926607734),
            le = be(le, ue, fe, ce, oe[he + 5], 4, -378558),
            ce = be(ce, le, ue, fe, oe[he + 8], 11, -2022574463),
            fe = be(fe, ce, le, ue, oe[he + 11], 16, 1839030562),
            ue = be(ue, fe, ce, le, oe[he + 14], 23, -35309556),
            le = be(le, ue, fe, ce, oe[he + 1], 4, -1530992060),
            ce = be(ce, le, ue, fe, oe[he + 4], 11, 1272893353),
            fe = be(fe, ce, le, ue, oe[he + 7], 16, -155497632),
            ue = be(ue, fe, ce, le, oe[he + 10], 23, -1094730640),
            le = be(le, ue, fe, ce, oe[he + 13], 4, 681279174),
            ce = be(ce, le, ue, fe, oe[he + 0], 11, -358537222),
            fe = be(fe, ce, le, ue, oe[he + 3], 16, -722521979),
            ue = be(ue, fe, ce, le, oe[he + 6], 23, 76029189),
            le = be(le, ue, fe, ce, oe[he + 9], 4, -640364487),
            ce = be(ce, le, ue, fe, oe[he + 12], 11, -421815835),
            fe = be(fe, ce, le, ue, oe[he + 15], 16, 530742520),
            ue = be(ue, fe, ce, le, oe[he + 2], 23, -995338651),
            le = ye(le, ue, fe, ce, oe[he + 0], 6, -198630844),
            ce = ye(ce, le, ue, fe, oe[he + 7], 10, 1126891415),
            fe = ye(fe, ce, le, ue, oe[he + 14], 15, -1416354905),
            ue = ye(ue, fe, ce, le, oe[he + 5], 21, -57434055),
            le = ye(le, ue, fe, ce, oe[he + 12], 6, 1700485571),
            ce = ye(ce, le, ue, fe, oe[he + 3], 10, -1894986606),
            fe = ye(fe, ce, le, ue, oe[he + 10], 15, -1051523),
            ue = ye(ue, fe, ce, le, oe[he + 1], 21, -2054922799),
            le = ye(le, ue, fe, ce, oe[he + 8], 6, 1873313359),
            ce = ye(ce, le, ue, fe, oe[he + 15], 10, -30611744),
            fe = ye(fe, ce, le, ue, oe[he + 6], 15, -1560198380),
            ue = ye(ue, fe, ce, le, oe[he + 13], 21, 1309151649),
            le = ye(le, ue, fe, ce, oe[he + 4], 6, -145523070),
            ce = ye(ce, le, ue, fe, oe[he + 11], 10, -1120210379),
            fe = ye(fe, ce, le, ue, oe[he + 2], 15, 718787259),
            ue = ye(ue, fe, ce, le, oe[he + 9], 21, -343485551),
            le = le + ge >>> 0,
            ue = ue + ve >>> 0,
            fe = fe + me >>> 0,
            ce = ce + _e >>> 0
    }
    return endian([le, ue, fe, ce])
};

function md5(ie, ae = undefined) {
    if (ie == null)
        throw new Error("Illegal argument " + ie);
    var oe = wordsToBytes(ne(ie, ae));
    return ae && ae.asBytes ? oe : ae && ae.asString ? bytesToString(oe) : bytesToHex(oe)
}

var w_rid = md5(ue + ne)

console.log(w_rid)
get_md5(ue + ne)













