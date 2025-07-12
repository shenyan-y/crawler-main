import requests
import execjs



headers = {
    'Accept': 'application/json, text/javascript',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'DNT': '1',
    'Origin': 'https://www.pinduoduo.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.pinduoduo.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

anti_content = execjs.compile(open("_pdd.js").read()).call("get_anti_content")
print(anti_content)


params = {
    'tf_id': 'TFRQ0v00000Y_13400',
    'page': '1',
    'size': '39',
    # 'anti_content': '0aqAfa5e-wCEXxjdXUSt_USOOG7GxNhyxhPqgHKqTmZhApN7QjX3nad4X6CtkSyqzgyrjij0jUpPoX5T8X09qnpdYH0danq7dnqdoXqXYO0TLl92SAPbdeGM2XIXxcGDDpZthfiNLHxm8P_id8y02TYoSB-bbm7t3Zst2CkL2FEto9sqgxHs_IXp0Tv69HtmFG0dblNXYhYpE8niEqns0_NQdfNW7Tdm5tqda7mdblqNqdvM0ltT9Jx2tSo9gBsJX_YatfX1fEB5EZ48XSP9iWtQ9n7IJZ4UQoNx3ZZx-o5iy98ZLx1HsP763394QnJeJNlSFvld4PTTHDfRCHUTZyX45q4XxtnxxK4dYXudJOpxIPmYjyOvqfcEboRR3zA2wmE9QYDuFvU2o4A3',
    'anti_content': anti_content
}

res = requests.get('https://apiv2.pinduoduo.com/api/gindex/tf/query_tf_goods_info', params=params, headers=headers)


print(res.text)