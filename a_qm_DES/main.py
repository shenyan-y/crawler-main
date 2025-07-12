# -*- coding: utf-8 -*-


import base64
import json
from Crypto.Cipher import DES3
import binascii

import requests

headers = {
    "User-Agent": "android-Pixel 4-Google-qmp-5.7.4",
    "Accept-Encoding": "gzip",
    'content-type':'application/x-www-form-urlencoded'
}

data = {
    'version':'5.7.4',
    'ptype':'qmp_android',
    'id':'8311d3112db71bbbf321592e4a2c5b2f1387608',
    'num':20,
    'app_uuid':'0eb2469f2246b42e'
}

url = "https://azapi.qimingpian.cn/activity/newsFlash"
response = requests.post(url, headers=headers,data=data)
# 服务器响应的是一个 JSON 对象，其中的 encrypt_data 是一个加密字符串。
datas = response.json().get('encrypt_data')

# 处理密文
# 这一行做了两件事：
# filter(str.isprintable, datas)：去除不可打印字符，确保 base64 数据是有效的。
# base64.b64decode(...)：将字符串进行 base64 解码，得到原始二进制密文。
decode_text = base64.b64decode(''.join(filter(str.isprintable,datas)))

# 创建密钥
key = "sjdqmp20161205#_316@gfmt" # 明文密钥
# 调整密钥为合法的 DES 密钥（必须满足奇偶校验）。
key_spec = DES3.adjust_key_parity(key_in=key.encode())
# 创建 ECB 模式的 3DES 加密对象（ECB 是一种分组加密模式）。
secert_key = DES3.new(key_spec,DES3.MODE_ECB)

# 解密数据
text = secert_key.decrypt(decode_text).decode()

# 提取信息 查找对应的信息  开始和结束位置
# 由于解密后的内容可能包含杂质字符或 padding，所以用 { 和 } 定位 JSON 的开始和结束位置。
# 截取出纯 JSON 字符串用于解析。
s_index = text.find('{')
e_inedx = text.rfind('}') + 1
texts = text[s_index:e_inedx]
# 将 JSON 字符串转换为 Python 的字典对象。
items = json.loads(texts)
print(items)




