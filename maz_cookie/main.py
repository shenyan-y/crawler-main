import re

import requests


def get_cookie():
    headers = {
        # "^Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7^",
        # "^Accept-Language": "zh-CN,zh;q=0.9^",
        # "^Cache-Control": "no-cache^",
        # "^DNT": "1^",
        # "^Pragma": "no-cache^",
        # "^Proxy-Connection": "keep-alive^",
        # "^Upgrade-Insecure-Requests": "1^",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
    }
    url = "http://www.zjmazhang.gov.cn/hdjlpt/published"
    params = {
        "via": "pc"
    }
    response = requests.get(url, headers=headers, params=params, verify=False)
    szxx_session = response.cookies.get('szxx_session')
    XSRF_TOKEN = response.cookies.get('XSRF-TOKEN')
    _CSRF = re.findall("var _CSRF = '(.*?)';", response.text)

    return szxx_session, XSRF_TOKEN, _CSRF[0]



szxx_session, XSRF_TOKEN, _CSRF = get_cookie()



headers = {
    # "^Accept": "application/json, text/plain, */*^",
    # "^Accept-Language": "zh-CN,zh;q=0.9^",
    # "^Cache-Control": "no-cache^",
    # "^Content-Type": "application/x-www-form-urlencoded^",
    # "^DNT": "1^",
    # "^Origin": "http://www.zjmazhang.gov.cn^",
    # "^Pragma": "no-cache^",
    # "^Proxy-Connection": "keep-alive^",
    # "Referer": "http://www.zjmazhang.gov.cn/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    # CSRF-TOKEN  令牌  首页
    "X-CSRF-TOKEN": _CSRF,
}

cookies = {
    'szxx_session': szxx_session,
    'XSRF-TOKEN': XSRF_TOKEN
}
url = "http://www.zjmazhang.gov.cn/hdjlpt/letter/pubList"
data = {
    "offset": "0",
    "limit": "20",
    "site_id": "759010",
    "time_from": "1715788800",
    "time_to": "1747324799"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data, verify=False)

print(response.text)

































