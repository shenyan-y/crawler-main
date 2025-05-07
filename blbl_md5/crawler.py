import time
import urllib.parse
import requests
import execjs
from config.settings import HEADERS

js = execjs.compile(open('decrypt.js', 'r', encoding='utf-8').read())

def crawler():
    all_items = []

    for i in range(1, 20):
        url = "https://api.bilibili.com/x/web-interface/wbi/index/top/feed/rcmd"
        wts = str(round(time.time()))

        params = {
            "web_location": "1430650",
            "y_num": "5",
            "fresh_type": "3",
            "feed_version": "V8",
            "fresh_idx_1h": str(i),
            "fetch_row": "1",
            "fresh_idx": str(i),
            "brush": str(i - 1),
            "homepage_ver": "1",
            "ps": "10",
            "last_y_num": "5",
            "screen": "2561-609",
            "seo_info": "",
            "last_showlist": "av_114381522212155,av_114386605704564,av_114384122676881,av_114369677624875,av_114387830507244,av_114387276793113,av_n_114374039569584,av_n_114398131651903,av_n_114380817566001,av_n_114392930783187",
            "uniq_id": "1310305678742",
            "w_rid": "placeholder",
            "wts": wts
        }

        params_s = []
        for key, value in params.items():
            if key == "last_showlist":
                value = urllib.parse.quote(value, safe='')
            params_s.append(f"{key}={value}")
        ue = "&".join(params_s)

        # JS 签名
        w_rid = js.call('md5', ue + "ea1db124af3c7062474693fa704f4ff8")
        params["w_rid"] = w_rid

        try:
            response = requests.get(url, headers=HEADERS, params=params, timeout=10)
            data = response.json()
        except Exception as e:
            print(f"第 {i} 页请求失败：{e}")
            continue

        if "data" in data and "item" in data["data"]:
            all_items.extend(data["data"]["item"])
        else:
            print(f"第 {i} 页数据缺失，跳过")

    return all_items
