import random
import time

import requests
import execjs

cookies = {
    'dxy_da_cookie-id': 'ec96b1039a465e3bdb8b41e4e659c3ae1750945756697',
    '_ga': 'GA1.1.1907629809.1750945758',
    'JUTE_SESSION_ID': '673de251-2983-4bce-9d62-9e0b75f5d546',
    'Hm_lvt_5fee00bcc4c092fe5331cc51446d8be2': '1750945757,1751002127',
    'Hm_lpvt_5fee00bcc4c092fe5331cc51446d8be2': '1751002127',
    'HMACCOUNT': '023F463E67B94467',
    '_ga_LTBPLJJK75': 'GS2.1.s1751002127$o3$g0$t1751002127$j60$l0$h0',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/json;charset=utf-8',
    'dnt': '1',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.dxy.cn/bbs/newweb/pc/case/search?keyword=%E6%96%B0%E5%86%A0',
    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
    # 'cookie': 'dxy_da_cookie-id=ec96b1039a465e3bdb8b41e4e659c3ae1750945756697; _ga=GA1.1.1907629809.1750945758; JUTE_SESSION_ID=673de251-2983-4bce-9d62-9e0b75f5d546; Hm_lvt_5fee00bcc4c092fe5331cc51446d8be2=1750945757,1751002127; Hm_lpvt_5fee00bcc4c092fe5331cc51446d8be2=1751002127; HMACCOUNT=023F463E67B94467; _ga_LTBPLJJK75=GS2.1.s1751002127$o3$g0$t1751002127$j60$l0$h0',
}

import random

def u(e=8, t="number"):
    r = {
        "alphabet": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        "number": "0123456789"
    }[t]
    n = ""
    for _ in range(e):
        n += random.choice(r)
    return n

nonstr = u()
# nonstr = str(random.randint(0, 100000000)).rjust(8, '0')
# nonstr = ''.join([str(random.randint(0, 9)) for _ in range(8)])
timestamp = int(time.time() * 1000)

params = {
    'keyword': '新冠',
    'sectionCode': '0',
    'pageSize': '20',
    'pageNum': '1',
    'serverTimestamp': timestamp - 2,
    'timestamp': timestamp,
    'noncestr': nonstr,
}

data = f"appSignKey=4bTogwpz7RzNO2VTFtW7zcfRkAE97ox6ZSgcQi7FgYdqrHqKB7aGqEZ4o7yssa2aEXoV3bQwh12FFgVNlpyYk2Yjm9d2EZGeGu3&keyword={params['keyword']}&noncestr={params['noncestr']}&pageNum={params['pageNum']}&pageSize={params['pageSize']}&sectionCode=0&serverTimestamp={params['serverTimestamp']}&timestamp={params['timestamp']}"
sign = execjs.compile(open("dxy.js").read()).call("u", data)
params["sign"] = sign




response = requests.get('https://www.dxy.cn/bbs/newweb/case-bank/page-post-info', params=params, cookies=cookies, headers=headers)

print(response.text)