import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")


import requests
import execjs
import json
from lxml import etree
import re


# 负责组装好session
def init():
    session = requests.session()

    session.headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
    }

    # 整体逻辑:
    #  1.拿页面源代码，提取到"chameleon.min.1750048.js"(1750048是变化的)的下载地址
    #  2.访问"chameleon.min.1750048.js"(1750048是变化的)的下载地址，获取到js内容，提取到TOKEN_SERVER_TIME
    #  3.把TOKEN_SERVER_TIME怼到你的js代码里。

    page_resp = session.get("https://www.iwencai.com/unifiedwap/home/index")
    page_html = page_resp.text

    tree = etree.HTML(page_html)
    src = tree.xpath("//script[1]/@src")[0]

    src = "https:" + src
    print(src)

    js_resp = session.get(src)
    chameleon_js_code = js_resp.text
    server_time_re = re.compile(r"var TOKEN_SERVER_TIME=(?P<chameleon_server_time>.*?);")
    chameleon_server_time = server_time_re.search(chameleon_js_code).group('chameleon_server_time')
    print(chameleon_server_time)

    f = open("v.js", mode="r", encoding="utf-8")
    js_content = f.read()

    # 把缺少的TOKEN_SERVER_TIME补充进去
    js_content = "var TOKEN_SERVER_TIME = " + str(chameleon_server_time) + ";\n" + js_content
    js = execjs.compile(js_content)

    # 在访问之前，加上 v
    v = js.call("curl_v")
    print(v)

    session.cookies['v'] = v

    return session



def work(msg):
    global session
    robot_url = "https://www.iwencai.com/customized/chart/get-robot-data"
    data = {
        "source": "Ths_iwencai_Xuangu",
        "version": "2.0",
        "query_area": "",
        "block_list": "",
        "add_info": {
            "urp":
                {
                    "scene": 1,
                    "company": 1,
                    "business": 1
                },
            "contentType": "json",
            "searchInfo": True
        },
        "question": msg,
        "perpage": 50,
        "page": 1,
        "secondary_intent": "stock",
        "log_info": {
            "input_type": "click"
        },
        "rsh": "Ths_iwencai_Xuangu_0cc8d37qb240v84lhib6u5a1weryv5ke"
    }
    while 1:
        try:
            resp = session.post(robot_url, data=json.dumps(data), headers={
                "content-type": "application/json"
            })
            # print(resp.text)
            return resp.json()
        except Exception as e:
            print("报错了", e)
            session = init()



session = init()
sth = work("平安股价")
print(sth)





