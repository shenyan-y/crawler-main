import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs


import requests


session = requests.session()
session.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"


# 1. 加载cookie
first_url = "https://www.qimai.cn/rank"

session.get(first_url)
# print(session.cookies)

get_data_url = "https://api.qimai.cn/rank/indexPlus/brand_id/1"

params = {
    "brand": "all",
    "country": "cn",
    "device": "iphone",
    "genre": "36",
    "date": "2025-06-08",
    "page": "4",
}
# 计算ana>>>>

js = execjs.compile(open("七麦分析.js", mode="r", encoding="utf-8").read())
new_url = js.call("get_mm",get_data_url, params)


session.cookies['qm_check'] = "A1sdRUIQChtxen8pI0dAMRcOUFseEHBeQF0JTjVBWDAIXEQaYhAQbF1FIRUJCBETVkQSGAlIBAhVVlNeOU9TFXNbQlxTQAshV1ZIDgolAGgCEElDaw06VktIPEo+BAYbEhUSV1AABQxKQltKGQceABUAGAhHGw%3D%3D"


data_resp = session.get(new_url, params=params)

print(data_resp.json())









