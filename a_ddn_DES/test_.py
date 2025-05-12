# -*- coding: utf-8 -*-
import base64
import json

from Crypto.Cipher import DES
from Crypto.Util.Padding import pad
import hashlib
import time

def md5_enys(arg):
    md5 = hashlib.md5()
    md5.update(arg.encode("utf-8"))
    return md5.hexdigest()

def get_sign():
    time_str = str(int(time.time() * 1000))
    text = ''
    data = {"equtype": "ANDROID", "loginImei":"Androidnull","timeStamp":time_str,"userPwd":"1111qqw","username":"13535353535"}
    for key in data:
        text += f"{key}={data[key]}&"
    BASE_APPEND = "sdlkjsdljf0j2fsjk"
    text += f"key={BASE_APPEND}"
    sign = md5_enys(text)
    data['sign'] = sign
    return data


def md5_eny(arg):
    md5 = hashlib.md5()
    md5.update(arg.encode("utf-8"))
    # 返回最终的 md5 哈希结果（二进制形式）
    return md5.digest()


def des_cry(data,key,iv):
    des = DES.new(key,DES.MODE_CBC,iv)
    pad_data = pad(data.encode("utf-8"),des.block_size)
    en_data = des.encrypt(pad_data)
    return base64.b64encode(en_data).decode('utf-8')

data = get_sign()
print(data)

des_key = md5_eny('65102933')[:8] # 取前8位

des_iv = "32028092".encode('utf-8')

print(des_cry(json.dumps(data), des_key, des_iv))









