

function ct(t) {
    this['$_BCAm'] = t || [];
}

ct.prototype = {
    '$_CAZ': function (t) {
        var e = this['$_BCAm'];
        if (e['map'])
            return new ct(e['map'](t));
        for (var n = [], r = 0, i = e['length']; r < i; r += 1)
            n[r] = t(e[r], r, this);
        return new ct(n);
    }
}


function $_FDd(gui) {
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
    }(gui)
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


function test() {
    let gui = [
        [100, 200, 0],
        [102, 203, 1],
        [105, 206, 2],
        [108, 209, 3]
    ];

    let result = $_FDd(gui);
    console.log("加密后数据：", result);
}

test();
