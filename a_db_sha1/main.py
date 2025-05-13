# -*- coding: utf-8 -*-
import base64
import hmac
import time
from urllib.parse import quote, quote_plus, urlparse
from hashlib import sha1

import requests

'''
HmacSHA1
key  bf7dddc7c9cfe6f7
GET&/api/v2/movie/year_ranks&c012dfa1b20ab16340389ee516201429&1747142898  url编码
'''


def get_sig(path, ts):
    # GET&/api/v2/movie/year_ranks&c012dfa1b20ab16340389ee516201429&1747142898
    # params = quote_plus('/api/v2/movie/year_ranks')
    params = quote_plus(path)
    # pa = GET&%2Fapi%2Fv2%2Fmovie%2Fyear_ranks&c012dfa1b20ab16340389ee516201429&1747142898
    pa = "GET&" + params + "&" + "c012dfa1b20ab16340389ee516201429" + "&" + ts
    print(pa)
    key = 'bf7dddc7c9cfe6f7'.encode()
    hmac_cc = hmac.new(key, pa.encode(), sha1).digest()
    return base64.b64encode(hmac_cc).decode()
    # GET&/api/v2/movie/year_ranks&c012dfa1b20ab16340389ee516201429&1747142898 --> l15n6tAM3ajkDcglXL37BpKlvNM=


def spider():
    ts = str(int(time.time()))
    url = 'https://frodo.douban.com/api/v2/movie/year_ranks'
    params = {
        "udid": "87422395833710987bd0d03ce715cdedb1ed9e8a",
        "rom": "android",
        "apikey": "0dad551ec0f84ed02907ff5c42e8ec70",
        "s": "rexxar_new",
        "channel": "Yingyongbao_Market",
        "timezone": "Asia/Shanghai",
        "device_id": "87422395833710987bd0d03ce715cdedb1ed9e8a",
        "os_rom": "android",
        "apple": "2f22d926018950166ec75479c63c45d7",
        "sugar": "0",
        "loc_id": "108288",
        # "_sig": "l15n6tAM3ajkDcglXL37BpKlvNM=",
        # "_ts": "1747142898"
    }

    # 如果 URL 是 https://www.example.com/path/to/resource?query=123#section，调用 urlparse(url) 后：
    # scheme 会是 https  ； netloc 会是 www.example.com  ； path 会是 /path/to/resource
    # query 会是 query=123  ； fragment 会是 section
    path = urlparse(url).path

    _sig = get_sig(path, ts)
    _ts = ts
    print(_sig)
    params['_sig'] = _sig
    params['_ts'] = _ts
    headers = {
        "user-agent": "Rexxar-Core/0.1.3 api-client/1 com.douban.frodo/7.18.0(230) Android/29 product/flame vendor/Google model/Pixel 4 brand/google  rom/android  network/wifi  udid/87422395833710987bd0d03ce715cdedb1ed9e8a  platform/mobile com.douban.frodo/7.18.0(230) Rexxar/1.2.151  platform/mobile 1.2.151",
        "accept-encoding": "gzip",
        "authorization": "Bearer c012dfa1b20ab16340389ee516201429"
    }
    res = requests.get(url=url, params=params, headers=headers)
    print(res.text)


spider()
