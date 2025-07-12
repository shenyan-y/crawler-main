import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")


import requests

import re
from Crypto.Cipher import DES
import binascii

"""
var _0x9843d3 = function (_0x29d556, _0xcc6df, _0x3d7020) {
    if (0 == _0xcc6df)
        return _0x29d556['substr'](_0x3d7020);
    var _0x48914b;
    _0x48914b = '' + _0x29d556['substr'](0x0, _0xcc6df);
    return _0x48914b += _0x29d556['substr'](_0xcc6df + _0x3d7020);
};
"""

def func(a, b, c):
    if b == 0:
        return a[c:]
    d = str('' + a[:b])
    d += a[b+c:]
    return d



def shell(data):
    iv = int(data[-1], 16) + 9
    key = int(data[iv], 16)
    data = func(data, iv, 1)
    iv = data[key:key+8]
    data = func(data, key, 8)

    key = iv.encode("utf-8")
    iv = iv.encode("utf-8")

    bs = binascii.a2b_hex(data)
    aes = DES.new(key=key, mode=DES.MODE_ECB)
    r = aes.decrypt(bs).decode("utf-8")
    r = re.split(r"\d{4}-\d{2}-\d{2} ", r)[0]
    return r


session = requests.session()

session.headers['User-Agent'] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"


url = "https://www.endata.com.cn/API/GetData.ashx"
data = {
    "year": "2020",
    "MethodName": "BoxOffice_GetYearInfoData"
}
res_d = session.post(url, data=data)
# print(res_d.text)

r = shell(res_d.text)
print(r)








